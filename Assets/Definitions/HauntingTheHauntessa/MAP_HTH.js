/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

"use strict";
console.log("%cMAP for HTH loaded.", "color: #888");
/**
 * entry texts
 */

const MAP_TEXT = {
    1: "This is my bedroom.",

};

/** Map definitions */
const MAP = {
    1 : {
        name: "Generic room name",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"11","height":"11","depth":1,"map":"BB2ABB2QAA3ÁAA7BAA2BB2AA6BB3AA21BB7ABB2ABB2ABB13ABB3ABB2ABB2ABABAA2BB4ABB18$AA3"}',
        wall: "OrnateFloor102",
        floor: "Grass14",
        ceil: "BloodMarbleFloorWall_SDXL_015",
        start: '[104,1]',
        lights: '[[60,1,"Candelabra01","standard"]]',
        }
};