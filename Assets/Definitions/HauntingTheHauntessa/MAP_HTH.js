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
        data: '{"width":"11","height":"11","depth":1,"map":"BB6AA11BAA4BB2AA5BABAA19BB7ABABB24AA3BAA2BABB6ABB4ABB15$A"}',
        wall: "OrnateFloor102",
        floor: "Grass14",
        ceil: "BloodMarbleFloorWall_SDXL_015",
        start: '[104,1]',
        lights: '[[60,1,"Candelabra01","standard"]]',
        }
};