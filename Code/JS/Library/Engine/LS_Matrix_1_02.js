/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";

///////////////////////////////////////////////
//                                           //
//           LS matrix                       //
//          uses glMatrix                    //
//           wraps glMatrix and extends      //
// it for use with other LS libs             //
//                                           //
///////////////////////////////////////////////

/**
 * https://glmatrix.net/docs/
 */

const LS_matrix = {
    VERSION: "1.2",
    CSS: "color: red",
};

class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.array = glMatrix.vec3.fromValues(x, y, z);
        this.refresh();
    }
    static from_grid3D(grid) {
        return new Vector3(grid.x, grid.z, grid.y);         //swaps y and Z
    }
    static from_array(arr) {
        return new Vector3(arr[0], arr[1], arr[2]);
    }
    static from_2D_dir(dir, y = 0) {
        return new Vector3(dir.x, y, dir.y);
    }
    static from_3D_dir(dir) {
        return new Vector3(dir.x, dir.z, dir.y);            //swaps y and Z
    }
    static from_Grid(grid, y = 0) {
        return new Vector3(grid.x, y, grid.y);
    }
    static to_FP_Grid(v) {
        return new FP_Grid(v.x, v.z);
    }
    static toGrid(v) {
        return new Grid(v.x, v.z);
    }
    static to_FP_Vector(v) {
        return new FP_Vector(v.x, v.z);
    }
    static to_Grid3D(v) {
        return new Grid3D(v.x, v.z, v.y);                   //swaps y and Z
    }
    static to_FP_Grid3D(v) {
        return new FP_Grid3D(v.x, v.z, v.y);                 //swaps y and Z
    }
    refresh() {
        this.x = this.array[0];
        this.y = this.array[1];
        this.z = this.array[2];
    }
    toArray() {
        this.array = new Float32Array([this.x, this.y, this.z]);
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    set_x(x) {
        this.x = x;
        this.toArray();
    }
    set_y(y) {
        this.y = y;
        this.toArray();
    }
    set_z(z) {
        this.z = z;
        this.toArray();
    }
    add_x(x) {
        this.x += x;
        this.toArray();
    }
    add_y(y) {
        this.y += y;
        this.toArray();
    }
    add_z(z) {
        this.z += z;
        this.toArray();
    }
    toPoint() {
        let grid = new FP_Grid(this.x, this.z);
        return grid.toPoint();
    }
    rotate2D(rad) {
        let FPV = new FP_Vector(this.x, this.z);
        return FPV.rotate(rad);
    }
    reverse2D() {
        return Vector3.from_2D_dir(this.rotate2D(Math.PI), this.y);
    }
    translate(vector, length = 1) {
        let x = this.x + length * vector.x;
        let y = this.y + length * vector.y;
        let z = this.z + length * vector.z;
        return new Vector3(x, y, z);
    }
    add(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        let z = this.z + vector.z;
        return new Vector3(x, y, z);
    }
    sub(vector) {
        let x = this.x - vector.x;
        let y = this.y - vector.y;
        let z = this.z - vector.z;
        return new Vector3(x, y, z);
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }
    scaleVec3(vec3) {
        let x = this.x * vec3[0];
        let y = this.y * vec3[1];
        let z = this.z * vec3[2];
        return new Vector3(x, y, z);
    }
    EuclidianDistance(Vector3) {
        return glMatrix.vec3.distance(this.array, Vector3.array);
    }
}

/** Global Constants */
const DIR_DOWN = Vector3.from_array(glMatrix.vec3.fromValues(0, -1, 0));
const DIR_UP = Vector3.from_array(glMatrix.vec3.fromValues(0, 1, 0));

//END
console.log(`%cLS_matrix ${LS_matrix.VERSION} loaded.`, LS_matrix.CSS);