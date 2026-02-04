<!-- copy -->
    <div id="preload" class="hidden"></div>

    <div class="container my-5 p-5 cool_page">
        <div id="setup">
            <div id="load"></div>
            <div class="row win">
                <h1 id="title" class="arcade"></h1>
                <p class="c64">Editor used for R.U.N., CrawlMaster II, The Curse of the Castle Creep, Castle Haunt II,
                    Haunting The Hauntessa
                    and maybe some
                    other games.</p>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="setup_container section" id="selector">
                        <fieldset>
                            <legend>
                                Size & Info:
                            </legend>
                            <div id="dimensions">
                                <input type="radio" name="dimensions" value="2D"> 2D
                                <input type="radio" name="dimensions" value="3D" checked="checked"> 3D <br />
                            </div>
                            <br />
                            Grid dimensions:
                            <input name="gridsize" id="horizontalGrid" type="text" size="2" maxlength="2" value="16">
                            <span> X </span>
                            <input name="gridsize" id="verticalGrid" type="text" size="2" maxlength="2" value="16">
                            <span id="depthGridVisibility">
                                <span> X </span>
                                <input name="gridsize" id="depthGrid" type="text" size="2" maxlength="2" value="3">
                            </span>
                            <br />
                            Grid size (px):
                            <input name="gridsize" id="gridsize" type="text" size="2" maxlength="2" value="64">
                            <br />
                            RoomID:
                            <input name="roomid" id="roomid" type="text" size="16" maxlength="16" value="1">
                            <br />
                            Room name:
                            <input name="roomname" id="roomname" type="text" size="32" maxlength="64"
                                value="Generic room name">
                            <br />
                            Arena border width:
                            <input name="arenawidth" id="arenawidth" type="number" min="1" max="7" value="2">
                            <br />
                            Arena value:
                            <select id="arena_value"></select>
                            <br /> WIDTH (px) = <span id="ENGINEgameWIDTH"></span> / <span id="spacex"></span>
                            <br />
                            HEIGHT (px) =
                            <span id="ENGINEgameHEIGHT"></span> / <span id="spacey"></span><br />

                            <label for="checkpoint">SaveGame
                                checkpoint</label>

                            <select name="checkpoint" id="checkpoint">
                                <option value="0">Neutral</option>
                                <option value="1">Block</option>
                                <option value="2">Restore</option>
                            </select>

                        </fieldset>
                        <fieldset>
                            <legend>
                                Renderer:
                            </legend>
                            <input type="radio" name="renderer" value="line"> Line <br />
                            <input type="radio" name="renderer" value="block3D" checked="checked"> Block3D <br />
                            <input type="radio" name="renderer" value="block"> Block (decal, item
                            support)<br />
                            <input type="radio" name="renderer" value="texture"> Texture <br />
                            <input type="radio" name="renderer" value="tile"> Tile <br />
                            <input type="checkbox" id="corr" value="corr" name="corr"> Draw corridor gridline<br />
                            <input type="checkbox" id="grid" value="grid" name="grid" checked="checked"> Main grid<br />
                            <input type="checkbox" id="coord" value="coord" name="coord" checked="checked">
                            Coordinates
                            <input type="checkbox" id="all_coord" value="all_coord" name="all_coord">All
                            <br />
                        </fieldset>
                        <fieldset>
                            <legend>
                                Material
                            </legend>
                            <div class="d-flex justify-content-center">
                                <select id="materialtype"> </select>
                            </div>
                            <div id="material-details"></div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Light type
                            </legend>
                            <div class="d-flex justify-content-center">
                                <select id="lighttype"> </select>
                            </div>
                            <div id="light-details"></div>
                            <div id="light-code"></div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Connections
                            </legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="button" id="swap" value="Swap" />
                            </div>

                            Source GateID: <input name="sgateID" id="sgateID" type="text" size="16" maxlength="16"
                                value="1.1"><br />
                            Target GateID: <input name="tgateID" id="tgateID" type="text" size="16" maxlength="16"
                                value="2.1"><br />
                            <div class="d-flex justify-content-center">
                                <select id="gatetype"> </select>
                            </div>
                            <div>
                                <canvas id="gatecanvas" width="256" height="256"></canvas>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Directions
                            </legend>
                            <input type="radio" name="directions" value="UP"> UP <br />
                            <input type="radio" name="directions" value="DOWN"> DOWN <br />
                            <input type="radio" name="directions" value="LEFT"> LEFT <br />
                            <input type="radio" name="directions" value="RIGHT"> RIGHT <br />
                            <input type="radio" name="directions" value="NOWAY" checked="checked"> NOWAY <br />
                        </fieldset>
                        <fieldset>
                            <legend>Shrines</legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="text" id="searchShrines" class="w-75" placeholder="Search shrines ...">
                            </div>
                            <div class="d-flex justify-content-center">
                                <select id="shrine_type"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="shrinecanvas" width="256" height="256"></canvas>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Trainers</legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="text" id="searchTrainer" class="w-75" placeholder="Search trainers ...">
                            </div>
                            <div class="d-flex justify-content-center">
                                <select id="item_shrine_type"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="trainercanvas" width="256" height="256"></canvas>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Oracles</legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="text" id="searchOracle" class="w-75" placeholder="Search oracles ...">
                            </div>
                            <div class="d-flex justify-content-center">
                                <select id="oracle_type"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="oraclecanvas" width="256" height="256"></canvas>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Interaction objects</legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="text" id="searchIO" class="w-75"
                                    placeholder="Search interaction objects ...">
                            </div>
                            <div class="d-flex justify-content-center">
                                <select id="interaction_object_type"> </select>
                            </div>
                            <div class="d-flex justify-content-center my-2">
                                <canvas id="object_canvas" width="48" height="48"></canvas>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Movable interaction entity</legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="text" id="searchMIE" class="w-75" placeholder="Search mie ...">
                            </div>
                            <div class="d-flex justify-content-center">
                                <select id="movable_type"> </select>
                            </div>
                            <div class="d-flex justify-content-center my-2">
                                <canvas id="movable_canvas" width="48" height="48"></canvas>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Interactors</legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="text" id="searchInteractors" class="w-75"
                                    placeholder="Search interactors ...">
                            </div>
                            <div class="d-flex justify-content-center my-2">
                                <select id="interactor_type"> </select>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="col-4">
                    <div class="setup_container section" id="paint">
                        <fieldset>
                            <legend>
                                On click, paint/set:
                            </legend>
                            <input type="radio" name="painter" value="flip" checked="checked"> Flip (Wall
                            &lt-&gt Space)<br />
                            <input type="radio" name="painter" value="wall"> Wall
                            <input type="checkbox" id="ceil_support" value="ceil_support" name="ceil_support"
                                checked="checked"> Set floor (space) above
                            <br />
                            <input type="radio" name="painter" value="space"> Space
                            <input type="checkbox" id="floor_support" value="floor_support" name="floor_support"
                                checked="checked"> Set wall bellow
                            <br />
                            <input type="radio" name="painter" value="door"> Door <br />
                            <input type="radio" name="painter" value="trapdoor" disabled> TrapDoor (CCC
                            disabled)<br />
                            <input type="radio" name="painter" value="blockwall"> BlockWall<br />
                            <input type="radio" name="painter" value="pillar"> Pillar<br />
                            <input type="radio" name="painter" value="hole"> Hole <br />
                            <hr>
                            <input type="radio" name="painter" value="WALL8"> WALL8 <br />
                            <input type="radio" name="painter" value="WALL6"> WALL6 <br />
                            <input type="radio" name="painter" value="WALL4"> WALL4 <br />
                            <input type="radio" name="painter" value="WALL2"> WALL2 <br />
                            <hr>
                            <input type="radio" name="painter" value="fill"> Fill
                            <select id="fill_value"></select>
                            <br />
                            <hr>
                            <input type="radio" name="painter" value="gate"> Gate <br />
                            <input type="radio" name="painter" value="decal"> Decal <br />
                            <input type="radio" name="painter" value="light"> Light <br />
                            <input type="radio" name="painter" value="shrine"> Shrine <br />
                            <input type="radio" name="painter" value="item_shrine"> Trainer <br />
                            <input type="radio" name="painter" value="oracle"> Oracle <br />
                            <input type="radio" name="painter" value="lair"> Lair <br />
                            <hr>
                            <input type="radio" name="painter" value="key"> Key <br />
                            <input type="radio" name="painter" value="scroll"> Scroll <br />
                            <input type="radio" name="painter" value="potion" disabled> Potion <br />
                            <input type="radio" name="painter" value="gold"> <span style="color:gold">Gold</span> <br />
                            <input type="radio" name="painter" value="skill"> Skill <br />
                            <hr>
                            <input type="radio" name="painter" value="container"> Container <br />
                            <hr>
                            <input type="radio" name="painter" value="monster"> Monster <br />
                            <hr>
                            <input type="radio" name="painter" value="start"> Start position <br />
                            <hr>
                            <input type="radio" name="painter" value="cleargrid"> Clear grid <br />
                            <hr>
                            <input type="radio" name="painter" value="fire"> Fire <br />
                            <div class="d-flex justify-content-center">
                                <select id="fire_type"> </select>
                            </div>
                            <hr>
                            <input type="radio" name="painter" value="trigger"> Trigger <br />
                            <div class="d-flex justify-content-center">
                                <select id="trigger_actions"> </select>
                            </div>
                            <hr>
                            <input type="radio" name="painter" value="trap"> Trap <br />
                            <div>
                                <p></p>What: <select id="trap_type"> </select></p>
                            </div>
                            <div>
                                <p></p>Which: <select id="trap_entity"> </select></p>
                            </div>

                            <hr>
                            <input type="radio" name="painter" value="entity"> Entity <br />
                            <hr>
                            <input type="radio" name="painter" value="object"> Interaction object <br />
                            <input type="radio" name="painter" value="movable"> Movable Interaction entity <br />
                            <input type="radio" name="painter" value="interactor"> Interactor <br />

                        </fieldset>

                        <fieldset>
                            <legend>
                                Version:
                            </legend>
                            ENGINE: <span id="engine_version"></span><br>
                            GRID: <span id="grid_version"></span><br>
                            MAZE: <span id="maze_version"></span><br>
                            Prototype LIB: <span id="lib_version"></span><br>
                            IAM: <span id="iam_version"></span><br>
                            WebGL: <span id="webgl_version"></span><br>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Lights
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchLights" class="w-75" placeholder="Search lights ...">
                                </div>
                                <input type="button" id="randlight" value="Random" />
                                <div class="d-flex justify-content-center">
                                    <select id="light_decal"> </select>
                                </div>
                                <div class="m-3">
                                    <canvas id="lightcanvas" width="256" height="256"></canvas>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Keys
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center rounded-1 border border-1 border-primary"
                                    id="key_selection">
                                    <select id="key_type"> </select>
                                </div>
                                <div class="m-3 d-flex justify-content-center">
                                    <canvas id="keycanvas" width="48" height="48"></canvas>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Monsters
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchMonster" class="w-75" placeholder="Search monster ...">
                                </div>

                                <div class="d-flex justify-content-center">
                                    <input type="button" id="add_monster_list" value="Add to list" />
                                    <input type="button" id="clear_list" value="Clear list" class="red_button" />
                                </div>
                                <div class="d-flex justify-content-center my-3">
                                    <select id="monster_type"> </select>
                                </div>
                                <div class="d-flex justify-content-center my-3">
                                    <textarea id="monster_list" style="width:100%; height: 96px"></textarea>
                                </div>
                                <div class=" my-3">
                                    Max spawned: &nbsp;<input name="monsterdef" id="max_spawned" type="text" size="2"
                                        maxlength="2" value=""><br />
                                    Kill countdown: &nbsp;<input name="monsterdef" id="kill_countdown" type="text"
                                        size="2" maxlength="2" value=""><br />
                                    Kills Required To Stop Spawning: &nbsp;<input name="monsterdef"
                                        id="killsRequiredToStopSpawning" type="text" size="2" maxlength="2"
                                        value="99"><br />
                                    Spawn delay [ms]: &nbsp;<input name="monsterdef" id="spawn_delay" type="text"
                                        size="4" maxlength="4" value=""><br />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                Entities
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchEntity" class="w-75" placeholder="Search entities ...">
                                </div>

                                <div class="d-flex justify-content-center">
                                    <select id="entity_type"> </select>
                                </div>
                                <div class="d-flex justify-content-center m-3">
                                    <canvas id="entitycanvas" width="256" height="256"></canvas>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="col-4">
                    <div class="setup_container section" id="selector2">
                        <fieldset>
                            <legend>Wall Pictures
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchPics" class="w-75" placeholder="Search pics ...">
                                </div>

                                <input type="radio" name="decalusage" value="picture" checked="checked"> Use pictures
                                <input type="button" id="randpic" value="Random [F8]" />
                                <br />
                                <div class="d-flex justify-content-center">
                                    <select id="picture_decal"> </select>
                                </div>
                                <div class="d-flex justify-content-center m-3">
                                    <canvas id="picturecanvas" width="256" height="256"></canvas>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Crests
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchDecals" class="w-75" placeholder="Search decals ...">
                                </div>

                                <input type="radio" name="decalusage" value="crest"> Use crests
                                <input type="button" id="randcrest" value="Random [F8]" />
                                <br />
                                <div class="d-flex justify-content-center m-3">
                                    <select id="crest_decal"> </select>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <canvas id="crestcanvas" width="256" height="256"></canvas>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Textures
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchDecalTexture" class="w-75"
                                        placeholder="Search textures ...">
                                </div>

                                <input type="radio" name="decalusage" value="texture"> Use texture

                                <br />
                                <div class="d-flex justify-content-center">
                                    <select id="texture_decal"> </select>
                                </div>
                                <div class="d-flex justify-content-center m-3">
                                    <canvas id="texturecanvas" width="256" height="256"></canvas>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>
                                Trigger & trap decals
                            </legend>
                            <div class="d-flex align-items-center">
                                <input type="button" id="randtriggerdecal" value="Random" />
                                <select id="trigger_decal" class="ms-2"> </select>
                            </div>


                            <div class="d-flex justify-content-center">
                                <canvas id="triggercanvas" width="48" height="48"></canvas>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Scroll</legend>
                            <div class="d-flex justify-content-center">
                                <select id="scroll_type"> </select>
                            </div>
                            <div class="d-flex justify-content-center my-2">
                                <canvas id="scrollcanvas" width="48" height="48"></canvas>
                            </div>
                        </fieldset>


                        <fieldset style="color:gold">
                            <legend>
                                Gold
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center">
                                    <select id="gold_type"> </select>
                                </div>
                                <div class="d-flex justify-content-center my-2">
                                    <canvas id="gold_canvas" width="48" height="48"></canvas>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>
                                Skill
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center">
                                    <select id="skill_type"> </select>
                                </div>
                                <div class="m-3 d-flex justify-content-center">
                                    <canvas id="skillcanvas" width="96" height="96"></canvas>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>
                                Container
                            </legend>
                            <div>
                                <div class="d-flex align-items-center">
                                    <input type="button" id="randcontainer" value="Random Type" />
                                    <select id="container_type" class="ms-2"> </select>
                                </div>

                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchContainers" class="w-75"
                                        placeholder="Search containers ...">
                                </div>
                                <div class="d-flex justify-content-center m-3">
                                    <canvas id="containercanvas" width="256" height="256"></canvas>
                                </div>

                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchItems" class="w-75" placeholder="Search items ...">
                                </div>

                                <div class="d-flex justify-content-center align-items-center my-3">
                                    <label for="content_type" class="text-center me-2">Contained item:
                                        <select id="content_type"> </select>
                                    </label>
                                </div>

                                <div class="d-flex justify-content-center my-2">
                                    <canvas id="container_item_canvas" width="48" height="48"></canvas>
                                </div>

                                Orientation:<br />
                                <input type="radio" name="orientation" value="FIXED" checked="checked"> FIXED <br />
                                <input type="radio" name="orientation" value="RANDOM"> RANDOM <br />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Lair
                            </legend>
                            <div>
                                <div class="d-flex align-items-center">
                                    <input type="button" id="randlair" value="Random [F7]" />
                                    <select id="lair_type" class="ms-2"> </select>
                                </div>

                                <div class="d-flex justify-content-center m-3">
                                    <canvas id="laircanvas" width="256" height="256"></canvas>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col-4">
                    <div class="setup_container section">
                        <fieldset>
                            <legend>
                                Wall Texture
                            </legend>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="text" id="searchWall" class="w-75" placeholder="Search wall textures ...">
                            </div>
                            <div>
                                <div class="d-flex align-items-center">
                                    <input type="button" id="randwall" value="Random" />
                                    <select id="walltexture" class="ms-3"></select>
                                </div>

                                <div class="m-3">
                                    <canvas id="wallcanvas" width="320" height="320"></canvas>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <p id="wall_resolution"></p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="col-4">
                    <div class="setup_container section">
                        <fieldset>
                            <legend>
                                Floor Texture
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchFloor" class="w-75"
                                        placeholder="Search floor textures ...">
                                </div>

                                <div class="d-flex align-items-center">
                                    <input type="button" id="randfloor" value="Random" />
                                    <select id="floortexture" class="ms-3"></select>
                                </div>

                                <div class="m-3">
                                    <canvas id="floorcanvas" width="320" height="320"></canvas>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <p id="floor_resolution"></p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="col-4">
                    <div class="setup_container section">
                        <fieldset>
                            <legend>
                                Ceiling Texture
                            </legend>
                            <div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <input type="text" id="searchCeil" class="w-75"
                                        placeholder="Search ceiling textures ...">
                                </div>

                                <div class="d-flex align-items-center">
                                    <input type="button" id="randceil" value="Random" />
                                    <select id="ceiltexture" class="ms-3"></select>
                                </div>

                                <div class="m-3">
                                    <canvas id="ceilcanvas" width="320" height="320"></canvas>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <p id="ceil_resolution"></p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div class=" row">
                <div class="setup_container section">
                    <fieldset>
                        <legend>
                            Export:
                        </legend>
                        <textarea id="exp" style="width: 1200px; height: 256px;">
                        124 : {
                            name: "Incantatrix Ignis",
                            sg: 0,
                            maxSpawned: 3,
                            killCountdown: 3,
                            killsRequiredToStopSpawning: 99,
                            spawnDelay: 9999,
                            data: '{"width":"11","height":"11","depth":2,"map":"BB2ABABAA2BABAA9BABAA21BB17ABABB5ABB6ABB3ABABB39$BB9ÁABB54ÁÁ4BB26ÁÁ20BB5"}',
                            wall: "DarkFloorSDXL337",
                            floor: "RedMArbleFloor9",
                            ceil: "Relief23",
                            start: '[64,3]',
                            decals: '[[15,7,"FemDommes_18746","picture"],[18,7,"FemDommes_12080","picture"],[25,7,"FemDommes_26200","picture"],[30,7,"Infiltrator60","picture"],[103,1,"BlackBeret_076","picture"],[106,1,"FemDommes_8421","picture"],[96,1,"FemDommes_16159","picture"],[91,1,"FemDommes_16467","picture"],[53,3,"FemDommes_5202","picture"],[75,3,"FemDommes_20312","picture"],[35,5,"ImpossibleMission11","picture"],[79,5,"FemDommes_13043","picture"],[48,4,"LeopardRug04","crest"],[49,4,"LeopardRug04","crest"],[50,4,"LeopardRug04","crest"],[61,4,"LeopardRug04","crest"],[60,4,"LeopardRug04","crest"],[59,4,"LeopardRug04","crest"],[70,4,"LeopardRug04","crest"],[71,4,"LeopardRug04","crest"],[72,4,"LeopardRug04","crest"]]',
                            lights: '[[184,3,"Candle64","standardDim"]]',
                            gates: '[[65,3,"124.1","123.2","Closed"]]',
                            containers: '[[27,"TreasureChest","GOLD_ITEM_TYPE.GoldSphere",7]]',
                            entities: '[[55,5,"IncantatrixIgnis"]]',
                        }
                        </textarea>
                    </fieldset>
                </div>
            </div>

            <div class=" row">
                <p class="cb" id="buttons"></p>
                <p class="version cb terminal" id="version"></p>
            </div>
            <div class="row">
                <p>
                    Current floor:<select id="floors" class="ms-3"></select>
                    <input type="button" id="hint_down" value="Hint below" />
                    <input type="button" id="hint_up" value="Hint above" />
                    <input type="button" id="clearHint" value="Clear Hints" />
                    <input type="checkbox" id="keepHints" value="keepHints" name="keepHints" checked="checked">Keep
                    showing hints below
                    <input type="checkbox" id="keepHintsAbove" value="keepHintsAbove" name="keepHintsAbove">Keep showing
                    hints above
                    <input type="button" id="floor_on_top" value="Add floor on top" class="red_button" />
                </p>
            </div>
            <div class=" row">
                <p class="warning"><span>Error: </span><span id="error_message">Everything is fine</span></p>
            </div>
        </div>
    </div>

    <div id="game" class="winTrans"></div>
    <div id="bottom" class="cb" style="margin-top: 2048px"></div>
    <div id="temp" class="hidden"></div>
    <div id="temp2" class="hidden"></div>
    <!-- copy END -->