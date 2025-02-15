/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";
/////////////////////////////////////////////////
/*
 forked from: LevelEditor for Deep Down Into Darkness, v0.18.0
 ported to gen 3 ENGINE, GRID
ported to gen 4 ENGINE, GRID
 forked from MazeMaster 1.03
      
 to do:
      
 known bugs: 

 */
////////////////////////////////////////////////////
const MAP = {
  Demo: {
    name: "Demo",
    data: '{"width":"8","height":"8","map":"BB4AA9BB2AA3BB2AA2BB2AA2BB2ABB4AA2BB2ABABB3AA4BABB5ABB8A$"}',
    wall: "BigGreyBricks1",
    floor: "BloodMarbleFloorWall_SDXL_001",
    ceil: "IrregularTiledFloorCeil13",
    lights: '[[1,7,"Candelabra01","standard"],[6,7,"Candelabra01","standard"],[57,1,"Candelabra01","standard"],[62,1,"Candelabra01","standard"]]',
    start: '[11,7]',
  },
};

const $MAP = {
  map: {},
  properties: null,
  lists: null,
  combined: [],
  init() {
    for (const prop of this.properties) {
      this.map[prop] = [];
    }
    for (const prop of this.lists) {
      this.map[prop] = [];
    }
  },
  combine() {
    this.combined = [];
    for (const prop of this.properties) {
      this.combined.push(this.map[prop]);
    }
  }
};
const INI = {
  MAXINT: 96,
  MININT: 5,
  MAX_GRID: 64,
  MIN_GRID: 5,
  SPACE_X: 2048,
  SPACE_Y: 2048,
  CANVAS_RESOLUTION: 256,
};
const PRG = {
  VERSION: "0.15.00",
  NAME: "MazEditor",
  YEAR: "2022, 2023, 2024, 2025",
  CSS: "color: #239AFF;",
  INIT() {

    console.log("%c**************************************************************************************************************************************", PRG.CSS);
    console.log(`${PRG.NAME} ${PRG.VERSION} by Lovro Selic, (c) LaughingSkull ${PRG.YEAR} on ${navigator.userAgent}`);
    console.log("%c**************************************************************************************************************************************", PRG.CSS);
    $("#title").html(PRG.NAME);
    $("#version").html(`${PRG.NAME} V${PRG.VERSION} <span style='font-size:14px'>&copy</span> LaughingSkull ${PRG.YEAR}`);
    $("input#toggleAbout").val("About " + PRG.NAME);
    $("#about fieldset legend").append(" " + PRG.NAME + " ");

    ENGINE.autostart = true;
    ENGINE.start = PRG.start;
    ENGINE.readyCall = GAME.setup;
    ENGINE.setGridSize(64);
    ENGINE.setSpriteSheetSize(64);
    ENGINE.init();
  },
  setup() {
    console.log("PRG.setup");
    $("#verticalGrid").change(GAME.updateWH);
    $("#horizontalGrid").change(GAME.updateWH);
    $("#gridsize").change(GAME.updateWH);
    $("#selector input[name=renderer]").click(GAME.render);
    $("#corr").click(GAME.render);
    $("#coord").click(GAME.render);
    $("#all_coord").click(GAME.render);
    $("#grid").click(GAME.render);

    $("#buttons").on("click", "#new", GAME.init);
    $("#buttons").on("click", "#arena", GAME.arena);
    $("#buttons").on("click", "#maze", GAME.maze);
    $("#buttons").on("click", "#export", GAME.export);
    $("#buttons").on("click", "#import", GAME.import);
    $("#buttons").on("click", "#copy", GAME.copyToClipboard);

    $("#engine_version").html(ENGINE.VERSION);
    $("#grid_version").html(GRID.VERSION);
    $("#maze_version").html(DUNGEON.VERSION);
    $("#lib_version").html(LIB.VERSION);
    $("#webgl_version").html(WebGL.VERSION);
    $("#iam_version").html(IndexArrayManagers.VERSION);

    $(".section").show();
  },
  start() {
    console.log(PRG.NAME + " started.");
    $("#startGame").addClass("hidden");
    GAME.start();
  }
};

const HERO = {};

const GAME = {
  start() {
    $MAP.properties = MAP_TOOLS.properties;
    $MAP.lists = MAP_TOOLS.lists;
    $("#bottom")[0].scrollIntoView();
    ENGINE.topCanvas = ENGINE.getCanvasName("ROOM");
    $(ENGINE.topCanvas).on("click", { layer: ENGINE.topCanvas }, GAME.mouseClick);
    GAME.init();
    GAME.started = true;
    GAME.level = "Demo";
    GAME.levelStart();
  },
  levelStart() {
    GAME.initLevel(GAME.level);
    GAME.setFirstPerson();
    WebGL.renderScene($MAP.map);
    // render occlusion map
    $MAP.map.occlusionMap = WebGL.createOcclusionTexture($MAP.map.textureMap, $MAP.map.width, $MAP.map.height);
    //WebGL.visualizeTexture($MAP.map.occlusionMap, $MAP.map.width, $MAP.map.height, LAYER.debug);
  },
  setFirstPerson() {
    WebGL.CONFIG.set("first_person", false);
    HERO.player.clearCamera();
    HERO.player.moveSpeed = 4.0;
    WebGL.setCamera(HERO.player);
  },
  newDungeon(level) {
    MAP_TOOLS.unpack(level);
  },
  buildWorld(level) {
    console.warn("building world, level", level);
    SPAWN_TOOLS.spawn(level);
    MAP[level].world = WORLD.build(MAP[level].map);
    $MAP.map.textureMap = $MAP.map.GA.toTextureMap();
  },
  setWorld(level, decalsAreSet = false) {
    console.log("setting world");
    console.time("setWorld");

    const textureData = {
      wall: TEXTURE[$("#walltexture")[0].value],
      floor: TEXTURE[$("#floortexture")[0].value],
      ceil: TEXTURE[$("#ceiltexture")[0].value]
    };

    WebGL.updateShaders();
    WebGL.init('webgl', MAP[level].world, textureData, HERO.player, decalsAreSet);
    console.timeEnd("setWorld");
  },
  initLevel(level) {
    this.newDungeon(level);
    const start_dir = MAP[level].map.startPosition.vector;
    let start_grid = MAP[level].map.startPosition.grid;
    start_grid = Vector3.from_Grid(Grid.toCenter(start_grid), 0.6);
    WebGL.CONFIG.set("first_person", false);

    if (WebGL.CONFIG.firstperson) {
      HERO.player = new $3D_player(start_grid, Vector3.from_2D_dir(start_dir), MAP[level].map, null);
    }

    WebGL.setContext('webgl');
    WebGL.init_required_IAM($MAP.map, HERO);
    this.buildWorld(level);
    this.setWorld(level);
  },
  arena() {
    GAME.init();
    let GA = $MAP.map.GA;
    GA.massClear();
    GA.border(parseInt($("#arenawidth").val(), 10));
    GAME.render();
  },
  maze() {
    const GA = $MAP.map.GA;
    const maze = $MAP.map;
    if (!maze.start[0]) return;
    console.log(maze.start[0]);
    const start = GA.indexToGrid(maze.start[0]);

    console.warn("creating maze", start);
    maze.carveMaze(start);
    GAME.render();
  },
  mouseClick(event) {
    ENGINE.readMouse(event);
    let x = Math.floor(ENGINE.mouseX / ENGINE.gameWIDTH * $MAP.width);
    let y = Math.floor(ENGINE.mouseY / ENGINE.gameHEIGHT * $MAP.height);
    const grid = new Grid(x, y);
    const radio = $("#paint input[name=painter]:checked").val();
    let GA = $MAP.map.GA;
    let dir, nameId, type, dirIndex, dirs;
    let currentValue = GA.getValue(grid);
    let gridIndex = GA.gridToIndex(grid);

    switch (radio) {
      case 'flip':
        if (GA.isWall(grid)) {
          GA.carveDot(grid);
        } else {
          GA.toWall(grid);
        }
        $("#error_message").html("All is fine");
        break;
      case "space":
        GA.carveDot(grid);
        $("#error_message").html("All is fine");
        break;
      case "wall":
        GA.toWall(grid);
        $("#error_message").html("All is fine");
        break;
      case "hole":
        GAME.clearGrid(gridIndex);
        GA.toHole(grid);
        $("#error_message").html("All is fine");
        break;
      case "door":
        if (GA.notWall(grid)) {
          GAME.clearGrid(gridIndex);
          GA.toDoor(grid);
          $MAP.map.doors.push(gridIndex);
          $("#error_message").html("All is fine");
        } else {
          $("#error_message").html("You can't make door in the wall!");
        }
        break;
      case "trapdoor":
        GA.addTrapDoor(grid);
        $("#error_message").html("All is fine");
        break;
      case "blockwall":
        GA.toBlockWall(grid);
        $("#error_message").html("All is fine");
        break;
      case "gate":
        switch (currentValue) {
          case MAPDICT.WALL:
            break;
          default:
            $("#error_message").html(`Gate placement not supported on value: ${currentValue}`);
            return;
        }
        //
        dirs = GA.getDirections(grid, MAPDICT.EMPTY);
        if (dirs.length > 1) {
          alert(`bad gate position, posible exits ${dirs.length}`);
          break;
        }
        dirIndex = dirs[0].toInt();
        $MAP.map.gates.push(Array(gridIndex, dirIndex, $("#sgateID")[0].value, $("#tgateID")[0].value, $("#gatetype")[0].value));
        break;
      case "lair":
        switch (currentValue) {
          case MAPDICT.WALL:
            break;
          default:
            $("#error_message").html(`Lair placement not supported on value: ${currentValue}`);
            return;
        }

        dirs = GA.getDirections(grid, MAPDICT.EMPTY);
        if (dirs.length > 1) {
          alert(`bad lair position, posible exits ${dirs.length}`);
          break;
        }
        dirIndex = dirs[0].toInt();
        $MAP.map.lairs.push(Array(gridIndex, dirIndex, $("#lair_type")[0].value));

        console.warn("***** LAIR *****");
        break;
      case "decal":
        switch (currentValue) {
          case MAPDICT.EMPTY:
          case MAPDICT.BLOCKWALL:
            dir = NOWAY;
            [nameId, type] = GAME.getSelectedDecal();
            break;
          case MAPDICT.WALL:
            dir = GAME.getSelectedDir();
            if (dir.same(NOWAY)) {
              $("#error_message").html("Wall decal needs direction");
              return;
            }
            [nameId, type] = GAME.getSelectedDecal();
            break;
          default:
            $("#error_message").html(`Decal placement not supported on value: ${currentValue}`);
            return;
        }

        dirIndex = dir.toInt();
        $("#error_message").html("All is fine");
        GAME.assertUniqueDecalPosition(gridIndex, dirIndex, $MAP.map.decals);
        $MAP.map.decals.push(Array(gridIndex, dirIndex, nameId, type));
        break;
      case "light":
        console.log("light, value", currentValue, "grid", grid);
        switch (currentValue) {
          case MAPDICT.WALL:
            dir = GAME.getSelectedDir();
            console.log(".dir", dir);
            if (dir.same(NOWAY)) {
              $("#error_message").html("Light decal needs direction");
              return;
            }
            dirIndex = dir.toInt();
            nameId = $("#light_decal")[0].value;
            type = $("#lighttype")[0].value;
            $MAP.map.lights.push(Array(gridIndex, dirIndex, nameId, type));
            break;
          default:
            $("#error_message").html(`Light placement not supported on value: ${currentValue}`);
            return;
        }
        $("#error_message").html("All is fine");
        break;
      case "cleargrid":
        GAME.clearGrid(gridIndex);
        $("#error_message").html("All is fine: grid cleared");
        break;
      case "start":
        switch (currentValue) {
          case MAPDICT.EMPTY:
            dir = GAME.getSelectedDir();
            console.log(".dir", dir);
            if (dir.same(NOWAY)) {
              $("#error_message").html("Start needs direction");
              return;
            }
            dirIndex = dir.toInt();
            $MAP.map.start = [gridIndex, dirIndex];
            break;
          default:
            $("#error_message").html(`Start placement not supported on value: ${currentValue}`);
            return;
        }
        $("#error_message").html("All is fine");
        break;
      case "key":
        switch (currentValue) {
          case MAPDICT.EMPTY:
            let keyValue = $("#key_type")[0].value;
            let keyTypeIndex = KEY_TYPES.indexOf(keyValue);
            $MAP.map.keys.push(Array(gridIndex, keyTypeIndex));
            break;
          default:
            $("#error_message").html(`Key placement not supported on value: ${currentValue}`);
            return;
        }
        $("#error_message").html("All is fine");
        break;
      case "monster":
        switch (currentValue) {
          case MAPDICT.EMPTY:
            let monsterValue = $("#monster_type")[0].value;
            $MAP.map.monsters.push(Array(gridIndex, monsterValue));
            break;
          default:
            $("#error_message").html(`Monster placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case "scroll":
        switch (currentValue) {
          case MAPDICT.EMPTY:
            let scrollValue = $("#scroll_type")[0].value;
            let scrollTypeIndex = SCROLL_TYPE.indexOf(scrollValue);
            $MAP.map.scrolls.push(Array(gridIndex, scrollTypeIndex));
            break;
          default:
            $("#error_message").html(`Scroll placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case "potion":

        switch (currentValue) {
          case MAPDICT.EMPTY:
            let potionValue = $("#potion_type")[0].value;
            let potionTypeIndex = POTION_TYPES.indexOf(potionValue);
            $MAP.map.potions.push(Array(gridIndex, potionTypeIndex));
            break;
          default:
            $("#error_message").html(`Potion placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case 'gold':
        switch (currentValue) {
          case MAPDICT.EMPTY:
            let goldValue = $("#gold_type")[0].value;
            $MAP.map.gold.push(Array(gridIndex, goldValue));
            console.log("$MAP.map.gold", $MAP.map.gold);
            break;
          default:
            $("#error_message").html(`Gold placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case 'skill':
        switch (currentValue) {
          case MAPDICT.EMPTY:
            let skillValue = $("#skill_type")[0].value;
            $MAP.map.skills.push(Array(gridIndex, skillValue));
            console.log("$MAP.map.skill", $MAP.map.skills);
            break;
          default:
            $("#error_message").html(`Gold placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case 'container':
        switch (currentValue) {
          case MAPDICT.EMPTY:
            let containerValue = $("#container_type")[0].value;
            let itemValue = $("#content_type")[0].value;
            let orientationType = $("input[name=orientation]:checked").val();
            if (orientationType === "FIXED") {
              dir = GAME.getSelectedDir();
              dirIndex = dir.toInt();
            } else dirIndex = null;
            $MAP.map.containers.push(Array(gridIndex, containerValue, itemValue, dirIndex));
            break;
          default:
            $("#error_message").html(`Container placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case "shrine":
        switch (currentValue) {
          case MAPDICT.WALL:
            break;
          default:
            $("#error_message").html(`Shrine placement not supported on value: ${currentValue}`);
            return;
        }
        dirs = GA.getDirections(grid, MAPDICT.EMPTY);
        if (dirs.length > 1) {
          alert(`Bad shrine position, posible exits ${dirs.length}`);
          break;
        }
        dirIndex = dirs[0].toInt();
        $MAP.map.shrines.push(Array(gridIndex, dirIndex, $("#shrine_type")[0].value));
        break;
      case "item_shrine":
        switch (currentValue) {
          case MAPDICT.WALL:
            break;
          default:
            $("#error_message").html(`Item Shrine placement not supported on value: ${currentValue}`);
            return;
        }
        dirs = GA.getDirections(grid, MAPDICT.EMPTY);
        if (dirs.length > 1) {
          alert(`Bad shrine position, posible exits ${dirs.length}`);
          break;
        }
        dirIndex = dirs[0].toInt();
        $MAP.map.trainers.push(Array(gridIndex, dirIndex, $("#item_shrine_type")[0].value));
        break;
      case "oracle":
        switch (currentValue) {
          case MAPDICT.WALL:
            break;
          default:
            $("#error_message").html(`Oracle placement not supported on value: ${currentValue}`);
            return;
        }
        dirs = GA.getDirections(grid, MAPDICT.EMPTY);
        if (dirs.length > 1) {
          alert(`Bad oracle position, posible exits ${dirs.length}`);
          break;
        }
        dirIndex = dirs[0].toInt();
        $MAP.map.oracles.push(Array(gridIndex, dirIndex, $("#oracle_type")[0].value));
        break;
      case "trigger":

        if (GAME.stack.previousRadio === radio) {
          GAME.stack.triggerCount++;
        } else GAME.stack.triggerCount = 1;

        if (GAME.stack.triggerCount > 2) {
          GAME.stack.triggerCount = 1;
          GAME.stack.elementBuilt = null;
        }

        switch (GAME.stack.triggerCount) {
          case 1:
            switch (currentValue) {
              case MAPDICT.EMPTY:
                dir = NOWAY;
                break;
              case MAPDICT.WALL:
                dir = GAME.getSelectedDir();
                if (dir.same(NOWAY)) {
                  GAME.stack.triggerCount = 0;
                  $("#error_message").html("Wall trigger decal needs direction");
                  return;
                }
                break;

              default:
                $("#error_message").html(`Trigger decal placement not supported on value: ${currentValue}`);
                return;
            }
            GAME.stack.elementBuilt = Array(
              gridIndex,
              dir.toInt(),
              $("#trigger_decal")[0].value,
              TRIGGER_ACTIONS.indexOf($("#trigger_actions")[0].value)
            );
            $("#error_message").html(`Trigger part 1 OK`);
            break;

          case 2:
            const expectedValue = MAPDICT[$("#trigger_actions")[0].value.split("->")[0]];
            if (currentValue !== expectedValue) {
              $("#error_message").html(`Trigger target doesn't match selected grid value!!`);
              GAME.stack.triggerCount--;
              return;
            }

            //success
            GAME.stack.elementBuilt.push(gridIndex);
            console.log("GAME.stack.elementBuilt", GAME.stack.elementBuilt, "GAME.stack.triggerCount", GAME.stack.triggerCount);
            $MAP.map.triggers.push(GAME.stack.elementBuilt.clone());
            GAME.stack.elementBuilt = null;
            $("#error_message").html(`Trigger part 2 OK`);
            break;
        }

        break;
      case "entity":
        switch (currentValue) {
          case MAPDICT.WALL:
            dir = GAME.getSelectedDir();
            if (dir.same(NOWAY)) {
              $("#error_message").html(`Entity decal placement requires face/direction`);
              return;
            }
            $MAP.map.entities.push(Array(gridIndex, dir.toInt(), $("#entity_type")[0].value));
            console.log($MAP.map.entities);
            break;

          default:
            $("#error_message").html(`Entity decal placement not supported on value: ${currentValue}`);
            return;
        }

        break;
      case "interactor":
        switch (currentValue) {
          case MAPDICT.WALL:
            dir = GAME.getSelectedDir();
            if (dir.same(NOWAY)) {
              $("#error_message").html(`Interactor decal placement requires face/direction`);
              return;
            }
            $MAP.map.interactors.push(Array(gridIndex, dir.toInt(), $("#interactor_type")[0].value));
            console.log($MAP.map.interactors);
            break;

          default:
            $("#error_message").html(`Interactor decal placement not supported on value: ${currentValue}`);
            return;
        }

        break;
      case "object":
        switch (currentValue) {
          case MAPDICT.EMPTY:
            $MAP.map.objects.push(Array(gridIndex, $("#interaction_object_type")[0].value));
            break;
          default:
            $("#error_message").html(`interactive OBJECT placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case "movable":
        switch (currentValue) {
          case MAPDICT.EMPTY:
            $MAP.map.movables.push(Array(gridIndex, $("#movable_type")[0].value));
            break;
          default:
            $("#error_message").html(`MOVABLE placement not supported on value: ${currentValue}`);
            return;
        }
        break;
      case "trap":

        if (GAME.stack.previousRadio === radio) {
          GAME.stack.trapCount++;
        } else GAME.stack.trapCount = 1;

        if (GAME.stack.trapCount > 2) {
          GAME.stack.trapCount = 1;
          GAME.stack.elementBuilt = null;
        }

        switch (GAME.stack.trapCount) {
          case 1:
            switch (currentValue) {
              case MAPDICT.EMPTY:
                dir = NOWAY;
                break;
              case MAPDICT.WALL:
                dir = GAME.getSelectedDir();
                if (dir.same(NOWAY)) {
                  GAME.stack.trapCount = 0;
                  $("#error_message").html("Wall trap decal needs direction");
                  return;
                }
                break;

              default:
                $("#error_message").html(`Trap decal placement not supported on value: ${currentValue}`);
                return;
            }
            GAME.stack.elementBuilt = Array(
              gridIndex,
              dir.toInt(),
              $("#trigger_decal")[0].value,
              TRAP_ACTION_LIST.indexOf($("#trap_type")[0].value),
              $("#trap_entity")[0].value
            );
            $("#error_message").html(`Trap part 1 OK`);
            break;

          case 2:
            const expectedValue = MAPDICT.EMPTY;
            if (currentValue !== expectedValue) {
              $("#error_message").html(`Trap target doesn't match selected grid value!!`);
              GAME.stack.triggerCount--;
              return;
            }

            //success
            GAME.stack.elementBuilt.push(gridIndex);
            //console.log("GAME.stack.elementBuilt", GAME.stack.elementBuilt, "GAME.stack.trapCount", GAME.stack.trapCount);
            $MAP.map.traps.push(GAME.stack.elementBuilt.clone());
            GAME.stack.elementBuilt = null;
            $("#error_message").html(`Trap part 2 OK`);
            break;
        }

        break;
    }

    GAME.stack.previousRadio = radio;
    GAME.render();
  },
  stack: {
    previousRadio: null,
    triggerCount: 0,
    trapCount: 0,
    elementBuilt: null,
  },
  clearGrid(gridIndex) {
    $MAP.combine();
    for (let arrType of $MAP.combined) {
      let iElementToRemove = [];
      for (let [index, element] of arrType.entries()) {
        if (element === gridIndex) {
          iElementToRemove.push(index);
        } else if (element[0] === gridIndex) {
          iElementToRemove.push(index);
        }
      }
      arrType.removeIfIndexInArray(iElementToRemove);
    }
  },
  assertUniqueDecalPosition(gridIndex, dirIndex, array) {
    for (let [index, element] of array.entries()) {
      if (element[0] === gridIndex) {
        if (element[1] === dirIndex) {
          let remove = array.splice(index, 1);
          $("#error_message").html("removed duplicate decal");
          return;
        }
      }
    }
  },
  printMaterialDetails() {
    const material = MATERIAL[$("#materialtype")[0].value];
    const html = `
    <span style="background-color: ${colorVectorToRGB_String(material.ambientColor)}">Ambient: ${colorVectorToHex(material.ambientColor)}</span><br/>
    <span style="background-color: ${colorVectorToRGB_String(material.diffuseColor)}">Diffuse: ${colorVectorToHex(material.diffuseColor)}</span><br/>
    <span style="background-color: ${colorVectorToRGB_String(material.specularColor)}">Specular: ${colorVectorToHex(material.specularColor)}</span><br/>
    <span>Shininess: ${material.shininess}</span><br/>
    `;
    $("#material-details").html(html);
  },
  printLightDetails() {
    const light = LIGHT_COLORS[$("#lighttype")[0].value];
    const html = `
      <span>R: ${light[0]}</span><br/>
      <span>G: ${light[1]}</span><br/>
      <span>B: ${light[2]}</span><br/>
    `;
    $("#light-details").html(html);
    const code = colorVectorToHex(light);
    $("#light-code").html(`<span style="background-color: ${colorVectorToRGB_String(light)}"> Code: ${code}</span>`);
  },
  getSelectedDecal() {
    const radio = $("#selector2 input[name=decalusage]:checked").val();
    switch (radio) {
      case "picture":
        return [$("#picture_decal")[0].value, radio];
      case "crest":
        return [$("#crest_decal")[0].value, radio];
      case "texture":
        return [$("#texture_decal")[0].value, radio];
      default:
        console.error("decalusage error");
        return [null, null];
    }
  },
  getSelectedDir() {
    const radio = $("#selector input[name=directions]:checked").val();
    return eval(radio);
  },
  pacGrid() {
    let corr = $("input[name='corr']")[0].checked;
    ENGINE.resizeBOX("ROOM");
    $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 4);
    let pac = PacGrid.gridToPacGrid($MAP.map);
    let lw = Math.round(ENGINE.INI.GRIDPIX / 12);
    ENGINE.PACGRID.configure(lw, "pacgrid", "#FFF", "#000", "#666");
    ENGINE.PACGRID.draw(pac, corr);
  },
  blockGrid() {
    let corr = $("input[name='corr']")[0].checked;
    ENGINE.resizeBOX("ROOM");

    $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 4);
    ENGINE.BLOCKGRID.configure("pacgrid", "#FFF", "#000");
    ENGINE.BLOCKGRID.draw($MAP.map, corr);
  },
  textureGrid() {
    let corr = $("input[name='corr']")[0].checked;
    ENGINE.resizeBOX("ROOM");
    $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 4);
    ENGINE.TEXTUREGRID.configure("pacgrid", "wall", $("#floortexture")[0].value, $("#walltexture")[0].value);
    ENGINE.TEXTUREGRID.draw($MAP.map, corr);
  },
  tileGrid() {
    let corr = $("input[name='corr']")[0].checked;
    ENGINE.resizeBOX("ROOM");
    $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 4);
    ENGINE.TEXTUREGRID.configure("pacgrid", "wall", 'BackgroundTile', 'WallTile');
    ENGINE.TEXTUREGRID.dynamicAssets = { door: "VerticalWall", trapdoor: "HorizontalWall", blockwall: "BlockWall" };
    ENGINE.TEXTUREGRID.set3D('D3');
    ENGINE.TEXTUREGRID.drawTiles($MAP.map, corr);
  },
  resize() {
    $MAP.width = $("#horizontalGrid").val();
    $MAP.height = $("#verticalGrid").val();
  },
  render() {
    const radio = $("#selector input[name=renderer]:checked").val();
    switch (radio) {
      case "line":
        GAME.pacGrid();
        break;

      case "block":
        GAME.blockGrid();
        break;

      case "texture":
        GAME.textureGrid();
        break;

      case "tile":
        GAME.tileGrid();
        break;
    }
    if ($("input[name='grid']")[0].checked) GRID.grid();
    if ($("input[name='coord']")[0].checked) GRID.paintCoord("coord", $MAP.map, $("input[name='all_coord']")[0].checked);
    GAME.resizeGL_window();
  },
  init() {
    let OK = true;
    if (GAME.started) {
      OK = confirm("Sure?");
    }
    if (OK) {
      $MAP.width = $("#horizontalGrid").val();
      $MAP.height = $("#verticalGrid").val();
      $MAP.map = FREE_MAP.create($MAP.width, $MAP.height, null, MAP_TOOLS.INI.GA_BYTE_SIZE);
      $MAP.init();
      console.log("GAME.init ->map:", $MAP.map);
      GAME.render();
    }
  },
  updateWH() {
    if (isNaN(parseInt($("#verticalGrid").val(), 10))) $("#verticalGrid").val(32);
    if (isNaN(parseInt($("#horizontalGrid").val(), 10))) $("#horizontalGrid").val(24);
    if (isNaN(parseInt($("#gridsize").val(), 10))) $("#gridsize").val(32);
    if ($("#verticalGrid").val() > INI.MAXINT)
      $("#verticalGrid").val(INI.MAXINT);
    if ($("#verticalGrid").val() < INI.MININT)
      $("#verticalGrid").val(INI.MININT);
    if ($("#horizontalGrid").val() > INI.MAXINT)
      $("#horizontalGrid").val(INI.MAXINT);
    if ($("#horizontalGrid").val() < INI.MININT)
      $("#horizontalGrid").val(INI.MININT);
    if ($("#gridsize").val() < INI.MIN_GRID) $("#gridsize").val(INI.MIN_GRID);
    if ($("#gridsize").val() > INI.MAX_GRID) $("#gridsize").val(INI.MAX_GRID);
    if ($("#gridsize").val() % 8 !== 0) {
      $("#gridsize").val(Math.floor($("#gridsize").val() / 8) * 8);
    }
    ENGINE.INI.GRIDPIX = parseInt($("#gridsize").val(), 10);
    //change grids
    if ($("#horizontalGrid").val() * ENGINE.INI.GRIDPIX > INI.SPACE_X) {
      $("#horizontalGrid").val(Math.floor(INI.SPACE_X / ENGINE.INI.GRIDPIX));
    }
    if ($("#verticalGrid").val() * ENGINE.INI.GRIDPIX > INI.SPACE_Y) {
      $("#verticalGrid").val(Math.floor(INI.SPACE_Y / ENGINE.INI.GRIDPIX));
    }

    ENGINE.gameHEIGHT = $("#verticalGrid").val() * ENGINE.INI.GRIDPIX;
    ENGINE.gameWIDTH = $("#horizontalGrid").val() * ENGINE.INI.GRIDPIX;
    $("#ENGINEgameWIDTH").html(ENGINE.gameWIDTH);
    $("#ENGINEgameHEIGHT").html(ENGINE.gameHEIGHT);
    $("#spacex").html(INI.SPACE_X);
    $("#spacey").html(INI.SPACE_Y);
    GAME.resize();
  },
  async copyToClipboard() {
    let copyText = $("#exp")[0];
    console.log("copyText", copyText);
    try {
      await navigator.clipboard.writeText(copyText.value);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  },
  getResolution(texture) {
    return [texture.width, texture.height];
  },
  updateTextures() {
    const wallTexture = TEXTURE[$("#walltexture")[0].value];
    const floorTexture = TEXTURE[$("#floortexture")[0].value];
    const ceilTexture = TEXTURE[$("#ceiltexture")[0].value];
    const textureTexture = TEXTURE[$("#texture_decal")[0].value];
    ENGINE.resizeAndFill(LAYER.wallcanvas, wallTexture, 320);
    ENGINE.resizeAndFill(LAYER.floorcanvas, floorTexture, 320);
    ENGINE.resizeAndFill(LAYER.ceilcanvas, ceilTexture, 320);
    ENGINE.resizeAndFill(LAYER.texturecanvas, textureTexture, INI.CANVAS_RESOLUTION);
    const ids = ["wall_resolution", "floor_resolution", "ceil_resolution"];
    for (const [i, pTexture] of [wallTexture, floorTexture, ceilTexture].entries()) {
      let res = GAME.getResolution(pTexture);
      $(`#${ids[i]}`).html(`width: ${res[0]}, height: ${res[1]}`);
    }
    if (GAME.started) GAME.levelStart(); //
  },
  repaintTextures() {
    GAME.updateTextures();
    if ($("#selector input[name=renderer]:checked").val() === "texture") {
      GAME.texture();
    }
  },
  setup() {
    console.log("GAME SETUP started");
    GAME.updateWH();

    $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 4);
    ENGINE.addBOX("ROOM", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["pacgrid", "wall", "grid", "coord", "click"], null);
    ENGINE.addBOX("WEBGL", 800, 600, ["3d_webgl"], null);
    ENGINE.addBOX("DEBUG", 320, 200, ["debug"], null);

    $("#buttons").append("<input type='button' id='new' value='New'>");
    $("#buttons").append("<input type='button' id='arena' value='Arena'>");
    $("#buttons").append("<input type='button' id='maze' value='Maze'>");
    $("#buttons").append("<input type='button' id='export' value='Export'>");
    $("#buttons").append("<input type='button' id='import' value='Import'>");
    $("#buttons").append("<input type='button' id='copy' value='Copy to Clipboard'>");

    $("#gridsize").on("change", GAME.render);

    /*const TextureList = [];
    for (const prop in TEXTURE) {
      TextureList.push(prop);
    }
    TextureList.sort();*/

    for (const prop of TEXTURE_LIST) {
      $("#walltexture").append(`<option value="${prop}">${prop}</option>`);
      $("#floortexture").append(`<option value="${prop}">${prop}</option>`);
      $("#ceiltexture").append(`<option value="${prop}">${prop}</option>`);
      $("#texture_decal").append(`<option value="${prop}">${prop}</option>`);
    }
    LAYER.wallcanvas = $("#wallcanvas")[0].getContext("2d");
    LAYER.floorcanvas = $("#floorcanvas")[0].getContext("2d");
    LAYER.ceilcanvas = $("#ceilcanvas")[0].getContext("2d");
    LAYER.texturecanvas = $("#texturecanvas")[0].getContext("2d");

    /*
    $("#floortexture").val("RockFloor");
    $("#ceiltexture").val("Pavement");
    $("#texture_decal").val("Forest");
    */

    GAME.updateTextures();
    $("#walltexture").change(GAME.repaintTextures);
    $("#floortexture").change(GAME.repaintTextures);
    $("#ceiltexture").change(GAME.repaintTextures);
    $("#texture_decal").change(GAME.repaintTextures);

    /** pictures */
    for (const pic of DECAL_PAINTINGS) {
      $("#picture_decal").append(`<option value="${pic}">${pic}</option>`);
    }
    $("#picture_decal").change(function () {
      //ENGINE.drawToId("picturecanvas", 0, 0, SPRITE[$("#picture_decal")[0].value]);
      ENGINE.drawToId("picturecanvas", 0, 0, ENGINE.conditionalResize(SPRITE[$("#picture_decal")[0].value], INI.CANVAS_RESOLUTION));
    });
    $("#picture_decal").trigger("change");

    /** crests */
    for (const crest of DECAL_CRESTS) {
      $("#crest_decal").append(`<option value="${crest}">${crest}</option>`);
    }
    $("#crest_decal").change(function () {
      ENGINE.drawToId("crestcanvas", 0, 0, ENGINE.conditionalResize(SPRITE[$("#crest_decal")[0].value], INI.CANVAS_RESOLUTION));
    });
    $("#crest_decal").trigger("change");

    /** lights */
    for (const light of LIGHT_DECALS) {
      $("#light_decal").append(`<option value="${light}">${light}</option>`);
    }
    $("#light_decal").change(function () {
      ENGINE.drawToId("lightcanvas", 0, 0, ENGINE.conditionalResize(SPRITE[$("#light_decal")[0].value], INI.CANVAS_RESOLUTION));
    });
    $("#light_decal").trigger("change");

    for (const light in LIGHT_COLORS) {
      $("#lighttype").append(`<option value="${light}">${light}</option>`);
    }
    GAME.printLightDetails();
    $("#lighttype").change(GAME.printLightDetails);

    for (const material in MATERIAL) {
      if (material !== "VERSION") {
        $("#materialtype").append(`<option value="${material}">${material}</option>`);
      }
    }
    GAME.printMaterialDetails();
    $("#materialtype").change(GAME.printMaterialDetails);

    for (const gateType of GATE_TYPES) {
      $("#gatetype").append(`<option value="${gateType}">${gateType}</option>`);
    }
    ENGINE.drawToId("gatecanvas", 0, 0, ENGINE.resizeCanvas(SPRITE[`DungeonDoor_${$("#gatetype")[0].value}`], INI.CANVAS_RESOLUTION));

    $("#gatetype").change(function () {
      ENGINE.drawToId("gatecanvas", 0, 0, ENGINE.resizeCanvas(SPRITE[`DungeonDoor_${$("#gatetype")[0].value}`], INI.CANVAS_RESOLUTION));
    });

    for (const keyType of KEY_TYPES) {
      $("#key_type").append(`<option value="${keyType}" style="background-color: ${keyType.toLowerCase()}">${keyType}</option>`);
    }
    $("#key_type").change(function () {
      let selectedOption = $("#key_type").val().toLowerCase();

      ENGINE.drawToId("keycanvas", 0, 0, SPRITE[`${selectedOption.capitalize()}Key`]);

      switch (selectedOption) {
        case "emerald":
          selectedOption = "#50C878";
          break;
        case "pearl":
          selectedOption = "WhiteSmoke";
          break;

      }
      $("#key_selection").css("background-color", selectedOption);

    });
    $("#key_type").trigger("change");

    /** monster */
    for (const monsterType in MONSTER_TYPE) {
      $("#monster_type").append(`<option value="${monsterType}">${monsterType} A: ${MONSTER_TYPE[monsterType].attack} H: ${MONSTER_TYPE[monsterType].health} M: ${MONSTER_TYPE[monsterType].magic}</option>`);
    }

    /** scrolls */
    for (const scrollType of SCROLL_TYPE) {
      $("#scroll_type").append(`<option value="${scrollType}">${scrollType}`);
    }
    $("#scroll_type").change(function () {
      ENGINE.drawToId("scrollcanvas", 0, 0, SPRITE[`SCR_${$("#scroll_type")[0].value}`]);
    });
    $("#scroll_type").trigger("change");

    /** poptions */
    /*
    for (const potionType of POTION_TYPES) {
      $("#potion_type").append(`<option value="${potionType}" style="background-color: ${potionType.toLowerCase()}">${potionType}</option>`);
    }
    $("#potion_type").change(function () {
      const selectedOption = $("#potion_type").val();
      $("#potion_selection").css("background-color", selectedOption.toLowerCase());
    });
    $("#potion_type").trigger("change");
    */

    for (const goldType in GOLD_ITEM_TYPE) {
      $("#gold_type").append(`<option value="${goldType}">${goldType}</option>`);
    }
    $("#gold_type").change(function () {
      const sprite = $("#gold_type")[0].value;
      ENGINE.drawToId("gold_canvas", 0, 0, SPRITE[sprite]);
    });
    $("#gold_type").trigger("change");

    //skills
    for (const skillType in SKILL_ITEM_TYPE) {
      $("#skill_type").append(`<option value="${skillType}">${skillType}</option>`);
    }
    $("#skill_type").change(function () {
      const skill_type = $("#skill_type")[0].value;
      ENGINE.drawToId("skillcanvas", 0, 0, ENGINE.conditionalResize(SPRITE[SKILL_ITEM_TYPE[skill_type].inventorySprite], INI.CANVAS_RESOLUTION));
    });
    $("#skill_type").trigger("change");

    //containers
    for (const containerType in CONTAINER_ITEM_TYPE) {
      $("#container_type").append(`<option value="${containerType}">${containerType}</option>`);
    }
    $("#container_type").change(function () {
      const container_type = $("#container_type")[0].value;
      ENGINE.drawToId("containercanvas", 0, 0, ENGINE.conditionalResize(TEXTURE[CONTAINER_ITEM_TYPE[container_type].texture], INI.CANVAS_RESOLUTION));
    });
    $("#container_type").trigger("change");

    //container content
    for (const contentType of CONTAINER_CONTENT_LIST) {
      $("#content_type").append(`<option value="${contentType}">${contentType}</option>`);
    }
    $("#content_type").change(function () {
      const sprite = $("#content_type")[0].value.split(".")[1];
      ENGINE.drawToId("container_item_canvas", 0, 0, SPRITE[sprite]);
    });
    $("#content_type").trigger("change");

    //shrines
    if (SHRINE_TYPE.length > 0) {
      for (const shrineType in SHRINE_TYPE) {
        $("#shrine_type").append(`<option value="${shrineType}">${shrineType}</option>`);
      }
      $("#shrine_type").change(function () {
        const entity = $("#shrine_type")[0].value;
        ENGINE.drawToId("shrinecanvas", 0, 0, ENGINE.conditionalResize(SPRITE[entity], INI.CANVAS_RESOLUTION));
      });
      $("#shrine_type").trigger("change");
    }

    if (INTERACTION_SHRINE.length > 0) {
      for (const item_shrine_type in INTERACTION_SHRINE) {
        $("#item_shrine_type").append(`<option value="${item_shrine_type}">${item_shrine_type}</option>`);
      }
      $("#item_shrine_type").change(function () {
        const entity = $("#item_shrine_type")[0].value;
        ENGINE.drawToId("trainercanvas", 0, 0, ENGINE.conditionalResize(SPRITE[entity], INI.CANVAS_RESOLUTION));
      });
      $("#item_shrine_type").trigger("change");
    }


    if (ORACLE_TYPE.length > 0) {
      for (const oracleType in ORACLE_TYPE) {
        $("#oracle_type").append(`<option value="${oracleType}">${oracleType}</option>`);
      }
      $("#oracle_type").change(function () {
        const entity = $("#oracle_type")[0].value;
        ENGINE.drawToId("oraclecanvas", 0, 0, ENGINE.conditionalResize(SPRITE[entity], INI.CANVAS_RESOLUTION));
      });
      $("#oracle_type").trigger("change");
    }


    //triggers
    for (const triggerDecal of TRIGGER_DECALS) {
      $("#trigger_decal").append(`<option value="${triggerDecal}">${triggerDecal}</option>`);
    }
    $("#trigger_decal").change(function () {
      ENGINE.drawToId("triggercanvas", 0, 0, SPRITE[$("#trigger_decal")[0].value]);
    });
    $("#trigger_decal").trigger("change");

    for (const action of TRIGGER_ACTIONS) {
      $("#trigger_actions").append(`<option value="${action}">${action}</option>`);
    }

    if (INTERACTION_ENTITY.length > 0) {
      for (const entity in INTERACTION_ENTITY) {
        $("#entity_type").append(`<option value="${entity}">${entity}</option>`);
      }
      $("#entity_type").change(function () {
        const entity = $("#entity_type")[0].value;
        ENGINE.drawToId("entitycanvas", 0, 0, ENGINE.conditionalResize(SPRITE[entity], INI.CANVAS_RESOLUTION));
      });
      $("#entity_type").trigger("change");

    }

    //interaction objects
    for (const obj in INTERACTION_OBJECT) {
      $("#interaction_object_type").append(`<option value="${obj}">${obj}</option>`);
    }

    $("#interaction_object_type").change(function () {
      ENGINE.drawToId("object_canvas", 0, 0, SPRITE[INTERACTION_OBJECT[$("#interaction_object_type")[0].value].inventorySprite]);
    });
    $("#interaction_object_type").trigger("change");

    //movables
    for (const obj in MOVABLE_INTERACTION_OBJECT) {
      $("#movable_type").append(`<option value="${obj}">${obj}</option>`);
    }

    $("#movable_type").change(function () {
      ENGINE.drawToId("movable_canvas", 0, 0, SPRITE[MOVABLE_INTERACTION_OBJECT[$("#movable_type")[0].value].inventorySprite]);
    });
    $("#movable_type").trigger("change");

    for (const obj in INTERACTOR) {
      $("#interactor_type").append(`<option value="${obj}">${obj}</option>`);
    }

    //traps
    for (const action of TRAP_ACTION_LIST) {
      $("#trap_type").append(`<option value="${action}">${action}</option>`);
    }
    $("#trap_type").change(() => {
      $("#trap_entity").html("");
      for (const val of TRAP_ACTIONS[$("#trap_type")[0].value]) {
        $("#trap_entity").append(`<option value="${val}">${val}</option>`);
      }
    });
    $("#trap_type").trigger("change");

    //lairs
    if (LAIR_DECALS.length > 0) {
      for (const lair of LAIR_DECALS) {
        $("#lair_type").append(`<option value="${lair}">${lair}</option>`);
      }

      $("#lair_type").change(function () {
        ENGINE.drawToId("laircanvas", 0, 0, ENGINE.conditionalResize(SPRITE[$("#lair_type")[0].value], INI.CANVAS_RESOLUTION));
      });
      $("#lair_type").trigger("change");
    }

    /** */

    $("#randwall").click(GAME.randomTexture.bind(null, TEXTURE_LIST, "#walltexture", "wallcanvas"));
    $("#randfloor").click(GAME.randomTexture.bind(null, TEXTURE_LIST, "#floortexture", "floorcanvas"));
    $("#randceil").click(GAME.randomTexture.bind(null, TEXTURE_LIST, "#ceiltexture", "ceilcanvas"));

    $("#clear_list").click(GAME.clearMonsterList);
    $("#add_monster_list").click(GAME.addToMonsterList);

    $("#randpic").click(GAME.randomPic);
    $("#randcrest").click(GAME.randomCrest);
    $("#randtriggerdecal").click(GAME.randomTrigger);
    $("#randlight").click(GAME.randomLight);
    $("#randcontainer").click(GAME.randomContainer);
    $("#randlair").click(GAME.random_lair);

    /** search inputs */
    const filterOptions = (selectId, searchId) => {
      const filter = $(searchId).val().toLowerCase();

      $(`${selectId} option`).each((_, option) => {
        const text = $(option).text().toLowerCase();
        $(option).toggle(text.includes(filter));
      });
    };

    $('#searchItems').on('keyup', () => filterOptions("#content_type", "#searchItems"));
    $('#searchContainers').on('keyup', () => filterOptions("#container_type", "#searchContainers"));
    $('#searchDecalTexture').on('keyup', () => filterOptions("#texture_decal", "#searchDecalTexture"));
    $('#searchDecals').on('keyup', () => filterOptions("#crest_decal", "#searchDecals"));
    $('#searchPics').on('keyup', () => filterOptions("#picture_decal", "#searchPics"));
    $('#searchEntity').on('keyup', () => filterOptions("#entity_type", "#searchEntity"));
    $('#searchMonster').on('keyup', () => filterOptions("#monster_type", "#searchMonster"));
    $('#searchLights').on('keyup', () => filterOptions("#light_decal", "#searchLights"));
    $('#searchIO').on('keyup', () => filterOptions("#interaction_object_type", "#searchIO"));
    $('#searchOracle').on('keyup', () => filterOptions("#oracle_type", "#searchOracle"));
    $('#searchTrainer').on('keyup', () => filterOptions("#item_shrine_type", "#searchTrainer"));
    $('#searchShrines').on('keyup', () => filterOptions("#shrine_type", "#searchShrines"));
    $('#searchMIE').on('keyup', () => filterOptions("#movable_type", "#searchMIE"));
    $('#searchInteractors').on('keyup', () => filterOptions("#interactor_type", "#searchInteractors"));
    $('#searchWall').on('keyup', () => filterOptions("#walltexture", "#searchWall"));
    $('#searchFloor').on('keyup', () => filterOptions("#floortexture", "#searchFloor"));
    $('#searchCeil').on('keyup', () => filterOptions("#ceiltexture", "#searchCeil"));

    /** shortcuts */

    $(document).keydown((event) => {
      switch (event.key) {
        case 'F8':
          GAME.randomPic();
          break;
        case 'F7':
          GAME.random_lair();
          break;
        default:
          break;
      }
    });

  },
  clearMonsterList() {
    $MAP.map.monsterList = [];
    $("#monster_list").val("");
  },
  addToMonsterList() {
    const monster = $("#monster_type")[0].value;
    $MAP.map.monsterList.push(monster);
    $("#monster_list").val($MAP.map.monsterList.join(","));
  },
  randomTexture(TextureList, id, canvas) {
    const texture = TextureList.chooseRandom();
    $(id).val(texture).change();
    ENGINE.drawToId(canvas, 0, 0, ENGINE.conditionalResize(TEXTURE[$(id)[0].value], 320));
  },
  random_lair() {
    const lair = LAIR_DECALS.chooseRandom();
    $("#lair_type").val(lair).change();
  },
  randomContainer() {
    const searchContainer = $('#searchContainers').val().toLowerCase();
    const filtered_containers = CONTAINER_LIST.filter(cont => cont.toLowerCase().includes(searchContainer));
    const container = filtered_containers.chooseRandom();
    if (!container) return;
    $("#container_type").val(container).change();
  },
  randomLight() {
    const search_light = $('#searchLights').val().toLowerCase();
    const filtered_light_decals = LIGHT_DECALS.filter(decal => decal.toLowerCase().includes(search_light));
    const pic = filtered_light_decals.chooseRandom();
    if (!pic) return;
    $("#light_decal").val(pic).change();
    ENGINE.drawToId("lightcanvas", 0, 0, ENGINE.conditionalResize(SPRITE[$("#light_decal")[0].value], INI.CANVAS_RESOLUTION));
  },
  randomPic() {
    const search_pic = $('#searchPics').val().toLowerCase();
    const filtered_pics = DECAL_PAINTINGS.filter(decal => decal.toLowerCase().includes(search_pic));
    const pic = filtered_pics.chooseRandom();
    if (!pic) return;
    $("#picture_decal").val(pic).change();
    ENGINE.drawToId("picturecanvas", 0, 0, ENGINE.conditionalResize(SPRITE[$("#picture_decal")[0].value], INI.CANVAS_RESOLUTION));
  },
  randomCrest() {
    const search_crest = $('#searchDecals').val().toLowerCase();
    const filtered_crests = DECAL_CRESTS.filter(crest => crest.toLowerCase().includes(search_crest));
    const pic = filtered_crests.chooseRandom();
    if (!pic) return;
    $("#crest_decal").val(pic).change();
    ENGINE.drawToId("crestcanvas", 0, 0, ENGINE.conditionalResize(SPRITE[$("#crest_decal")[0].value], INI.CANVAS_RESOLUTION));
  },
  randomTrigger() {
    const pic = TRIGGER_DECALS.chooseRandom();
    $("#trigger_decal").val(pic).change();
    ENGINE.drawToId("triggercanvas", 0, 0, SPRITE[$("#trigger_decal")[0].value]);
  },
  texture() {
    GAME.textureGrid();
  },
  export() {
    let rle = $MAP.map.GA.exportMap();
    let Export = { width: $MAP.width, height: $MAP.height, map: rle };
    let RoomID = $("#roomid")[0].value;
    let RoomName = $("#roomname")[0].value;
    let MaxSpawned = $("#max_spawned")[0].value || -1;
    let KillCountdown = $("#kill_countdown")[0].value || -1;
    let SpawnDelay = $("#spawn_delay")[0].value || -1;
    let SG = parseInt($("#checkpoint")[0].value, 10);

    let roomExport = `${RoomID} : {
name: "${RoomName}",
sg: ${SG},
maxSpawned: ${MaxSpawned},
killCountdown: ${KillCountdown},
spawnDelay: ${SpawnDelay},
data: '${JSON.stringify(Export)}',
wall: "${$("#walltexture")[0].value}",
floor: "${$("#floortexture")[0].value}",
ceil: "${$("#ceiltexture")[0].value}",\n`;
    for (let desc of $MAP.properties) {
      if ($MAP.map[desc].length > 0) {
        roomExport += `${desc}: '${JSON.stringify($MAP.map[desc])}',\n`;
      }
    }
    for (let list of $MAP.lists) {
      if ($MAP.map[list].length > 0) {
        roomExport += `${list}: '${JSON.stringify($MAP.map[list])}',\n`;
      }
    }
    roomExport += `}`;
    $("#exp").val(roomExport);
  },
  import() {
    $MAP.map.textureMap = null;
    const ImportText = $("#exp").val();
    console.info("ImportText", ImportText);
    const Import = JSON.parse(ImportText.extractGroup(/data:\s\'(.*)\'/));
    const roomId = ImportText.extractGroup(/^\s*(\w*)/);
    $("#roomid").val(roomId);
    const roomName = ImportText.extractGroup(new RegExp(`name:\\s"(.*)"`));
    $("#roomname").val(roomName);

    const SG = ImportText.extractGroup(/sg:\s(\d{1})/);
    $('#checkpoint').val(SG).trigger('change');

    const MaxSpawned = ImportText.extractGroup(/maxSpawned:\s(\d*)/);
    $("#max_spawned").val(MaxSpawned);
    const KillCountdown = ImportText.extractGroup(/killCountdown:\s(\d*)/);
    $("#kill_countdown").val(KillCountdown);
    const SpawnDelay = ImportText.extractGroup(/spawnDelay:\s(\d*)/);
    $("#spawn_delay").val(SpawnDelay);

    const Textures = ["wall", "floor", "ceil"];
    for (const prop of Textures) {
      const pattern = new RegExp(`${prop}:\\s"(.*)"`);
      $(`#${prop}texture`).val(ImportText.extractGroup(pattern));
    }

    $MAP.map = FREE_MAP.import(Import, MAP_TOOLS.INI.GA_BYTE_SIZE);
    $MAP.init();
    WebGL.init_required_IAM($MAP.map, HERO);
    console.log("$MAP.map", $MAP.map);
    GAME.updateTextures();  //restarts the level

    for (const prop of [...$MAP.properties, ...$MAP.lists]) {
      const pattern = new RegExp(`${prop}:\\s'(.*)'`);
      let value = ImportText.extractGroup(pattern);
      $MAP.map[prop] = JSON.parse(value) || [];
    }

    $("#monster_list").val($MAP.map.monsterList.join(","));

    console.log("map", $MAP.map);
    $MAP.width = Import.width;
    $MAP.height = Import.height;
    $("#horizontalGrid").val(Import.width);
    $("#verticalGrid").val(Import.height);
    $("#horizontalGrid").trigger("change");
    $("#verticalGrid").trigger("change");
    GAME.updateWH();
    ENGINE.resizeBOX("ROOM");
    GAME.resizeGL_window();
    $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 4);

    GAME.render();
  },
  resizeGL_window() {
    $("#WEBGL_canvas_0").css("top", `${ENGINE.gameHEIGHT + 16}px`)
  },
};

$(function () {
  PRG.INIT();
  PRG.setup();
  ENGINE.LOAD.preload();
});
