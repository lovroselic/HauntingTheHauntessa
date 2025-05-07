/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
/*jshint esversion: 11 */
"use strict";

/*  

TODO:
      
*/

const IndexArrayManagers = {
    VERSION: "4.00",
    VERBOSE: false,
    DEAD_LAPSED_TIME: 5,
};

class IAM {
    constructor() {
        this.POOL = null;
        this.map = null;
        this.IA = null;
        this.reIndexRequired = false;
        this.reIndexSwitch = false;
        this.usingReIndex = false;
    }
    setReindex() {
        this.reIndexRequired = true;
    }
    draw() {
        for (let obj of this.POOL) {
            if (obj) obj.draw(this.map);
        }
    }
    update(lapsedTime) {
        for (let obj of this.POOL) {
            if (obj) obj.update(lapsedTime);
        }
    }
    linkMap(map) {
        this.map = map;
    }
    add(obj) {
        this.POOL.push(obj);
        obj.id = this.POOL.length;
        obj.IAM = this;
        obj.parent = this;                                  //compatibility with AI
    }
    remove(id) {
        this.POOL[id - 1] = null;
    }
    poolToIA(IA) {
        for (const obj of this.POOL) {
            if (!obj) continue;
            let grid = null;

            if (obj.moveState) {
                grid = Grid.toClass(obj.moveState.pos);
            } else if (obj.pos) {
                grid = Vector3.toGrid(obj.pos);
            } else grid = obj.grid;

            if (!IA.has(grid, obj.id)) {
                IA.next(grid, obj.id);
            }
        }
    }
    poolToIA3D(IA) {
        for (const obj of this.POOL) {
            if (!obj) continue;
            let grid = null;

            if (obj.moveState) {
                grid = Vector3.to_Grid3D(obj.moveState.pos);
            } else if (obj.pos) {
                grid = Vector3.to_Grid3D(obj.pos);
            } else grid = obj.grid;

            if (!IA.has(grid, obj.id)) {
                IA.next(grid, obj.id);
            }
        }
    }
    reIndex() {
        if (!this.reIndexRequired) return;
        if (this.POOL.length === 0) return;
        this.POOL = this.POOL.filter((el) => el !== null);
        for (const [index, obj] of this.POOL.entries()) {
            obj.id = index + 1;
        }
        if (this.reIndexSwitch) this.reIndexRequired = false;
    }
    init(map, hero) {
        this.POOL = [];
        this.linkMap(map);
        this.hero = hero || null;
    }
    isGridFree(grid) {
        return this.map[this.IA].empty(grid);
    }
    clearAll() {
        this.POOL = [];
    }
    show(id) {
        return this.POOL[id - 1];
    }
    associateIA(type, string) {
        if (!this.IA) this.IA = {};
        this.IA[type] = string;
    }
    associateExternal_IAM(type, pointer_to_entity) {
        if (!this.external) this.external = {};
        this.external[type] = pointer_to_entity;
    }
    associateHero(hero) {
        this.hero = hero;
    }
    setup(type = "2D", byte = 2, banks = 1) {
        let map = this.map;
        switch (type) {
            case "2D":
                map[this.IA] = new IndexArray(map.width, map.height, byte, banks);
                this.poolToIA(map[this.IA]);
                break;
            case "3D":
                console.warn("setup in progress", ...arguments);
                map[this.IA] = new IndexArray3D(map.width, map.height, map.depth, byte, banks);
                this.poolToIA3D(map[this.IA]);
                break;
            default:
                throw new Error(`wrong type: ${type} for Index Array`);
        }
    }
    clean() {
        for (const obj of this.POOL) {
            if (obj) obj.clean();
        }
    }
    refresh() {
        this.setReindex();
        this.manage();
    }
    find(property, value) {
        for (let obj of this.POOL) {
            if (obj?.[property] === value) return obj.id;
        }
        return null;
    }
    performOnPool(func) {
        for (let obj of this.POOL) {
            if (obj) obj[func]();
        }
    }
    static checkIfProcessesComplete(IAM_list, callback) {
        for (const iam of IAM_list) {
            if (iam.POOL.length) return;
        }
        callback();
    }
    getSize(filter_null = true) {
        if (!filter_null) return this.POOL.length || null;
        const filtered = this.POOL.filter((el) => el !== null);
        return filtered.length;
    }
    exists(id) {
        if (this.POOL[id - 1]) return true;
        return false;
    }
}

/** Profile IA Managers */
class Decor extends IAM {
    constructor() {
        super();
        this.IA = "decor_IA";
    }
    poolToIA(IA) {
        return;
    }
    manage(lapsedTime) {
        return;
    }
}

class Profile_Ballistic extends IAM {
    constructor() {
        super();
        this.IA = "ballistic_IA";
        this.reIndexRequired = true;
    }
    poolToIA(IA) {
        return;
    }
    manage(lapsedTime) {
        this.reIndex();
        for (let obj of this.POOL) {
            if (obj) {
                obj.collisionBackground(this.map);
                if (obj === null) continue;
                obj.collisionEntity(this.map);
                if (obj === null) continue;
                obj.move(lapsedTime);
            }
        }
    }
}

class Profile_Actors extends IAM {
    constructor() {
        super();
        this.IA = "profile_actor_IA";
        this.reIndexRequired = true;
    }
    poolToIA(IA) {
        for (const obj of this.POOL) {
            for (let x = Math.max(0, Math.round(obj.moveState.x - obj.actor.width / 2));
                x <= Math.min(this.map.DATA.map.length - 1, Math.round(obj.moveState.x + obj.actor.width / 2));
                x++) {
                IA.next(new Grid(x, 0), obj.id);
            }
        }
    }
    manage(lapsedTime) {
        let map = this.map;
        this.reIndex();
        map[this.IA] = new IndexArray(map.planeLimits.width, 1, 4, 4);
        this.poolToIA(map[this.IA]);
        for (let obj of this.POOL) {
            if (obj && !obj.ignoreByManager) {
                obj.collisionBackground(this.map);
                if (obj === null) continue;
                obj.collisionToActors(this.map);
                if (obj === null) continue;
                obj.move(lapsedTime);
            }
        }
    }
}

/** Pixel (PX) IA Managers */

class Pixel_Actors extends IAM {
    constructor() {
        super();
        this.IA = "pixel_actor_IA";
        this.reIndexRequired = true;
    }
    manage(lapsedTime) {
        let map = this.map;
        this.reIndex();
        map[this.IA] = new IndexArray(map.planeLimits.width, map.planeLimits.height, 4, 4);
        this.poolToIA(map[this.IA]);
        for (let obj of this.POOL) {
            if (obj && !obj.ignoreByManager) {
                obj.collisionToActors(this.map);
                if (obj === null) continue;
                obj.move(lapsedTime);
            }
        }
    }
    poolToIA(IA) {
        for (const obj of this.POOL) {
            for (const grid of obj.moveState.useGrids) {
                if (!IA.has(grid, obj.id)) {
                    IA.next(grid, obj.id);
                }
            }
        }
    }
    collisionFromExternalPool(pool) {
        /**
         * actors in external pool are defined in screen pixel coordinates
         */

        for (let i = pool.length - 1; i >= 0; i--) {
            let obj = pool[i];
            if (obj) {
                const rightLimit = (this.map.planeLimits.width * ENGINE.INI.GRIDPIX) - 1;
                const bottomLimit = (this.map.planeLimits.height * ENGINE.INI.GRIDPIX) - 1;
                const point = new Point(obj.x, obj.y).limit(rightLimit, bottomLimit);
                obj.homeGrid = GRID.pointToGrid(point);
                obj.updateActor();
                let ids = this.map[this.IA].unroll(obj.homeGrid);
                for (const id of ids) {
                    const actor = PIXEL_ACTORS.show(id);
                    if (!actor) continue;
                    let hit = ENGINE.collisionArea(actor.actor, obj.actor);
                    if (hit) {
                        actor.hit(i);
                        obj.hit(i);
                    }
                }
            }
        }
    }
    purge(property, value, arg) {
        let count = 0;
        for (const obj of this.POOL) {
            if (obj) {
                if (obj[property] === value) obj.kill(arg);
                count++;
            }
        }
        return count;
    }
}

/** Texture grid IA Managers */

class Ballistic_TG extends IAM {
    constructor(enemyIA, entity_IAM) {
        super();
        this.reIndexRequired = true;
        this.enemyIA = enemyIA;
        this.entity_IAM = entity_IAM;
    }
    poolToIA(IA) {
        return;
    }
    manage(lapsedTime) {
        for (const obj of this.POOL) {
            if (obj) {
                obj.manage(lapsedTime);
                obj.collision();
            }
        }
    }
}

class Enemy_TG extends IAM {
    constructor() {
        super();
        this.IA = "enemy_tg_IA";
        this.reIndexRequired = true;
    }
    poolToIA(IA) {
        for (const obj of this.POOL) {
            IA.next(obj.moveState.startGrid, obj.id);
            IA.next(obj.moveState.endGrid, obj.id);
        }
    }
    manage(lapsedTime, reference = null) {
        let map = this.map;
        map[this.IA] = new IndexArray(map.width, map.height, 4, 4);
        this.reIndex();
        this.poolToIA(map[this.IA]);
        if (reference) {
            GRID.calcDistancesBFS_A(reference.moveState.pos, map);
        }
        for (const enemy of this.POOL) {
            if (enemy === null) continue;
            enemy.manage(lapsedTime, map[this.IA], map, reference);
        }
    }
}

class Vanishing extends IAM {
    constructor() {
        super();
        this.IA = "vanishing_IA";
        this.reIndexRequired = true;
    }
    poolToIA(IA) {
        for (const obj of this.POOL) {
            IA.next(obj.grid, obj.id);
        }
    }
    manage(lapsedTime) {
        let map = this.map;
        map[this.IA] = new IndexArray(map.width, map.height, 1, 1);
        this.reIndex();
        this.poolToIA(map[this.IA]);
        this.size = this.POOL.length;
        this.update(lapsedTime);
    }
}

class Floor_Object extends IAM {
    /*
    can work with objects that has moveState or just grid
    */
    constructor(byte = 1, banks = 1) {
        super();
        this.IA = `floor_object_IA_${byte}_${banks}`;
        this.reIndexRequired = false;
        this.byte = byte;
        this.banks = banks;
    }
    reIndex() {
        if (!this.reIndexRequired) return;
        this.POOL = this.POOL.filter((el) => el !== null);
        for (const [index, obj] of this.POOL.entries()) {
            obj.id = index + 1;
        }
        this.reIndexRequired = false;
    }
    init(map) {
        this.POOL = [];
        this.linkMap(map);
        this.manage();
    }
    manage() {
        let map = this.map;
        map[this.IA] = new IndexArray(map.width, map.height, this.byte, this.banks);
        this.reIndex();
        this.poolToIA(map[this.IA]);
        this.size = this.POOL.length;
    }
}

class Spawner extends Floor_Object {
    constructor(byte = 1, banks = 1) {
        super();
        this.IA = `spawner`;
        this.timerID = "SpawnerTimer";
        this.timer = null;
    }

    /**
     * IA is static and never changes!
     */
    setIA() {
        let map = this.map;
        //map[this.IA] = new IndexArray(map.width, map.height, this.byte, this.banks);
        map[this.IA] = new IndexArray3D(map.width, map.height, map.depth, this.byte, this.banks);
        this.poolToIA3D();
        this.poolToIA(map[this.IA]);
        this.size = this.POOL.length;
    }

    /**
     * 
     * @param {*} timeout delay between spawns
     * @param {*} assertionFunc asserts the spawning is possible
     * @param {*} spawnFunc actual spawning function
     * @param {*} reference to HERO, defaulrs to null
     */
    configure(timeout, assertionFunc, spawnFunc, reference = null) {
        this.timeout = timeout;
        this.assertionFunc = assertionFunc;
        this.spawnFunc = spawnFunc;
        this.reference = reference;
    }
    set_timeout(timeout) {
        this.timeout = timeout;
    }
    start() {
        this.cooldown();
    }
    cooldown() {
        this.timer = new CountDownMS(this.timerID, this.timeout, this.spawn.bind(this));
    }
    spawn() {
        if (this.assertionFunc()) {
            const nest = this.selectNest();
            if (nest) this.spawnFunc(nest);

        }
        this.cooldown();
    }
    selectNest() {
        /**
         * sort by path distance, 
         * visibility not asserted - that is a problem!
         * returns id of nest or null
         */
        let selected = null;
        let distance = Infinity;
        const refGrid = this.reference.moveState.homeGrid;
        GRID.calcDistancesBFS_A(refGrid, this.map)

        for (let nest of this.POOL) {
            if (nest.outOfSight()) continue;
            let nestDistance = this.map.GA.nodeMap[nest.grid.x][nest.grid.y];
            nest.distance = nestDistance.distance;
            if (nest.distance < distance) {
                distance = nest.distance;
                selected = nest.id;
            }
        }
        return selected;
    }
    stop() {
        this.timer.unregister();
    }
}

class Bump2D extends Floor_Object {
    constructor(byte = 1, banks = 1) {
        super();
        this.IA = `bump_2D`;
    }
    manage() {
        if (!this.reIndexRequired) return;
        let map = this.map;
        map[this.IA] = new IndexArray(map.width, map.height, this.byte, this.banks);
        this.reIndex();
        this.poolToIA(map[this.IA]);
        this.size = this.POOL.length;
    }
}

class Destruction_Animation extends IAM {
    constructor() {
        super();
        this.IA = "destranimIA";
        this.reIndexRequired = true;
    }
    manage(lapsedTime, map = this.map) {
        this.reIndex();
        if (map?.width && map?.height) {
            map[this.IA] = new IndexArray(map.width, map.height, 4, 4);
            this.poolToIA(map[this.IA]);
        }
        for (const anim of this.POOL) {
            if (!anim) continue;
            if (anim.movable) anim.move();
            anim.actor.updateAnimation(lapsedTime);
            if (anim.actor.animationThrough) {
                this.remove(anim.id);
            }
            if (!anim) continue;

        }
    }
}

class Changing_Animation extends IAM {
    constructor() {
        super();
        this.IA = "changeanimIA";
    }
    manage(lapsedTime, map) {
        map = map || this.map;
        map[this.IA] = new IndexArray(map.width, map.height, 4, 4);
        this.reIndex();
        this.poolToIA(map[this.IA]);
        for (const anim of this.POOL) {
            anim.change(lapsedTime);
            if (anim.complete()) {
                CHANGING_ANIMATION.remove(anim.id);
                this.setReindex();
            }
        }
    }
}

/**  Raycast IA Managers */
class Missile_RC extends IAM {
    constructor() {
        super();
        this.IA = "missileIA";
    }
    manage(lapsedTime, map) {
        map[this.IA] = new IndexArray(map.width, map.height, 4, 4);
        this.reIndex();
        this.poolToIA(map[this.IA]);
        for (const missile of this.POOL) {
            GRID.contTranslatePosition(missile, lapsedTime);
            let wallHit = !this.map.GA.entityNotInWall(missile.moveState.pos, missile.moveState.dir, missile.r, 8);
            if (wallHit) {
                let position = missile.moveState.pos.translate(missile.moveState.dir.reverse(), RAYCAST.INI.EXPLOSION_OFFWALL);
                let explosion = new Destruction(position, missile.base, DESTRUCTION_TYPE.SmallShortExplosion);
                DESTRUCTION_ANIMATION.add(explosion);
                MISSILE.remove(missile.id);
                AUDIO.Explosion.volume = RAYCAST.volume(missile.distance);
                AUDIO.Explosion.play();
                continue;
            }

            //check entity collision
            let IA = RAYCAST.MAP[ENEMY_RC.IA];
            let grid = Grid.toClass(missile.moveState.pos);
            if (!IA.empty(grid)) {
                let possibleEnemies = IA.unroll(grid);
                for (let P of possibleEnemies) {
                    let monster = ENEMY_RC.POOL[P - 1];
                    if (monster === null) continue;
                    if (monster.id === missile.casterId) continue;
                    let monsterHit = GRID.circleCollision(monster, missile);
                    if (monsterHit) {
                        monster.hitByMissile(missile);
                        continue;
                    }
                }
            }

            //check player collision
            if (missile.casterId !== 0) {
                let playerHit = PLAYER.circleCollision(missile);
                if (playerHit) {
                    PLAYER.hitByMissile(missile);
                }
            }
        }
    }
}

class Decal_IA extends IAM {
    constructor() {
        super();
        this.IA = "decalIA";
    }
    init(map) {
        this.linkMap(map);
        this.manage();
    }
    manage() {
        let map = this.map;
        map[this.IA] = new IndexArray(map.width, map.height, 4, 4); // = IA
        this.poolToIA(map[this.IA]);
    }
    update(map) {
        this.manage(map);
    }
    poolToIA(IA) {
        for (const decal of this.POOL) {
            if (decal === null) continue;
            IA.next(decal.floorGrid, decal.id);
            IA.next(decal.grid, decal.id);
        }
    }
    calcPosition(position) {
        let offset = new FP_Grid();
        switch (position[0]) {
            case "center":
                offset.y = 0.5;
                break;
            case "top":
                offset.y = 0.3333;
                break;
            case "bottom":
                offset.y = 0.6667;
                break;
            default:
                offset.y = 0.5;
                break;
        }
        switch (position[1]) {
            case "center":
                offset.x = 0.5;
                break;
            case "left":
                offset.x = 0.3333;
                break;
            case "right":
                offset.x = 0.6667;
                break;
            default:
                offset.x = 0.5;
                break;
        }
        return offset;
    }
    playerBehindPlane(instance) {
        let playerGrid = Grid.toClass(PLAYER.pos);
        let delta = instance.grid.direction(playerGrid);
        for (let dim of ["x", "y"]) {
            if (instance.facingDir[dim] === 0) {
                continue;
            }
            if (instance.facingDir[dim] === delta[dim]) {
                return false;
            } else return true;
        }
    }
    drawPosition(instance) {
        let drawPosition = new FP_Grid();
        let leftPosition = new FP_Grid();
        let rightPosition = new FP_Grid();
        let widthFactor = instance.width / RAYCAST.INI.BLOCK_SIZE;
        let dims = ["x", "y"];
        for (const [i, comp] of dims.entries()) {
            if (instance.facingDir[comp] === 0) {
                drawPosition[comp] = instance.grid[comp] + 0.5;
                let otherIndex = (i + 1) % 2;
                let factor = instance.facingDir[dims[otherIndex]];
                if (dims[otherIndex] === "x") {
                    factor *= -1;
                }
                leftPosition[comp] = drawPosition[comp] - (factor * widthFactor) / 2;
                rightPosition[comp] = drawPosition[comp] + (factor * widthFactor) / 2;
            }
            if (instance.facingDir[comp] === 1) {
                drawPosition[comp] = instance.grid[comp] + 1.0;
                leftPosition[comp] = drawPosition[comp];
                rightPosition[comp] = drawPosition[comp];
            } else if (instance.facingDir[comp] === -1) {
                drawPosition[comp] = instance.grid[comp];
                leftPosition[comp] = drawPosition[comp];
                rightPosition[comp] = drawPosition[comp];
            }
        }
        return [drawPosition, leftPosition, rightPosition];
    }
}

class Enemy_RC extends IAM {
    constructor() {
        super();
        this.IA = "enemyIA";
    }
    poolToIA(IA) {
        for (const enemy of this.POOL) {
            if (enemy === null) continue;
            for (const dir of ENGINE.corners) {
                let x = enemy.moveState.pos.x + dir.x * (enemy.actor.orientationW / 2 / ENGINE.INI.GRIDPIX);
                let y = enemy.moveState.pos.y + dir.y * (enemy.actor.orientationH / 2 / ENGINE.INI.GRIDPIX);
                let pos = new Grid(x, y);
                if (!IA.has(pos, enemy.id)) {
                    IA.next(pos, enemy.id);
                }
            }
        }
    }
    manage(lapsedTime, map, flagArray) {
        map[this.IA] = new IndexArray(map.width, map.height, 4, 4);
        this.poolToIA(map[this.IA]);
        GRID.calcDistancesBFS_A(Grid.toClass(PLAYER.pos), map);
        for (const enemy of this.POOL) {
            if (enemy === null) continue;
            //check distance
            enemy.setDistanceFromNodeMap(map.GA.nodeMap);
            if (enemy.distance === null) continue;
            if (enemy.petrified) continue;
            //enemy/enemy collision resolution
            if (enemy.base === 1 && !enemy.moveState.dir.isNull()) {
                let ThisGrid = Grid.toClass(enemy.moveState.pos);
                let EndGrid = Grid.toClass(enemy.moveState.endPos);
                let Indices = map[this.IA].unroll(ThisGrid);

                if (!GRID.same(ThisGrid, EndGrid)) {
                    let add = map[this.IA].unroll(EndGrid);
                    Indices.splice(0, -1, ...add);
                }

                let setIndices = new Set(Indices);
                setIndices.delete(enemy.id);

                let FilteredIndices = [];
                if (setIndices.size > 0) {
                    for (let id of setIndices) {
                        if (this.POOL[id - 1].base < 1) {
                            setIndices.delete(id);
                        }
                    }
                    FilteredIndices = Array.from(setIndices).filter(
                        (val) => val < enemy.id
                    );
                }

                let wait = false;
                if (FilteredIndices.length > 0) {
                    for (let e of FilteredIndices) {
                        let EE_hit = GRID.circleCollision(enemy, this.POOL[e - 1]);
                        if (EE_hit) {
                            wait = true;
                            break;
                        }
                    }
                    if (wait) continue;
                }
            }
            //enemy/player collision
            let EP_hit = PLAYER.circleCollision(enemy);
            if (EP_hit) {
                if (enemy.canAttack) {
                    enemy.performAttack();
                }
                continue;
            }
            if (enemy.canShoot) enemy.shoot();
            if (enemy.moveState.moving) {
                GRID.translatePosition(enemy, lapsedTime);
                continue;
            }

            let passiveFlag = flagArray.includes(true);
            enemy.behaviour.manage(enemy, enemy.distance, passiveFlag);
            if (!enemy.hasStack()) {
                //next move(s) based on strategy
                let ARG = {
                    playerPosition: Grid.toClass(PLAYER.pos),
                    currentPlayerDir: PLAYER.dir.ortoAlign()
                };
                enemy.dirStack = AI[enemy.behaviour.strategy](enemy, ARG);
            }
            enemy.makeMove();
        }
    }
    analyze() {
        let monsterDict = new DefaultDict(0);
        for (const enemy of this.POOL) {
            monsterDict[enemy.class]++;
        }

        console.group("ENEMY analysis");
        for (const item in monsterDict) {
            console.log(item, monsterDict[item], Number(monsterDict[item] / this.POOL.length * 100).toFixed(2), "%");
        }
        console.groupEnd("ENEMY analysis");
    }
}

/** 3D */
class Decal_IA_3D extends IAM {
    constructor() {
        super();
        this.IA = "decalIA3D";
    }
    poolToIA(IA) {
        for (const decal of this.POOL) {
            if (decal === null) continue;
            IA.next(decal.grid, decal.id);
        }
    }
    manage() {
        let map = this.map;
        map[this.IA] = new IndexArray(map.width, map.height, 2, 1);                             //1 bank, 16bit
        this.poolToIA(map[this.IA]);
    }
    update() {
        this.manage();
    }
}

class Decal3D extends IAM {
    constructor(len = null, IA = null, ri = false) {
        super();
        this.IA = IA;
        this.reIndexRequired = ri;
        this.id_offset = null;
        this.len = len;
        if (this.len) {
            this.id_offset = GLOBAL_ID_MANAGER.offset.last();
            GLOBAL_ID_MANAGER.offset.push(this.id_offset + this.len);
            GLOBAL_ID_MANAGER.IAM.push(this);
        }
    }
    add(obj) {
        this.POOL.push(obj);
        obj.id = this.POOL.length;
        obj.IAM = this;
        obj.parent = this;
        obj.global_id = this.globalId(obj.id);
    }
    globalId(id) {
        if (this.id_offset != null) {
            return id + this.id_offset;
        }
        return null;
    }
    manage(lapsedTime, date) {
        this.reIndex();
        for (const item of this.POOL) {
            if (item) {
                item.manage(lapsedTime, date);
            }
        }
    }
    display() {
        console.log("------------------------------------------");
        console.log("Overview:", this.constructor.name);
        console.table(this.POOL, ['name', 'id', 'global_id', 'grid']);
        console.log("------------------------------------------");
    }
    drawVector2D() {
        for (let obj of this.POOL) {
            if (obj) obj.drawVector2D(this.map);
        }
    }
}

class Missile3D extends IAM {
    constructor(enemyIA, entity_IAM) {
        super();
        this.IA = "missileIA";
        this.enemyIA = enemyIA;
        this.entity_IAM = entity_IAM;
        this.reIndexRequired = true;
    }
    draw() {
        for (let obj of this.POOL) {
            if (obj) obj.draw(this.map);
        }
    }
    manage(lapsedTime) {
        this.reIndex();
        this.map[this.IA] = new IndexArray3D(this.map.width, this.map.height, this.map.depth, 4, 4);
        this.poolToIA3D(this.map[this.IA]);
        const GA = this.map.GA;

        for (let obj of this.POOL) {
            if (obj) {
                obj.move(lapsedTime, GA);

                const pos = Vector3.to_FP_Grid(obj.pos);                                                                    //check wall hit
                let [wallHit, point] = obj.bounce3D ? GA.sphereInWallPoint(obj.pos, obj.dir, obj.r) : GA.entityInWallPoint(pos, Vector3.to_FP_Vector(obj.dir), obj.r, obj.depth);    //point is returned in different formats!! Vector3 or FP_Grid respectively
                //console.log(obj.id, "wallHit", wallHit, point);

                if (wallHit) {
                    obj.hitWall(this, point, GA);
                    continue;
                }

                if (this.missile_entity_collision(obj, GA)) continue;                                                       //check entity collision

                const playerHit = GRID.circleCollision3D(this.hero.player.pos, obj.pos, this.hero.player.r + obj.r);        //check player collision
                if (playerHit) {
                    this.hero.hitByMissile(obj);
                    continue;
                }

                this.missile_missile_collision(obj, GA);                                                                    //check missile to missile collision
            }
        }
    }
    missile_missile_collision(obj, GA) {
        const mIA = this.map[this.IA];
        const grid = Vector3.to_Grid3D(obj.pos);
        //console.warn("obj.pos", obj.pos);
        const possibleMissiles = mIA.unroll(grid);
        possibleMissiles.remove(obj.id);
        if (possibleMissiles.length > 0) {
            for (const id of possibleMissiles) {
                const missile = this.show(id);
                if (!missile) continue;
                if (obj.friendly === missile.friendly) continue;

                const hit = GRID.circleCollision3D(missile.pos, obj.pos, missile.r + obj.r);
                if (hit) {
                    for (const M of [obj, missile]) {
                        if (M.friendly) M.drop(GA);
                        M.explode(this);
                    }
                }
            }
        }
    }
    missile_entity_collision(obj, GA) {
        if (!obj.friendly) return false;
        const IA = this.map[this.enemyIA];
        if (!IA) return false;                                                                                              //there are no enemies
        const grid = Vector3.to_Grid3D(obj.pos);

        if (!IA.empty(grid)) {
            const possibleEnemies = IA.unroll(grid);
            //console.warn("possibleEnemies", possibleEnemies, "grid", grid);
            for (let P of possibleEnemies) {
                const monster = this.entity_IAM.POOL[P - 1];
                if (monster === null) return true;
                const monsterHit = GRID.circleCollision3D(monster.moveState.referencePos, obj.pos, monster.r + obj.r);
                //console.error("missile_entity_collision", monster.name, monster.id, "y", monster.moveState.referencePos.y, "obj", obj.pos.y, "monster.h", monster.heigth, "monster.fly", monster.fly, "monster.midHeight", monster.midHeight, "monster.r", monster.r);
                //console.error("....missile_entity_collision", monster.moveState.referencePos, "obj", obj.pos);
                if (monsterHit) {
                    monster.hitByMissile(obj, GA);
                    return true;
                }
            }
        }
        return false;
    }
}

class ParticleEmmission3D extends IAM {
    constructor() {
        super();
        this.IA = null;
        this.POOL = [];
        this.reIndexRequired = true;
    }
    manage(date) {
        this.reIndex();
        for (const item of this.POOL) {
            if (item) {
                item.update(date);
                if (item.normalized_age > 1) {
                    if (item.callback) item.callback()
                    this.remove(item.id);
                }
            }
        }
    }
}

class Animated_3d_entity extends IAM {
    constructor(usingReIndex = false) {
        super();
        this.POOL = [];
        this.IA = "enemyIA";
        this.usingReIndex = usingReIndex;
        if (this.usingReIndex) this.reIndexSwitch = true;
    }
    useReindex() {
        this.usingReIndex = true;
        this.reIndexSwitch = true;
    }
    resetTime() {
        for (const enemy of this.POOL) {
            if (enemy === null) continue;
            enemy.resetTime();
        }
    }
    poolToIA3D(IA) {
        for (const enemy of this.POOL) {
            if (enemy === null) continue;

            const BB = enemy.moveState.boundingBox;
            const grids = [];
            const xVals = [BB.min.x, BB.max.x];
            const zVals = [BB.min.z, BB.max.z];
            const yVals = [-(enemy.heigth - 0.001)];                    //just check the feet adjusted by small E

            for (const x of xVals) {
                for (const z of zVals) {
                    for (const y of yVals) {
                        grids.push(Grid3D.toClass(enemy.moveState.grid.add(new FP_Vector3D(x, z, y))));
                    }
                }
            }

            const uniqueGrids = Array.from(new Map(grids.map(grid => [`${grid.x},${grid.y},${grid.z}`, grid])).values());

            for (let grid of uniqueGrids) {
                IA.next(grid, enemy.id);
            }
        }
    }
    drawVector2D() {
        for (let obj of this.POOL) {
            if (obj) obj.drawVector2D(this.map);
        }
    }
    setup() {
        const map = this.map;
        map[this.IA] = new IndexArray3D(map.width, map.height, map.depth, 4, 4);    //3D
        this.poolToIA3D(map[this.IA]);
    }
    manage(lapsedTime, date, flagArray) {
        const map = this.map;
        map[this.IA] = null;
        if (this.POOL.length === 0) return;
        this.reIndex();
        const GA = this.map.GA;
        this.setup();

        const heroRefGrid = Vector3.to_Grid3D(this.hero.player.pos);
        GRID.calcDistancesBFS_A_3D(heroRefGrid, map, false, GROUND_MOVE_GRID_EXCLUSION);            //ground exlusion 3d on xy plane, this needs to be separate because of hunting on exact position!
        GRID.calcDistancesBFS_A_3D(heroRefGrid, map, true, AIR_MOVE_GRID_EXCLUSION, "airNodeMap");  //air exclusion fully 3d

        for (const entity of this.POOL) {
            if (entity) {
                entity.reset();

                //set distance
                entity.setDistanceFromNodeMap(map.GA.nodeMap);
                entity.setDistanceFromNodeMap(map.GA.airNodeMap, "airDistance");
                if (entity.petrified) continue;

                //enemy/enemy collision resolution
                if (this.enemy_enemy_collision_resolution(entity, map, date)) continue;

                //enemy/player collision
                if (!this.hero.dead || this.hero.player.isJumping) {
                    const EP_hit = this.hero.player.circleCollision(entity);
                    if (EP_hit) {
                        if (entity.canAttack) {
                            entity.performAttack(this.hero);
                            if (IndexArrayManagers.VERBOSE) console.info(`${entity.name}-${entity.id} attacking`);
                        }
                        entity.setView(this.hero.player.pos);
                        entity.update(date);
                        continue;
                    }
                }

                //enemy shoot
                if (!this.hero.dead) {
                    if (entity.canShoot) {
                        entity.setView(this.hero.player.pos);
                        entity.shoot(GA);
                        //if (IndexArrayManagers.VERBOSE) console.info(`${entity.name}-${entity.id} shooting`);
                        if (true) console.info(`${entity.name}-${entity.id} shooting`);
                    }
                }

                //enemy translate position
                if (entity.moveState.moving) {
                    if (this.hero.dead) lapsedTime = IndexArrayManagers.DEAD_LAPSED_TIME;
                    GRID.translatePosition3D(entity, lapsedTime);
                    entity.update(date);
                    entity.proximityDistance = null;
                    continue;
                }

                //set behaviour and move
                let passiveFlag = flagArray.includes(true);
                let distance = entity.distance;
                if (entity.caster) {
                    distance = entity.airDistance;
                }

                entity.behaviour.manage(entity, distance, passiveFlag);
                if (!entity.hasStack()) {

                    let ARG = {
                        playerPosition: Vector3.to_FP_Grid3D(this.hero.player.pos),
                        currentPlayerDir: Vector3.to_FP_Vector(this.hero.player.dir).ortoAlign(),
                        exactPlayerPosition: this.hero.player.pos,
                        exactPlayerDir: this.hero.player.dir,
                        block: []
                    };

                    entity.dirStack = AI[entity.behaviour.strategy](entity, ARG);
                    if (IndexArrayManagers.VERBOSE) console.info(`${entity.name} ${entity.id} dirStack`, entity.dirStack, "dir", entity.moveState.dir, "strategy", entity.behaviour.strategy);
                }
                entity.makeMove();
            }
        }
    }
    enemy_enemy_collision_resolution(entity, map, date) {
        const ThisGrid = Vector3.to_Grid3D(entity.moveState.pos);
        const EndGrid = Grid3D.toClass(entity.moveState.endPos);
        const Indices = map[this.IA].unroll(ThisGrid);
        if (!GRID.same(ThisGrid, EndGrid)) {
            let add = map[this.IA].unroll(EndGrid);
            Indices.splice(0, -1, ...add);
        }
        let setIndices = new Set(Indices);
        setIndices.delete(entity.id);
        const FilteredIndices = Array.from(setIndices);
        let wait = false;
        if (FilteredIndices.length > 0) {
            if (!entity.proximityDistance) {
                entity.proximityDistance = this.hero.player.pos.EuclidianDistance(entity.moveState.pos);
            }
            for (let e of FilteredIndices) {
                const compareEntity = this.POOL[e - 1];
                if (compareEntity.petrified) continue;
                if (!compareEntity.proximityDistance) compareEntity.proximityDistance = this.hero.player.pos.EuclidianDistance(compareEntity.moveState.pos);

                const EE_hit = GRID.circleCollision3D(entity.moveState.pos, compareEntity.moveState.pos, entity.r + compareEntity.r);

                if (EE_hit && compareEntity.proximityDistance < entity.proximityDistance) {
                    wait = true;
                    entity.update(date);
                    //if (IndexArrayManagers.VERBOSE) console.info(`${entity.name}-${entity.id} waiting to continue turn`);
                    break;
                }
            }

            if (wait) return true;
        }
        return false;
    }
    display() {
        console.log("------------------------------------------");
        console.log(this.constructor.name, "Overview:");
        console.table(this.POOL, ['name', 'id', 'grid', 'distance', 'moveState', 'actor', 'r', 'behaviour']);
        console.log("------------------------------------------");
    }
    analyze() {
        let monsterDict = new DefaultDict(0);
        let XP = 0;
        let gold = 0;
        let ADM = 0;
        let health = 0;
        for (const enemy of this.POOL) {
            if (enemy) {
                monsterDict[enemy.name]++;
                XP += enemy.xp;
                gold += enemy.gold || 0;
                ADM += enemy.attack + enemy.defense + enemy.magic;
                health += enemy.health;
            }
        }

        console.group("ENEMY analysis");
        for (const item in monsterDict) {
            console.log(item, monsterDict[item], Number(monsterDict[item] / this.POOL.length * 100).toFixed(2), "%");
        }
        console.log("------------------------------------------");
        console.log("TOTAL XP:", XP);
        console.log("TOTAL Gold:", gold);
        console.log("TOTAL ADM:", ADM);
        console.log("TOTAL Health:", health);
        console.groupEnd("ENEMY analysis");
    }
}

class Lair3D extends Spawner {
    constructor() {
        super();
    }
    selectNest() {
        return this.POOL.chooseRandom();
    }

}

class ItemDropper3D extends IAM {
    constructor() {
        super();
        this.IA = null;
        this.POOL = [];
        this.reIndexRequired = true;
    }
    manage(lapsedTime) {
        this.reIndex();
        for (const item of this.POOL) {
            if (item) {
                item.move(lapsedTime);
            }
        }
    }
}

/** GLOBAL ID */

const GLOBAL_ID_MANAGER = {
    offset: [0],
    IAM: [],
    getObject(globalId) {
        if (this.offset.length < 2) return null;
        let idx = 1;
        while (idx < this.offset.length && globalId >= this.offset[idx]) {
            idx++;
        }
        idx--;
        let id = globalId - this.offset[idx];
        return this.IAM[idx].POOL[id - 1];
    }
};

class Store {
    constructor(list) {
        this.list = list;
    }
    storeIAM(map) {
        map.store = {};
        for (const IAM of this.list) {
            map.store[IAM] = {};
            map.store[IAM].POOL = eval(IAM).POOL;
        }
    }
    clearPools() {
        for (const IAM of this.list) {
            eval(IAM).clearAll();
        }
    }
    displayGlobals() {
        for (const IAM of this.list) {
            console.log(IAM, eval(IAM));
        }
    }
    linkMap(map) {
        for (const IAM of this.list) {
            eval(IAM).linkMap(map);
        }
    }
    loadIAM(map) {
        for (const IAM of this.list) {
            eval(IAM).POOL = map.store[IAM].POOL;
        }
    }
}

/**  IAM INSTANCES: SUPER GLOBALS */
const DECOR = new Decor();
const PROFILE_BALLISTIC = new Profile_Ballistic();
const PROFILE_ACTORS = new Profile_Actors();
const PIXEL_ACTORS = new Pixel_Actors();
const ENEMY_TG = new Enemy_TG();
const BALLISTIC_TG = new Ballistic_TG("enemy_tg_IA", ENEMY_TG);
const ENEMY_RC = new Enemy_RC();
const VANISHING = new Vanishing();
const FLOOR_OBJECT = new Floor_Object();
const FLOOR_OBJECT_WIDE = new Floor_Object(4, 4);
const DESTRUCTION_ANIMATION = new Destruction_Animation();
const CHANGING_ANIMATION = new Changing_Animation();
const BUMP2D = new Bump2D();
const NEST = new Spawner();
const MISSILE = new Missile_RC();
const DECAL = new Decal_IA();
const DECAL3D = new Decal3D();
const LIGHTS3D = new Decal3D();
const VANISHING3D = new Decal3D(null, null, true);
const INTERFACE3D = new Decal3D();
const GATE3D = new Decal3D(256);
const ITEM3D = new Decal3D(1024);
const EXPLOSION3D = new ParticleEmmission3D();
const INTERACTIVE_DECAL3D = new Decal3D(1024);
const INTERACTIVE_BUMP3D = new Decal3D(256, "interactive_bump3d");
//const BUMP3D = new Decal_IA_3D();                                           //obsolete, waiting for deprecation; use INTERACTIVE_BUMP3D
const ENTITY3D = new Animated_3d_entity();
const MISSILE3D = new Missile3D("enemyIA", ENTITY3D);
const DYNAMIC_ITEM3D = new Decal3D(256, "dynamic_item3d");
const LAIR = new Lair3D();
const ITEM_DROPPER3D = new ItemDropper3D();
/** *********************************************** */
console.log(`%cIndexArrayManagers (IAM) ${IndexArrayManagers.VERSION} ready.`, "color: #7FFFD4");