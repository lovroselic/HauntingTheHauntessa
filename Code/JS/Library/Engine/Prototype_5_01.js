/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */

"use strict";
console.clear();

const LIB = {
    VERSION: "5.01",
    CSS: "color: #EFE",
    log: function () {
        console.log(`%cPrototype LIB ${LIB.VERSION} loaded`, LIB.CSS);
    }
};

/*
Prototype and helpful functions library
as used by LS

changelog:
5.00: new fresh version, 3D grids vectors
5.01: typed array, extend

*/

(function () {
    function RND(start, end) {
        return Math.floor(Math.random() * (++end - start) + start);
    }
    function RNDF(start, end, p = 2) {
        return Math.floor(Math.random() * (end + 10 ** -p - start) * 10 ** p + start * 10 ** p) / 100;
    }
    function RandomFloat(start, end) {
        return Math.random() * (end - start) + start;
    }
    function coinFlip() {
        return RND(0, 1) === 1;
    }
    function randomSign() {
        return coinFlip() ? 1 : -1;
    }
    function probable(x) {
        return RND(0, 100) <= x;
    }
    function roundN(x, N) {
        return Math.round(x / N) * N;
    }
    function round10(x) {
        return roundN(x, 10);
    }
    function round5(x) {
        return roundN(x, 5);
    }
    function weightedRnd(weights) {
        const totalWeight = Object.values(weights).sum();
        let sum = 0;
        const rand = Math.random() * totalWeight;
        for (const key in weights) {
            sum += weights[key];
            if (rand < sum) return key;
        }
        return null;
    }
    function colorStringToVector(str) {
        if (!/^#[0-9A-Fa-f]{6}$/.test(str)) throw new Error(`Invalid color string: ${str}`);
        let vec = new Float32Array(3);
        vec[0] = parseInt(str.substring(1, 3), 16) / 255;
        vec[1] = parseInt(str.substring(3, 5), 16) / 255;
        vec[2] = parseInt(str.substring(5, 7), 16) / 255;
        return vec;
    }
    function colorVectorToHex(vector) {
        if (vector.length !== 3) throw new Error(`Invalid length of color vector: ${vector.length}`);
        let hexStr = "#";
        for (let dim in vector) {
            let int = Math.round(Math.max(0, Math.min(vector[dim], 1)) * 255);
            let hex = int.toString(16).toUpperCase().padStart(2, '0');
            hexStr += hex;
        }
        return hexStr;
    }
    function colorVectorToRGB_Vector(vector) {
        const rgb = new Uint8Array(3);
        for (let dim in vector) {
            let int = Math.round(Math.max(0, Math.min(vector[dim], 1)) * 255);
            rgb[dim] = int;
        }
        return rgb;
    }
    function RGB_vectorToRGB_string(rgb) {
        if (rgb.length !== 3) throw new Error(`Invalid length of rgb vector: ${rbg.length}`);
        return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }
    function colorVectorToRGB_String(vector) {
        return RGB_vectorToRGB_string(colorVectorToRGB_Vector(vector));
    }
    function binarySearch(arr, target) {
        let low = 0, high = arr.length;
        while (low < high) {
            let mid = (low + high) >>> 1;
            if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
    function binarySearchClosestLowFloat(arr, target, delta) {
        let low = 0;
        let high = arr.length;
        while (low < high) {
            let mid = (low + high) >>> 1;
            if (arr[mid] > target - delta) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
    function listObjectKeys(obj) {
        const list = [];
        for (const key in obj) {
            list.push(key);
        }
        return list;
    }
    function stringifyObjectList(selection) {
        const list = [];
        for (const name in selection) {
            const obj = selection[name];
            for (const key in obj) {
                list.push(`${name}.${key}`);
            }
        }
        return list;
    }
    function evalObjectString(root, path) {
        let obj = root;
        const parts = path.split(".");
        for (const part of parts) {
            if (obj && Object.hasOwnProperty.call(obj, part)) {
                obj = obj[part];
            } else {
                return undefined;
            }
        }
        return obj;
    }
    function factorial(n) {
        let r = 1;
        while (n > 0) r *= n--;
        return r;
    }

    /**
     * A utility function to enable multiple inheritance in JavaScript.
     * It takes an array of base classes and merges their properties and methods into a single class.
     *
     * @param {Function[]} bases - An array of constructor functions (classes) to inherit from.
     * @returns {Function} A dynamically created class that extends all provided base classes.
     *
     * class Gross extends Classes([Nose,Ear]) {
      constructor() {
        super();
        this.gross = true;
      }
    }
    */
    function Classes(bases) {
        class Bases {
            constructor(...args) {
                bases.forEach(base => {
                    const instance = new base(...args);
                    Object.assign(this, instance); // Copy instance properties
                });
            }
        }

        // Copy prototype methods from each base class
        bases.forEach(base => {
            Object.getOwnPropertyNames(base.prototype)
                .filter(prop => prop !== "constructor")
                .forEach(prop => {
                    Object.defineProperty(Bases.prototype, prop, Object.getOwnPropertyDescriptor(base.prototype, prop));
                });
        });

        return Bases;
    }



    /*
    function Classes(bases) {
        class Bases {
            constructor() {
                bases.forEach(base => Object.assign(this, new base()));
            }
        }
        bases.forEach(base => {
            Object.getOwnPropertyNames(base.prototype)
                .filter(prop => prop != 'constructor')
                .forEach(prop => Bases.prototype[prop] = base.prototype[prop])
        })
        return Bases;
    }
        */


    /**
    * Calculates the smallest power of two greater than or equal to the given value.
    *
    * This function is useful for scenarios where alignment to powers of two is required,
    * such as memory allocation, binary operations, or certain algorithms.
    *
    * @param {number} value - A positive numerical value for which the next power of two is calculated.
    * @returns {number} The smallest power of two greater than or equal to the input value.
    * 
    * @throws {TypeError} If the input value is not a number.
    * @throws {RangeError} If the input value is less than or equal to zero.
    *
    */
    function POT(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Input value must be a number.');
        }
        if (value <= 0) {
            throw new RangeError('Input value must be greater than zero.');
        }

        return Math.pow(2, Math.ceil(Math.log2(value)));
    }

    window.RND = RND;
    window.RNDF = RNDF;
    window.RandomFloat = RandomFloat;
    window.coinFlip = coinFlip;
    window.probable = probable;
    window.roundN = roundN;
    window.round10 = round10;
    window.round5 = round5;
    window.randomSign = randomSign;
    window.weightedRnd = weightedRnd;
    window.colorStringToVector = colorStringToVector;
    window.colorVectorToHex = colorVectorToHex;
    window.binarySearch = binarySearch;
    window.binarySearchClosestLowFloat = binarySearchClosestLowFloat;
    window.colorVectorToRGB_Vector = colorVectorToRGB_Vector;
    window.RGB_vectorToRGB_string = RGB_vectorToRGB_string;
    window.colorVectorToRGB_String = colorVectorToRGB_String;
    window.listObjectKeys = listObjectKeys;
    window.stringifyObjectList = stringifyObjectList;
    window.evalObjectString = evalObjectString;
    window.POT = POT;
    window.factorial = factorial;
    window.Classes = Classes;
})();

/** Date prototypes */
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
};
Date.prototype.addMonths = function (months) {
    this.setMonth(this.getMonth() + months);
};
Date.prototype.addYears = function (years) {
    this.setFullYear(this.getFullYear() + years);
};
Date.prototype.stringify = function () {
    const d = String(this.getDate()).padStart(2, '0');
    const m = String(this.getMonth() + 1).padStart(2, '0');
    const y = this.getFullYear();
    return `${d}/${m}/${y}`;
};
Date.prototype.ISO = function () {
    return this.toISOString().replace('T', ' ').split('.')[0];
};

/** Math */

/**
 * Converts an angle from degrees to radians.
 *
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
Math.radians = function (degrees) {
    if (typeof degrees !== 'number') {
        throw new Error('The argument should be a number.');
    }

    return (degrees * Math.PI) / 180;
};

/**
 * Converts an angle from radians to degrees.
 *
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
Math.degrees = function (radians) {
    if (typeof radians !== 'number') {
        throw new Error('The argument should be a number.');
    }

    return (radians * 180) / Math.PI;
};

/**
 * Rounds a floating-point number to the specified precision.
 * Uses the Number.EPSILON to handle floating-point errors.
 *
 * @param {number} num - The number to be rounded.
 * @param {number} decimalPlaces - The number of decimal places to round to.
 * @returns {number} - The rounded number.
 */
Math.roundFloat = function (num, decimalPlaces) {
    if (typeof num !== 'number' || typeof decimalPlaces !== 'number') {
        throw new Error('Both arguments should be numbers.');
    }

    const factor = 10 ** decimalPlaces;
    const epsilonCorrectedValue = num * factor * (1 + Number.EPSILON);

    return Math.round(epsilonCorrectedValue) / factor;
};

Math.frac = function (num) {
    return num - Math.trunc(num);
}

CanvasRenderingContext2D.prototype.pixelAt = function (x, y, size = 1) {
    this.fillRect(x, y, size, size);
};
CanvasRenderingContext2D.prototype.pixelAtPoint = function (point, size = 1) {
    this.fillRect(point.x, point.y, size, size);
};
CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius, fill = false, stroke = true) {
    let cornerRadius = {
        upperLeft: 0,
        upperRight: 0,
        lowerLeft: 0,
        lowerRight: 0
    };

    if (typeof radius === "object") {
        Object.assign(cornerRadius, radius);
    }
    this.beginPath();
    this.moveTo(x + cornerRadius.upperLeft, y);
    this.lineTo(x + width - cornerRadius.upperRight, y);
    this.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
    this.lineTo(x + width, y + height - cornerRadius.lowerRight);
    this.quadraticCurveTo(x + width, y + height, x + width - cornerRadius.lowerRight, y + height);
    this.lineTo(x + cornerRadius.lowerLeft, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
    this.lineTo(x, y + cornerRadius.upperLeft);
    this.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
    this.closePath();
    if (stroke) {
        this.stroke();
    }
    if (fill) {
        this.fill();
    }
};

/* collection of prototypes LS */
Array.create2DArray = function (rows, columns, initialValue = 0) {
    return new Array(rows).fill().map(() => new Array(columns).fill(initialValue));
};
Array.prototype.clear = function () {
    this.length = 0;
};
Array.prototype.swap = function (x, y) {
    [this[x], this[y]] = [this[y], this[x]];
};
Array.prototype.shuffle = function () {
    var i = this.length,
        j;
    while (--i > 0) {
        j = RND(0, i);
        this.swap(i, j);
    }
    return this;
};
Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};
Array.prototype.average = function () {
    return this.reduce((a, b) => a + b) / this.length;
};
Array.prototype.createPool = function (mx, N) {
    if (!this) return false;
    this.length = 0;
    let tempArray = Array.from({ length: mx }, (_, i) => i);
    for (let i = 0; i < N; i++) {
        let top = tempArray.length;
        let addx = RND(0, top - 1);
        this.push(tempArray[addx]);
        tempArray[addx] = tempArray[top - 1];
        tempArray.length--;
    }
    return this;
};
Array.prototype.compare = function (array) {
    if (!array) return false;
    var LN = this.length;
    if (LN !== array.length) return false;
    for (var x = 0; x < LN; x++) {
        if (this[x] !== array[x]) return false;
    }
    return true;
};
Array.prototype.removeIfInArray = function (arr) {
    //remove if value
    const valueSet = new Set(arr);
    for (let x = this.length - 1; x >= 0; x--) {
        if (valueSet.has(this[x])) {
            this.splice(x, 1);
        }
    }
};
Array.prototype.removeIfIndexInArray = function (arr) {
    //remove if index
    const indexSet = new Set(arr);
    for (let x = this.length - 1; x >= 0; x--) {
        if (indexSet.has(x)) {
            this.splice(x, 1);
        }
    }
};
Array.prototype.removeIndices = function (indices) {
    //remove if index, new array
    return this.filter((_, index) => !indices.includes(index));
}
Array.prototype.removeValues = function (values) {
    //remove if value, new array
    return this.filter((el, _) => !values.includes(el));
}
Array.prototype.remove = function (value) {
    const LN = this.length;
    for (var x = LN - 1; x >= 0; x--) {
        if (this[x] === value) {
            this.splice(x, 1);
        }
    }
};
Array.prototype.chooseRandom = function () {
    let LN = this.length;
    let choose = RND(1, LN) - 1;
    return this[choose];
};
Array.prototype.removeRandom = function () {
    let LN = this.length;
    let choose = RND(1, LN) - 1;
    return this.splice(choose, 1)[0];
};
Array.prototype.removeRandomPool = function (N) {
    let LN = this.length;
    if (N <= 0) return [];
    if (N >= LN) {
        let temp = this.clone();
        this.clear();
        return temp;
    }
    let temp = [];
    for (let i = 0; i < N; i++) {
        temp.push(this.removeRandom());
    }
    return temp;
};
Array.prototype.clone = function () {
    return [].concat(this);
};
Array.prototype.deepClone = function () {
    return this.map((item) => {
        if (Array.isArray(item)) {
            return item.deepClone();                                                                      // recursively clone nested arrays
        } else if (typeof item === 'object' && item !== null) {
            return Object.fromEntries(Object.entries(item).map(([key, val]) => [key, val.deepClone()]));  // recursively clone nested objects
        } else {
            return item;                                                                                  // return primitive values unchanged
        }
    });
};
Array.prototype.sortByPropAsc = function (prop) {
    this.sort(sort);

    function sort(a, b) {
        return a[prop] - b[prop];
    }
};
Array.prototype.sortByPropDesc = function (prop) {
    this.sort(sort);

    function sort(a, b) {
        return b[prop] - a[prop];
    }
};
Array.prototype.last = function () {
    if (this.length === 0) return null;
    return this[this.length - 1];
};
Array.prototype.fromBack = function (idx) {
    return this[this.length - idx];
};
Array.prototype.unique = function () {
    let set = new Set(this);
    return [...set];
};
Array.prototype.midsort = function () {
    console.assert(this.length % 2 != 0, "Expected array with odd length");
    let sorted = [];
    let start = (this.length / 2) | 0;
    sorted.push(this[start]);
    for (let i = 1; i <= start; i++) {
        sorted.push(this[start - i]);
        sorted.push(this[start + i]);
    }
    return sorted;
};
Array.prototype.addUnique = function (arr) {
    let temp = this.concat(arr);
    temp = new Set(temp);
    return [...temp];
};
Array.prototype.removeValueOnce = function (value) {
    let idx = this.indexOf(value);
    if (idx !== -1) {
        this.splice(idx, 1);
    }
};
Array.prototype.count = function (value) {
    let filtered = this.filter(item => item === value);
    return filtered.length;
};
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
};
String.prototype.trimSpace = function () {
    let temp = this.split(" ");
    temp.remove("");
    return temp.join(" ");
};
String.prototype.changeChar = function (at, char) {
    let LN = this.length - 1;
    if (at > LN || at < 0) return -1;
    const p1 = this.slice(0, at);
    const p2 = this.slice(at + 1, ++LN);
    return [p1, char, p2].join("");
};
String.prototype.splitByN = function (N) {
    let result = [];
    for (let i = 0, LN = this.length; i < LN; i += N) {
        result.push(this.substring(i, i + N));
    }
    return result;
};
String.prototype.fill = function (stringy, howMany) {
    var s = this;
    for (; ;) {
        if (howMany & 1) s += stringy;
        howMany >>= 1;
        if (howMany) stringy += stringy;
        else break;
    }
    return s;
};
String.prototype.splitOnLastDot = function () {
    const lastIndex = this.lastIndexOf(".");
    if (lastIndex === -1) {
        return [this, ""];
    } else {
        const firstPart = this.slice(0, lastIndex);
        const secondPart = this.slice(lastIndex + 1);
        return [firstPart, secondPart];
    }
};
String.prototype.extract = function (regexString) {
    let regex = new RegExp(regexString);
    let match = this.match(regex);
    if (match) return match[0];
    return null;
};
String.prototype.extractGroup = function (regexString) {
    let regex = new RegExp(regexString);
    let exec = regex.exec(this);
    if (exec) return exec[1];
    return null;
};
Set.prototype.moveFrom = function (s) {
    s.forEach(e => {
        this.add(e);
        s.delete(e);
    });
};
Set.prototype.first = function () {
    if (this.entries().next().value) {
        return this.entries().next().value[0];
    } else {
        return null;
    }
};
Set.prototype.addArray = function (arr) {
    arr.forEach(el => this.add(el));
};
Set.prototype.removeArray = function (arr) {
    arr.forEach(el => this.delete(el));
};
Set.prototype.intersect = function (x) {
    return new Set([...this].filter(el => x.has(el)));
};

/** typed arrays */

[Uint8Array, Uint16Array, Uint32Array].forEach(TypedArrayClass => {
    TypedArrayClass.prototype.extend = function (extraLength, fill = 0) {
        const extended = new TypedArrayClass(this.length + extraLength);
        extended.set(this);
        if (fill) extended.fill(fill, this.length);
        return extended;
    };
});


/** Grids */
class MasterGridClass {
    constructor() { }
    EuclidianDistance(grid) {
        return Math.hypot(this.x - grid.x, this.y - grid.y);
    }
    same(grid) {
        return (grid.x === this.x) && (grid.y === this.y);
    }
    limit(maxX, maxY) {
        this.x = Math.min(maxX, Math.max(0, this.x));
        this.y = Math.min(maxY, Math.max(0, this.y));
        return new this.constructor(this.x, this.y);
    }
    manhattanDistance(grid) {
        return Math.abs(this.x - grid.x) + Math.abs(this.y - grid.y);
    }
}

class Grid extends MasterGridClass {
    constructor(x = 0, y = 0) {
        super();
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
    }
    static toClass(grid) {
        return new Grid(grid.x, grid.y);
    }
    static toCenter(grid) {
        return new FP_Grid(grid.x + 0.5, grid.y + 0.5);
    }
    add(vector, mul = 1) {
        return new Grid(this.x + vector.x * mul, this.y + vector.y * mul);
    }
    sub(vector, mul = 1) {
        return this.add(vector, -mul);
    }
    isInAt(dirArray) {
        return dirArray.findIndex(dir => dir.x === this.x && dir.y === this.y);
    }
    direction(vector) {
        const dx = (vector.x - this.x) / Math.abs(this.x - vector.x) || 0;
        const dy = (vector.y - this.y) / Math.abs(this.y - vector.y) || 0;
        return new Vector(dx, dy);
    }
    absDirection(vector) {
        let dx = vector.x - this.x;
        let dy = vector.y - this.y;
        return new Vector(dx, dy);
    }
    same(vector) {
        return (this.x === vector.x && this.y === vector.y);
    }
    distance(vector) {
        return Math.abs(this.x - vector.x) + Math.abs(this.y - vector.y);
    }
    distanceDiagonal(vector) {
        let distance = (this.x - vector.x) ** 2 + (this.y - vector.y) ** 2;
        return Math.sqrt(distance) | 0;
    }
    directionSolutions(grid) {
        let solutions = [];
        let dir = this.direction(grid);
        let absDir = this.absDirection(grid);
        let split = dir.ortoSplit();
        solutions.push(new Direction(split[0], Math.abs(absDir.x)));
        solutions.push(new Direction(split[1], Math.abs(absDir.y)));

        if (solutions[0].len < solutions[1].len) solutions.swap(0, 1);
        return solutions;
    }
    reflect(C) {
        let x;
        let y;
        if (C.x !== 0) {
            x = 2 * C.x - this.x;
        } else x = this.x;
        if (C.y !== 0) {
            y = 2 * C.y - this.y;
        } else y = this.y;
        return new Grid(x, y);
    }
}

class FP_Grid extends MasterGridClass {
    constructor(x = 0, y = 0) {
        super();
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    }
    static toClass(grid) {
        return new FP_Grid(grid.x, grid.y);
    }
    toPoint(GS = ENGINE.INI.GRIDPIX) {
        let x = Math.round(this.x * GS);
        let y = Math.round(this.y * GS);
        return new Point(x, y);
    }
    translate(vector, length = 1) {
        let x = this.x + vector.x * length;
        let y = this.y + vector.y * length;
        return new FP_Grid(x, y);
    }
    direction(grid) {
        let dx = grid.x - this.x;
        let dy = grid.y - this.y;
        let D = this.EuclidianDistance(grid);
        return new FP_Vector(dx / D, dy / D);
    }
    add(vector, factor = 1.0) {
        return new FP_Grid(this.x + vector.x * factor, this.y + vector.y * factor);
    }
    sub(vector, factor = 1.0) {
        return this.add(vector, -factor);
    }
}

class Point extends MasterGridClass {
    constructor(x = 0, y = 0) {
        super();
        this.x = Math.round(x);
        this.y = Math.round(y);
    }
    static toClass(point) {
        return new Point(point.x, point.y);
    }
    translate(vector, len = ENGINE.INI.GRIDPIX) {
        return new Point(this.x + vector.x * len, this.y + vector.y * len);
    }
    toViewport() {
        //change to offset
        this.x = this.x - ENGINE.VIEWPORT.vx;
        this.y = this.y - ENGINE.VIEWPORT.vy;
    }
    toAbsolute() {
        this.x = this.x + ENGINE.VIEWPORT.vx;
        this.y = this.y + ENGINE.VIEWPORT.vy;
    }
    add(vector, len = 1) {
        return new Point(this.x + vector.x * len, this.y + vector.y * len);
    }
}

/** Vectors */
class MasterVectorClass {
    constructor() { }
    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    normalize() {
        const mag = this.magnitude();
        if (mag === 0) throw new Error("Cannot normalize a zero vector");
        return new FP_Vector(this.x / mag, this.y / mag);
    }
    rotate(rad) {
        let COS = Math.cos(rad);
        let SIN = Math.sin(rad);
        let x = this.x * COS - this.y * SIN;
        let y = this.x * SIN + this.y * COS;
        return new FP_Vector(x, y);
    }
    same(vec) {
        return (vec.x === this.x) && (vec.y === this.y);
    }
    sub(vector, factor = 1.0) {
        return this.add(vector, -factor);
    }
    toVector3D(z = 0) {
        return new Vector3D(this.x, this.y, z);
    }
}

class FP_Vector extends MasterVectorClass {
    constructor(x = 0, y = 0) {
        super();
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    }
    static toClass(vector) {
        return new FP_Vector(vector.x, vector.y);
    }
    clone() {
        return new FP_Vector(this.x, this.y);
    }
    signVector() {
        const x = this.x === 0 ? 0 : this.x / Math.abs(this.x);
        const y = this.y === 0 ? 0 : this.y / Math.abs(this.y);
        return new FP_Vector(x, y);
    }
    scale(factor) {
        return new FP_Vector(this.x * factor, this.y * factor);
    }
    reverse() {
        return this.rotate(Math.PI);
    }
    mirror() {
        return this.reverse();
    }
    add(vector, factor = 1.0) {
        return new FP_Vector(this.x + vector.x * factor, this.y + vector.y * factor);
    }

    mul(vector, num = 1.0) {
        return new FP_Vector(this.x * num * vector.x, this.y * num * vector.y);
    }
    ortoAlign() {
        let dim = ["x", "y"];
        let spread = [Math.abs(this.x), Math.abs(this.y)];
        let i = spread.indexOf(Math.max(...spread));
        let ortoVector = new Vector(0, 0);
        ortoVector[dim[i]] = Math.round(this[dim[i]]);
        return ortoVector;
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    radAngleBetweenVectors(vector) {
        let angle = Math.acos(this.dot(vector));
        if (this.x * vector.y - this.y * vector.x < 0) angle = 2 * Math.PI - angle;
        return angle;
    }
    radAngleBetweenVectorsSharp(vector) {
        let angle = this.radAngleBetweenVectors(vector);
        angle = angle % Math.PI;
        if (angle > Math.PI / 2) {
            angle -= Math.PI;
        }
        return angle;
    }
}

class Vector extends MasterVectorClass {
    static W = 3;
    constructor(x = 0, y = 0) {
        super();
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
    }
    static toClass(vector) {
        return new Vector(vector.x, vector.y);
    }
    clone() {
        return new Vector(this.x, this.y);
    }
    signVector() {
        const x = this.x === 0 ? 0 : this.x / Math.abs(this.x);
        const y = this.y === 0 ? 0 : this.y / Math.abs(this.y);
        return new Vector(x, y);
    }
    isInAt(dirArray) {
        for (let q = 0; q < dirArray.length; q++) {
            if (this.x === dirArray[q].x && this.y === dirArray[q].y) {
                return q;
            }
        }
        return -1;
    }
    isInPointerArray(dirArray) {
        for (let q = 0; q < dirArray.length; q++) {
            if (this.x === dirArray[q].vector.x && this.y === dirArray[q].vector.y) {
                return q;
            }
        }
        return -1;
    }
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
    prolong(num) {
        return new Vector(this.x * num, this.y * num);
    }
    mul(vector, num = 1) {
        return new Vector(this.x + num * vector.x, this.y + num * vector.y);
    }
    distance(vector) {
        return Math.abs(this.x - vector.x) + Math.abs(this.y - vector.y);
    }
    mirror() {
        return new Vector(
            this.x ? -this.x : 0,
            this.y ? -this.y : 0
        );
    }
    direction(vector) {
        let dx = (vector.x - this.x) / Math.abs(this.x - vector.x) || 0;
        let dy = (vector.y - this.y) / Math.abs(this.y - vector.y) || 0;
        return new Vector(dx, dy);
    }
    absDirection(vector) {
        let dx = vector.x - this.x;
        let dy = vector.y - this.y;
        return new Vector(dx, dy);
    }
    directionSolutions(vector) {
        let solutions = [];
        let dir = this.direction(vector);
        let absDir = this.absDirection(vector);
        let split = dir.ortoSplit();
        solutions.push(new Direction(split[0], Math.abs(absDir.x)));
        solutions.push(new Direction(split[1], Math.abs(absDir.y)));
        //SORT!!
        if (solutions[0].len < solutions[1].len) solutions.swap(0, 1); //check
        return solutions;
    }
    ortoSplit() {
        let split = [];
        split.push(new Vector(this.x, 0));
        split.push(new Vector(0, this.y));
        return split;
    }
    cw() {
        let directions = [UP, RIGHT, DOWN, LEFT];
        let q;
        for (q = 0; q < 4; q++) {
            if (this.same(directions[q])) {
                q++;
                if (q > 3) q = 0;
                return directions[q];
            }
        }
        return null;
    }
    ccw() {
        let directions = [UP, RIGHT, DOWN, LEFT];
        let q;
        for (q = 0; q < 4; q++) {
            if (this.same(directions[q])) {
                q--;
                if (q < 0) q = 3;
                return directions[q];
            }
        }
        return null;
    }
    isOrto() {
        return this.x * this.y === 0;
    }
    isNull() {
        return this.x === 0 && this.y === 0;
    }
    isDiagonal() {
        return Math.abs(this.x) === Math.abs(this.y);
    }
    isContra(vector) {
        let X = this.x + vector.x;
        let Y = this.y + vector.y;
        return X === 0 && Y === 0;
    }
    getDirectionAxis() {
        if (this.x !== 0) {
            return "x";
        } else if (this.y !== 0) {
            return "y";
        }
        return 0;
    }
    getDirectionProperty() {
        if (this.x !== 0) {
            return "width";
        } else if (this.y !== 0) {
            return "height";
        } else throw ("error getting direction property from", this);
    }
    getPerpendicularDirs() {
        let axis = this.getDirectionAxis();
        switch (axis) {
            case "x": return [UP, DOWN];
            case "y": return [LEFT, RIGHT];
            case 0: return [NOWAY, NOWAY];
            default:
                throw ("error getting perpenicular directions from", this);
        }
    }
    trimMirror(dirArray) {
        let axis = this.getDirectionAxis();
        let LN = dirArray.length;
        for (let q = LN - 1; q >= 0; q--) {
            if (dirArray[q][axis] === this[axis]) dirArray.splice(q, 1);
        }

        return dirArray;
    }
    toRad() {
        if (this.x !== 0) {
            switch (this.x) {
                case 1:
                    return 2 * Math.PI;
                case -1:
                    return Math.PI;
            }
        } else {
            switch (this.y) {
                case -1:
                    return Math.PI / 2;
                case 1:
                    return (3 * Math.PI) / 2;
            }
        }
    }
    angleBetweenVectors(vector) {
        let Angle2 = vector.toRad();
        let Angle1 = this.toRad();
        return (Math.degrees(Angle2 - Angle1) + 360) % 360;
    }
    radAngleBetweenVectors(vector) {
        let Angle2 = vector.toRad();
        let Angle1 = this.toRad();
        return Angle2 - Angle1;
    }
    static sumVectors(arr) {
        let sum = arr.pop();
        while (arr.length) {
            sum = sum.add(arr.pop());
        }
        return sum;
    }
    toInt() {
        return (this.x + 1) + (this.y + 1) * Vector.W;
    }
    static fromInt(int) {
        let x = int % Vector.W - 1;
        let y = Math.floor(int / Vector.W) - 1;
        return new Vector(x, y);
    }
}


/** Other, legacy */
class Direction {
    constructor(vector, len, weight) {
        this.dir = new Vector(vector.x, vector.y);
        this.len = len || 1;
        this.weight = weight || 0;
    }
    isInAt(dirArray) {
        for (let q = 0; q < dirArray.length; q++) {
            if (
                this.dir.x === dirArray[q].dir.x &&
                this.dir.y === dirArray[q].dir.y
            ) {
                return q;
            }
        }
        return -1;
    }
}


class Pointer {
    constructor(grid, vector) {
        this.grid = Grid.toClass(grid);
        this.vector = Vector.toClass(vector);
    }
}

class Pointer_3DGrid {
    constructor(grid, vector) {
        this.grid = Grid3D.toClass(grid);
        this.vector = Vector.toClass(vector);   //remains 2D vector
    }
}

class Pointer_3D {
    constructor(grid, vector) {
        this.grid = Grid3D.toClass(grid);
        this.vector = Vector3D.toClass(vector);   //3D vector
    }
}

/** 3D classes */
/** Grids */
class MasterGridClass3D {
    constructor() { }
    EuclidianDistance(grid) {
        return Math.hypot(this.x - grid.x, this.y - grid.y, this.z - grid.z);
    }
    same(grid) {
        return (grid.x === this.x) && (grid.y === this.y) && (grid.z === this.z);
    }
    sub(vector, mul = 1) {
        return this.add(vector, -mul);
    }
}
class Grid3D extends MasterGridClass3D {
    constructor(x = 0, y = 0, z = 0) {
        super();
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.z = parseInt(z, 10);
    }
    static toGrid(grid) {
        return new Grid(grid.x, grid.y);
    }
    static toClass(grid) {
        return new Grid3D(grid.x, grid.y, grid.z);
    }
    static toCenter2D(grid) {
        //centering on XY plane
        return new FP_Grid3D(grid.x + 0.5, grid.y + 0.5, grid.z);
    }
    static addDepth(grid, z) {
        return new Grid3D(grid.x, grid.y, z);
    }
    add(vector, mul = 1) {
        //allows add with 2D direction
        return new Grid3D(this.x + vector.x * mul, this.y + vector.y * mul, this.z + (vector?.z || 0) * mul);
    }
    isInAt(dirArray) {
        return dirArray.findIndex(dir => dir.x === this.x && dir.y === this.y && dir.z === this.z);
    }
    direction(vector) {
        var dx = (vector.x - this.x) / Math.abs(this.x - vector.x) || 0;
        var dy = (vector.y - this.y) / Math.abs(this.y - vector.y) || 0;
        var dz = (vector.z - this.z) / Math.abs(this.z - vector.z) || 0;
        return new Vector3D(dx, dy, dz);
    }
    absDirection(vector) {
        let dx = vector.x - this.x;
        let dy = vector.y - this.y;
        let dz = vector.z - this.z;
        return new Vector3D(dx, dy, dz);
    }
    distance(vector) {
        return Math.abs(this.x - vector.x) + Math.abs(this.y - vector.y) + Math.abs(this.z - vector.z);
    }
    distanceDiagonal(vector) {
        let distance = (this.x - vector.x) ** 2 + (this.y - vector.y) ** 2 + (this.z - vector.z) ** 2;
        return Math.floor(Math.sqrt(distance));
    }
}

class FP_Grid3D extends MasterGridClass3D {
    constructor(x = 0, y = 0, z = 0) {
        super();
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
    }
    static toClass(grid) {
        return new FP_Grid3D(grid.x, grid.y, grid.z);
    }
    translate(vector, length = 1) {
        let x = this.x + vector.x * length;
        let y = this.y + vector.y * length;
        let z = this.z + vector.z * length;
        return new FP_Grid3D(x, y, z);
    }
    direction(grid) {
        let dx = grid.x - this.x;
        let dy = grid.y - this.y;
        let dz = grid.z - this.z;
        let D = this.EuclidianDistance(grid);
        return new FP_Vector3D(dx / D, dy / D, dz / D);
    }
    add(vector, factor = 1.0) {
        return new FP_Grid3D(this.x + vector.x * factor, this.y + vector.y * factor, this.z + vector.z * factor);
    }
    static to_center_block(grid3d) {
        if (grid3d.constructor.name !== "Grid3D") throw new Error(`from_Grid3D_to_center_block_swap_ZY, wrong object type ${JSON.stringify(grid3d)}, object: ${grid3d.constructor.name}`);
        return new FP_Grid3D(grid3d.x + 0.5, grid3d.y + 0.5, grid3d.z + 0.5,);
    }
    absDirection(vector) {
        let dx = vector.x - this.x;
        let dy = vector.y - this.y;
        let dz = vector.z - this.z;
        return new FP_Vector3D(dx, dy, dz);
    }
    adjuctCirclePos(r) {
        const xmr = this.x - r;
        const xpr = this.x + r;
        if (Math.floor(this.x) > Math.floor(xmr)) {
            this.x += Math.ceil(xmr) - xmr;
        } else if (this.x < Math.floor(xpr)) {
            this.x -= xpr - Math.floor(xpr);
        }

        const ymr = this.y - r;
        const ypr = this.y + r;
        if (Math.floor(this.y) > Math.floor(ymr)) {
            this.y += Math.ceil(ymr) - ymr;
        } else if (this.y < Math.floor(ypr)) {
            this.y -= ypr - Math.floor(ypr);
        }
    }
}


/** Vectors */
class MasterVectorClass3D {
    constructor() { }
    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    normalize() {
        const mag = this.magnitude();
        if (mag === 0) throw new Error("Cannot normalize a zero vector");
        return new FP_Vector3D(this.x / mag, this.y / mag, this.z / mag);
    }
    same(vec) {
        return (vec.x === this.x) && (vec.y === this.y) && (vec.z === this.z);
    }
    sub(vector, factor = 1.0) {
        return this.add(vector, -factor);
    }
}

class Vector3D extends MasterVectorClass3D {
    static W = 3;
    static W2 = 3 * 3;
    constructor(x = 0, y = 0, z = 0) {
        super();
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
        this.z = parseInt(z, 10);
    }
    static toVector2D(vector) {
        return new Vector(vector.x, vector.y);
    }
    static toClass(vector) {
        return new Vector3D(vector.x, vector.y, vector.z);
    }
    clone() {
        return new Vector3D(this.x, this.y, this.z);
    }
    signVector() {
        const x = this.x === 0 ? 0 : this.x / Math.abs(this.x);
        const y = this.y === 0 ? 0 : this.y / Math.abs(this.y);
        const z = this.z === 0 ? 0 : this.z / Math.abs(this.z);
        return new Vector3D(x, y, z);
    }
    add(vector, factor = 1.0) {
        return new Vector3D(this.x + vector.x * factor, this.y + vector.y * factor, this.z + vector.z * factor);
    }
    prolong(num) {
        return new Vector3D(this.x * num, this.y * num, this.z * num);
    }
    addScaledVector(vector, num = 1) {
        return new Vector3D(this.x + num * vector.x, this.y + num * vector.y, this.z + num * vector.z);
    }
    distance(vector) {
        return Math.abs(this.x - vector.x) + Math.abs(this.y - vector.y) + Math.abs(this.z - vector.z);
    }
    direction(vector) {
        let dx = (vector.x - this.x) / Math.abs(this.x - vector.x) || 0;
        let dy = (vector.y - this.y) / Math.abs(this.y - vector.y) || 0;
        let dz = (vector.z - this.z) / Math.abs(this.z - vector.z) || 0;
        return new Vector3D(dx, dy, dz);
    }
    toInt() {
        return (this.x + 1) + (this.y + 1) * Vector3D.W + (this.z + 1) * Vector3D.W2;
    }
    static fromInt(int) {
        let z = Math.floor(int / Vector3D.W2) - 1;
        int -= (z + 1) * Vector3D.W2;
        let x = int % Vector3D.W - 1;
        let y = Math.floor(int / Vector3D.W) - 1;
        return new Vector3D(x, y, z);
    }
    mirror() {
        return new Vector3D(
            this.x ? -this.x : 0,
            this.y ? -this.y : 0,
            this.z ? -this.z : 0
        );
    }

}

class FP_Vector3D extends MasterVectorClass3D {
    constructor(x = 0, y = 0, z = 0) {
        super();
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
    }
    static toClass(vector) {
        return new FP_Vector3D(vector.x, vector.y, vector.z);
    }
    clone() {
        return new FP_Vector3D(this.x, this.y, this.z);
    }
    signVector() {
        const x = this.x === 0 ? 0 : this.x / Math.abs(this.x);
        const y = this.y === 0 ? 0 : this.y / Math.abs(this.y);
        const z = this.z === 0 ? 0 : this.z / Math.abs(this.z);
        return new FP_Vector3D(x, y, z);
    }
    scale(factor) {
        return new FP_Vector3D(this.x * factor, this.y * factor, this.z * factor);
    }
    add(vector, factor = 1.0) {
        return new FP_Vector3D(this.x + vector.x * factor, this.y + vector.y * factor, this.z + vector.z * factor);
    }
    addScaledVector(vector, num = 1.0) {
        return new FP_Vector3D(this.x + num * vector.x, this.y + num * vector.y, this.z + num * vector.z);
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }
    mul(vector, epsilon = 0.0025) {
        let x = (this.x + epsilon) * vector.x;
        let y = (this.y + epsilon) * vector.y;
        let z = (this.z + epsilon) * vector.z;
        return new FP_Vector3D(x, y, z);
    }
    frac() {
        let x = Math.frac(this.x);
        let y = Math.frac(this.y);
        let z = Math.frac(this.z);
        return new FP_Vector3D(x, y, z);
    }
}

/** ***** */
class Angle {
    constructor(a) {
        this.angle = a;
    }
    rotate(R) {
        return new Angle((this.angle + 360 + R) % 360);
    }
    rotateCCW(R) {
        return (this.angle + 360 - R) % 360;
    }
    rotateCW(R) {
        return (this.angle + 360 + R) % 360;
    }
    bounce(face) {
        return new Angle((180 + 2 * face - this.angle) % 360);
    }
    getDirectionVector(refVector) {
        const angleInRadians = Math.radians(this.angle);
        const cosAngle = Math.cos(angleInRadians);
        const sinAngle = Math.sin(angleInRadians);
        const dirX = refVector.x * cosAngle - refVector.y * sinAngle;
        const dirY = refVector.x * sinAngle + refVector.y * cosAngle;
        const magnitude = Math.sqrt(dirX * dirX + dirY * dirY);
        const normalizedDirX = dirX / magnitude;
        const normalizedDirY = dirY / magnitude;
        return new FP_Vector(normalizedDirX, normalizedDirY);
    }
    getOrtoVector(refVector) {
        switch (this.angle) {
            case 0: return UP;
            case 90: return RIGHT;
            case 180: return DOWN;
            case 270: return LEFT;
            default: return NOWAY;
        }
    }
}

class RectArea {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    overlap(area) {
        let condX = Math.max(this.x, area.x) < Math.min(this.x + this.w, area.x + area.w);
        let condY = Math.max(this.y, area.y) < Math.min(this.y + this.h, area.y + area.h);
        return condX && condY;
    }
    gridWithin(grid) {
        return this.within(grid.x, grid.y);
    }
    within(X, Y) {
        if (
            X >= this.x &&
            X < this.x + this.w &&
            Y >= this.y &&
            Y < this.y + this.h
        ) {
            return true;
        } else return false;
    }
}

/** kept for compatibility as alias */
class Area extends RectArea {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }
}

/** Audio */
HTMLAudioElement.prototype.isPlaying = function () {
    return !this.paused && this.currentTime > 0;
};
Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
};

/** **** */

class DefaultDict {
    constructor(defaultVal) {
        return new Proxy(
            {},
            {
                get: (target, name) => (name in target ? target[name] : defaultVal),
            }
        );
    }
}

class DefaultArrayDict {
    constructor(ArrayType = Array, defaultLength = 0) {
        return new Proxy({}, {
            get: (target, name) => {
                if (!(name in target)) {
                    target[name] = new ArrayType(defaultLength);
                }
                return target[name];
            }
        });
    }
}


const float64ToInt64Binary = (function () {
    //https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
    var flt64 = new Float64Array(1);
    var uint16 = new Uint16Array(flt64.buffer);
    var MAX_SAFE = Math.pow(2, 53) - 1;
    var MAX_INT32 = Math.pow(2, 31);

    function uint16ToBinary() {
        var bin64 = "";
        for (var word = 0; word < 4; word++) {
            bin64 = uint16[word].toString(2).padStart(16, 0) + bin64;
        }
        return bin64;
    }

    return function float64ToInt64Binary(number) {
        if (Math.abs(number) > MAX_SAFE) {
            throw new RangeError("Absolute value must be less than 2**53");
        }
        if (Math.abs(number) <= MAX_INT32) {
            return (number >>> 0).toString(2).padStart(64, "0");
        }

        // little endian byte ordering
        flt64[0] = number;

        // subtract bias from exponent bits
        var exponent = ((uint16[3] & 0x7ff0) >> 4) - 1023 + 1; //+1!!
        // encode implicit leading bit of mantissa
        uint16[3] |= 0x10;
        // clear exponent and sign bit
        uint16[3] &= 0x1f;
        // only keep integer part of mantissa
        var bin64 = uint16ToBinary().substr(11, Math.max(exponent, 0));
        return bin64;
    };
})();

LIB.log();
/////////////////////////