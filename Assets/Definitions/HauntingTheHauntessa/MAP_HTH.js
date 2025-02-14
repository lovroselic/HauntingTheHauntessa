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
        name: "Demo",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"15","height":"15","map":"BB12AA110BB42AA10BB15ABB24ABB10$"}',
        wall: "RoughCave16",
        floor: "Cracked05",
        ceil: "OrnateFloor100",
        start: '[202,1]',
        }
};