<!-- copy -->
<div id="preload" class="hidden"></div>

<div class="container my-5 p-5 cool_page">
    <div id="setup">
        <div id="load"></div>
        <div class="row win">
            <h1 id="title" class="arcade"></h1>
            <p class="c64">Editor used for R.U.N., CrawlMaster II, The Curse of the Castle Creep, Castle Haunt II
                and maybe some
                other games.</p>
            <p class="c64">
                Current version is featuring assets and definitions from CastleHaunt II.
            </p>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="setup_container section" id="selector">
                    <fieldset>
                        <legend>
                            Size & Info:
                        </legend>
                        Grid dimensions:
                        <input name="gridsize" id="horizontalGrid" type="text" size="2" maxlength="2" value="16">
                        <span> X </span>
                        <input name="gridsize" id="verticalGrid" type="text" size="2" maxlength="2" value="16">
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
                        <input type="radio" name="renderer" value="block" checked="checked"> Block (decal, item
                        support)<br />
                        <input type="radio" name="renderer" value="texture"> Texture <br />
                        <input type="radio" name="renderer" value="tile"> Tile <br />
                        <input type="checkbox" id="corr" value="corr" name="corr"> Draw corridor gridline<br />
                        <input type="checkbox" id="grid" value="grid" name="grid" checked="checked"> Main grid<br />
                        <input type="checkbox" id="coord" value="coord" name="coord">
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
                            <input type="text" id="searchIO" class="w-75" placeholder="Search interaction objects ...">
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
                            <input type="text" id="searchInteractors" class="w-75" placeholder="Search interactors ...">
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
                        <input type="radio" name="painter" value="wall"> Wall <br />
                        <input type="radio" name="painter" value="space"> Space <br />
                        <input type="radio" name="painter" value="door"> Door <br />
                        <input type="radio" name="painter" value="trapdoor" disabled> TrapDoor (CCC
                        disabled)<br />
                        <input type="radio" name="painter" value="blockwall"> BlockWall<br />
                        <input type="radio" name="painter" value="hole"> Hole <br />
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
                        <input type="radio" name="painter" value="potion"> Potion <br />
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
                                Kill countdown: &nbsp;<input name="monsterdef" id="kill_countdown" type="text" size="2"
                                    maxlength="2" value=""><br />
                                Spawn delay [ms]: &nbsp;<input name="monsterdef" id="spawn_delay" type="text" size="4"
                                    maxlength="4" value=""><br />
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
                            <input type="button" id="randcrest" value="Random" />
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
                        <input type="button" id="randtriggerdecal" value="Random" />
                        <br />
                        <div class="d-flex justify-content-center">
                            <select id="trigger_decal"> </select>
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

                    <fieldset>
                        <legend>
                            Potions
                        </legend>
                        <div>
                            <div class="d-flex justify-content-center rounded-1 border border-1 border-primary"
                                id="potion_selection">
                                <select id="potion_type"> </select>
                            </div>
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
                            <input type="button" id="randcontainer" value="Random" />
                            </br>
                            <div class="d-flex justify-content-center">
                                <p>Container type: <select id="container_type"> </select></p>
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
                            <div>
                                <input type="button" id="randlair" value="Random [F7]" />
                                <div class="d-flex justify-content-center">
                                    <select id="lair_type"> </select>
                                </div>
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
                            <input type="button" id="randwall" value="Random" />
                            <div class="d-flex justify-content-center">
                                <select id="walltexture"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="wallcanvas" width="320" height="160"></canvas>
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
                            <input type="button" id="randfloor" value="Random" />
                            <div class="d-flex justify-content-center">
                                <select id="floortexture"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="floorcanvas" width="320" height="160"></canvas>
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
                            <input type="button" id="randceil" value="Random" />
                            <div class="d-flex justify-content-center">
                                <select id="ceiltexture"> </select>
                            </div>
                            <div class="m-3">
                                <canvas id="ceilcanvas" width="320" height="160"></canvas>
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
                        117 : {
                            name: "Ice Pie",
                            sg: 0,
                            maxSpawned: 6,
                            killCountdown: 4,
                            spawnDelay: 5000,
                            data: '{"width":"17","height":"17","map":"BB2ABABAA4BAA2BB2AA6BABB8ABABAA2BB2AA2BAA4BAA16BB5ABB3AA4BAA5BB6ABB6ABB2ABABB4AA4BB9ABB9ABAA4BAA5BB2AA2BAA9BABB6AA2BB7AA3BB3AA2BB2AA2BB2ABB2AA6BAA4BABB2ABB4AA3BB6AA2BB9AA5BB3AA4BB6ABB7AA3BB5ABABB3ABB19A$"}',
                            wall: "IceWall29",
                            floor: "IceFloor33",
                            ceil: "IceWall7",
                            start: '[18,7]',
                            decals: '[[3,7,"FemDommes_8302","picture"],[7,7,"BlackBeret_017","picture"],[9,7,"BrianBloodaxe70","picture"],[15,7,"Morana035","picture"],[45,7,"FluxDommes2269","picture"],[47,7,"UnusedEntities149","picture"],[77,7,"FluxDommes3048","picture"],[113,7,"FemDommes_6084","picture"],[117,7,"GameDommes_033","picture"],[145,7,"BlackBeret_081","picture"],[181,7,"FemDommes_5286","picture"],[234,7,"BookShelf23","picture"],[75,7,"BookShelf23","picture"],[105,7,"FemDommes_8003","picture"],[175,7,"FemDommes_6124","picture"],[207,7,"FluxDommes2066","picture"],[71,1,"CastleWolfenstein21","picture"],[75,1,"PrincessDragonDomme_100","picture"],[77,1,"Various7016","picture"],[117,1,"TimeTunnel70","picture"],[115,1,"NurseAlchemyMagic_110","picture"],[113,1,"FluxDommes2226","picture"],[145,1,"GemDommes_077","picture"],[285,1,"Princess610","picture"],[249,1,"FemDommes_8556","picture"],[245,1,"GameDommes_036","picture"],[277,1,"FemDommes_8106","picture"],[275,1,"CCC_029","picture"],[207,1,"FluxDommes2187","picture"],[141,1,"BlackBeret_142","picture"],[51,5,"FemDommes_8357","picture"],[25,5,"FluxDommes3100","picture"],[61,5,"AI_pic251","picture"],[97,5,"Princess610","picture"],[93,5,"FemDommes_8044","picture"],[127,5,"LaraCroft102","picture"],[131,5,"AMC2","picture"],[195,5,"FluxDommes4022","picture"],[250,5,"FemDommes_4235","picture"],[259,5,"GameDommes_180","picture"],[189,5,"FemDommes_5062","picture"],[121,5,"GirlSwims05","picture"],[85,5,"FemDommes_8104","picture"],[221,5,"FemDommes_8114","picture"],[255,5,"GemDommes_267","picture"],[55,3,"FemDommes_4009","picture"],[25,3,"Domme243","picture"],[61,3,"FluxDommes2060","picture"],[33,3,"FemDommes_4262","picture"],[101,3,"UnusedEntities2073","picture"],[169,3,"SeaWolf60","picture"],[201,3,"Domme302","picture"],[233,3,"BlackBeret_066","picture"],[254,3,"FemDommes_6291","picture"],[269,3,"NurseAlchemyMagic_021","picture"],[193,3,"AI_pic262","picture"],[125,3,"FluxDommes2223","picture"],[93,3,"GirlSwims19","picture"],[259,3,"GirlSwims19","picture"],[57,5,"UnusedEdtitiesFramed_056","picture"],[163,5,"GameDommes_240","picture"],[97,3,"PrincessDragonDomme_024","picture"],[72,7,"GhostFace3","picture"],[161,3,"UnusedEntities2101","picture"]]',
                            gates: '[[1,7,"117.1","113.3","Closed"]]',
                            gold: '[[59,"GoldCube"],[29,"GoldCube"],[99,"GoldCube"],[95,"GoldCube"],[128,"GoldCube"],[166,"GoldCube"],[202,"GoldCube"],[232,"GoldCube"],[177,"GoldCube"],[124,"GoldCube"],[156,"GoldCube"],[241,"GoldCube"],[263,"GoldCube"],[267,"GoldCube"],[217,"GoldSphere"],[270,"GoldSphere"],[159,"GoldSphere"]]',
                            skills: '[[198,"Heart"]]',
                            triggers: '[[36,7,"SmoothWallButton",1,22],[273,1,"SmoothWallButton",1,69]]',
                            objects: '[[256,"IceCube"],[162,"IceCube"],[132,"IceCube"]]',
                            lairs: '[[39,7,"Lair36"],[157,5,"Lair29"],[287,1,"Lair13"],[234,1,"Lair74"]]',
                            monsterList: '["GreenSkeleton","Basilisk","GoldSkeleton"]',
                            }
                    </textarea>
                </fieldset>
            </div>
        </div>

        <div class=" row">
            <p class="cb" id="buttons"></p>
            <p class="version cb terminal" id="version"></p>
        </div>
        <div class=" row">
            <p class="warning"><span>Error: </span><span id="error_message">Everything is fine</span></p>
        </div>
    </div>
</div>

<div id="game" class="winTrans"></div>
<div id="bottom" class="cb" style="margin-top: 1724px"></div>
<div id="temp" class="hidden"></div>
<div id="temp2" class="hidden"></div>
<!-- copy END -->