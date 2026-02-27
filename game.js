document.getElementById("startgame").onclick = function(){
    console.log("window.innerWidth:",window.innerWidth, "window.innerHeight:",window.innerHeight)
    document.getElementById("startgame").style.visibility = "hidden"
    document.getElementById("gametitle").style.visibility = "hidden"
let gamestate = {
    mxd :30,
    money :100,
    Day :1,
    TangQua : true,
    Thoidiem : ["Sang","Toi"],
    maxday : 4,
    thatvong :0,
    kotumua : 0,
    map : 1,
    loading : false,
    loadingtime : 0,
}
const Thoaime = {
    1 : {
        Sang:[
            "thoại day 1 sáng"
        ],
        Toi: [
            "thoai day 1 tối"
        ]
    },
    2 : {
        Sang:[
            "thoại day 2 sáng"
        ],
        Tangqua:[
            "thoại day 2 đc tặng"
        ],
        Toi: [
            "thoai day 2 tối"
        ]
    },
    3 : {
        Sang:[
            "thoại day 3 sáng"
        ],
        Tangqua:[
            "thoại day 3 đc tặng"
        ],
        Toi: [
            "thoai day 3 tối"
        ]
    },
    4 : {
        Sang:[
            "thoại day 4 sáng"
        ],
        Tangqua:[
            "thoại day 4 đc tặng"
        ],
        Toi: [
            "thoai day 4 tối"
        ]
    },
}
function QuestNPC(npcdata,state){
    const td = state.Thoidiem[0]
    const daydata = npcdata[state.Day]
    if (!daydata) {
        console.log("ko có data")
        return
    }
    if (state.TangQua && daydata.Tangqua) {
        console.log(daydata.Tangqua[0])
        return
    }
    if (!daydata[td]) {
        console.log("ko có thoại cho ",td)
        return
    }
    console.log(daydata[td][0])
}
let fullinventory = false
let xongnv = false
let SachBT = {
    ten : "Sách Bài Tấp",
    soluong : 0,
    Tumua : true
}
let Dochoi = {
    ten : "Đồ Chơi",
    soluong : 0,
    Tumua : true
}
let Nuocrauma = {
    ten : "Nước Rau Má",
    soluong : 0,
    Tumua : true
}
let Bimbim = {
    ten : "Bim Bim",
    soluong : 0,
    Tumua : true
}
let Xienban = {
    ten : "Xiên Bẩn",
    soluong : 0,
    Tumua : true
}
let NuocMia = {
    ten : "Nước Mía",
    soluong : 0,
    Tumua : true
}
let Thit = {
    ten : "Thịt",
    soluong : 0,
    Tumua : true
}
let NemChua = {
    ten : "Nem Chua",
    soluong : 0,
    Tumua : true
}
let Raumuong = {
    ten : "Rau Muống",
    soluong : 0,
    Tumua : true
}
const Item = [NemChua,NuocMia,Thit,Raumuong,Xienban,Bimbim,Nuocrauma,Dochoi,SachBT]
function makeitem(typeitem){
    if (typeitem.soluong >= 1) {
        fullinventory = true
    } else {
        fullinventory = false
    }
     if (fullinventory === false) {
            typeitem.soluong = 1
            if (xongnv === true) {
                typeitem.Tumua = false
                xongnv = false
            }
        }
  
}
let BaTam = {
    id : 9,
    name : "Bà Tám",
    place : 3,
    age : 45,
    likeability: 20,
    yeuthich : ["Anything"],
}
let ChiNam = {
    id: 8,
    name : 3,
    place : "Quảng Trường",
    age: 23,
    likeability : 50,
    yeuthich : ["Bim bim"],
}
let ThiTruong = {
    id: 7,
    name : 3,
    place : "Quảng Trường",
    age : 38,
    yeuthich : ["Nothing"],
}
let CoUt = {
    id : 6,
    name : "Cô Út",
    place : 2,
    age : 26,
    likeability : 70,
    yeuthich : ["Rau muống"],
}
let HoaThanh = {
    id : 5,
    name : "Bác Hoa Thánh",
    place : 2,
    age : 47,
    likeability : 50,
    yeuthich : ["Nước rau má"],
}
let Bacba = {
    id : 4,
    name : "Bác Ba Bán Rau",
    place : 2,
    age : 28,
    likeability : 40,
    yeuthich : ["Thịt"],
}
let NhanNan = {
    id : 3,
    name : "Nhận Nan",
    place : 1,
    age : 21,
    likeability : 40,
    yeuthich : ["Nước mía"],
}
let NhoNghia = {
    id : 2,
    name : "Nhớ Nghĩa",
    place : 1,
    age : 20,
    likeability : 80,
    yeuthich : ["Nem chua"],
}
let Mom = {
    id : 1,
    name : "Mẹ",
    place : 1,
    age : 40,
    likeability : 95,
    yeuthich : ["Anything"],
}
const NPClist = [Mom,NhoNghia,NhanNan,Bacba,HoaThanh,CoUt,ThiTruong,ChiNam,BaTam]
function startday() {
    console.log("Ngày:",gamestate.Day)
    console.log("MXĐ:",gamestate.mxd)
    console.log("Tiền:",gamestate.money)
}
function endday() {
    if (gamestate.Day >= gamestate.maxday) {
        endgame()
    } else {
        gamestate.Day = gamestate.Day + 1
    }
}
const dialogueText = document.getElementById("dialogue-text")
const nextBtn = document.getElementById("next-btn")
const dialogueBox = document.getElementById("dialogue-box")

QuestNPC(Thoaime, gamestate)

if (nextBtn) {
  nextBtn.onclick = function () {
    QuestNPC(Thoaime, gamestate)
  }
}
const canvas = document.getElementById("game_canvas");
const ctx = canvas.getContext("2d");

const TILE = 16;
const tiles = {
  0: new Image(), // grass
  1: new Image(), // path
  2: new Image(), // path_grass
  3: new Image(), // path up
  4: new Image(), // path down
  5: new Image(), // path left
  6: new Image(), // path right
  7: new Image(), // grass path1
  8: new Image(), // grass path2
  9: new Image(), // grass path3
  10: new Image(), //grass path4
  11: new Image(), //grass path5
  12: new Image(), //grass path6
  13: new Image(), //grass path7
  14: new Image(), //grass path8
  15: new Image(), //grass1
  16: new Image(), //grass2
  17: new Image(), //grass3
  18: new Image(), //grass4
  19: new Image(), //path1
  20: new Image(), //path2
  21: new Image(), //path3
  22: new Image(), //path4
};
tiles[0].src = "tiles/grass.png";
tiles[1].src = "tiles/path.png";
tiles[2].src = "tiles/path_grass.png";
tiles[3].src = "tiles/path_up.png";
tiles[4].src = "tiles/path_down.png";
tiles[5].src = "tiles/path_left.png";
tiles[6].src = "tiles/path_right.png";
tiles[7].src = "tiles/grass_path1.png";
tiles[8].src = "tiles/grass_path2.png";
tiles[9].src = "tiles/grass_path3.png";
tiles[10].src = "tiles/grass_path4.png";
tiles[11].src = "tiles/grass_path5.png";
tiles[12].src = "tiles/grass_path6.png";
tiles[13].src = "tiles/grass_path7.png";
tiles[14].src = "tiles/grass_path8.png";
tiles[15].src = "tiles/grass1.png"
tiles[16].src = "tiles/grass2.png"
tiles[17].src = "tiles/grass3.png"
tiles[18].src = "tiles/grass4.png"
tiles[19].src = "tiles/path1.png"
tiles[20].src = "tiles/path2.png"
tiles[21].src = "tiles/path3.png"
tiles[22].src = "tiles/path4.png"
const carFrames = [
  new Image(),
  new Image()
];
carFrames[0].src = "sprites/Car1.png";
carFrames[1].src = "sprites/Car2.png";
const npcPanelImg = new Image();
npcPanelImg.src = "sprites/thong_tin.png";
const map1 = [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,22,4,4,4,4,4,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,6,1,1,1,1,1,5,0,0,0,0,0,0,8,1,1,1,1,1,9,0,0,0],
   [0,0,0,0,0,0,0,0,0,6,1,1,1,1,1,5,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
   [0,0,0,0,0,0,0,0,0,21,18,1,1,1,17,20,0,0,0,0,0,0,11,1,1,1,1,1,10,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [4,4,4,4,4,4,4,4,4,4,15,1,1,1,16,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   [3,3,3,3,18,1,1,1,17,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,18,1,1,1,17,3,3,3],
   [0,0,0,0,6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5,0,0,0],
   [0,0,0,22,15,1,1,1,16,19,0,0,0,0,0,0,0,0,0,0,0,0,0,22,15,1,1,1,16,19,0,0],
   [0,0,0,6,1,1,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,1,1,5,0,0],
   [0,0,0,6,1,1,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,1,1,5,0,0],
   [0,0,0,21,3,3,3,3,3,20,0,0,0,0,0,0,0,0,0,0,0,0,0,21,3,3,3,3,3,20,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
const map2 = [
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
   [6,1,1,1,16,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,15,1,1,1,5],
   [15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
   [1,1,1,1,17,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,18,1,1,1,5],
   [18,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
   [6,1,1,1,16,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,15,1,1,1,5],
   [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,16],
   [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   [6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   [6,1,1,1,17,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,18,1,1,1,1],
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,17],
   [6,1,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,5],
]
const map3 = [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let spritesReady = false
let tileReady = false;
let spriteLoaded = 0;
let totalSprites = 0;
const ZOOM = 2;
function createSprite(src, tileX, tileY, w, h) {
    const img = new Image();
    totalSprites++;

  img.onload = () => {
    spriteLoaded++;
    if (spriteLoaded === totalSprites) {
        spritesReady = true
    }
  };

  img.src = src;

  return {
    img,
    x: tileX * TILE,
    y: tileY * TILE,
    w,
    h
    };
}
const TreeImage = new Image();
TreeImage.src = "sprites/Tree.png";
const Tree1Image = new Image();
Tree1Image.src = "sprites/Tree1.png";
const BushImage = new Image();
BushImage.src = "sprites/Bush.png";
const Treesize = {
    w: 48,
    h: 64
}
const Tree1size = {
    w: 32,
    h: 48
}
const Bushsize = {
    w: 32,
    h: 16
}
const TreePositions = [
  { x: 2, y: 3 },
  { x: 6, y: 3 },
  { x: 15, y: 2 },
  { x: 0, y: 10 },
  { x: 9, y: 10 },
  { x: 18, y: 10 },
  { x: 29, y: 11 },
  { x: 0, y: 10 },
];
const Tree1Positions = [
  { x: 1, y: 2 },
  { x: 5, y: 1 },
  { x: 19, y: 2 },
  { x: 10, y: 15 },
  { x: 29, y: 4 },
  { x: 12, y: 13 },
  { x: 15, y: 11 },
  { x: 22, y: 15 },
];
const BushPositions = [
  { x: 0, y: 6 },
  { x: 12, y: 12 },
  { x: 19, y: 6 },
  { x: 21, y: 12 },
  { x: 17, y: 15 },
]
function drawmulti(typepos,typeimg,typesize) {
  for (const pos of typepos) {
    ctx.drawImage(
      typeimg,
      pos.x * TILE,
      pos.y * TILE,
      typesize.w,
      typesize.h
    );
  }
}
const sprites1 = [
  createSprite("sprites/Nha.png",3,11,112,80),
  createSprite("sprites/Nha2.png",23,11,112,80),
  createSprite("sprites/Nha3.png",9,0,112,80),
  createSprite("sprites/BTT.png",22,0,112,80),
];
function drawSprites(sprites) {
  for (const s of sprites) {
    ctx.drawImage(s.img, s.x, s.y, s.w, s.h);
  }
}
function drawMap(currentmap) {
  for (let y = 0; y < currentmap.length; y++) {
    for (let x = 0; x < currentmap[y].length; x++) {

      const tileId = currentmap[y][x];
      const img = tiles[tileId];

      ctx.drawImage(
        img,
        x * TILE,
        y * TILE,
        TILE,
        TILE
      );
    }
  }
}
let loaded = 0;
const totalTiles = Object.keys(tiles).length;
function drawScene1() {
    drawMap(map1)
    drawSprites(sprites1)
    drawmulti(Tree1Positions,Tree1Image,Tree1size)
    drawmulti(TreePositions,TreeImage,Treesize)
    drawmulti(BushPositions,BushImage,Bushsize)
}
function drawScene2() {
    drawMap(map2)
}
function drawScene3() {
    drawMap(map3)
}
for (let key in tiles) {
  tiles[key].onload = () => {
    loaded++;
    if (loaded === totalTiles) {
      tileReady = true
    }
  };
}
const BASE_WIDTH = map1[0].length * TILE;  
const BASE_HEIGHT = map1.length * TILE;  
canvas.width = BASE_WIDTH;
canvas.height = BASE_HEIGHT;
ctx.imageSmoothingEnabled = false;
let SCALE = 1;
function resizeCanvas() {
  SCALE = Math.floor(
    Math.min(
      window.innerWidth / BASE_WIDTH,
      window.innerHeight / BASE_HEIGHT
    )
  );
  SCALE = Math.max(1, SCALE);

  canvas.width = BASE_WIDTH * SCALE;
  canvas.height = BASE_HEIGHT * SCALE;

  ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
  ctx.imageSmoothingEnabled = false;
}
let isTransitioning = false;
let transitionTime = 0;
const TRANSITION_DURATION = 30;
function changeMap(newMap) {
  if (gamestate.loading) return;

  gamestate.loading = true;
  gamestate.loadingtime = 0;

  setTimeout(() => {
    gamestate.map = newMap;
  }, 1500);
}
function drawLoadingDecor() {
  // viền ngoài
  ctx.strokeStyle = "#9e714c";
  ctx.lineWidth = 2;
  ctx.strokeRect(8, 8, BASE_WIDTH - 16, BASE_HEIGHT - 16);

  // thanh trên
  ctx.fillStyle = "#2d7927";
  ctx.fillRect(16, 16, BASE_WIDTH - 32, 24);

  // thanh dưới
  ctx.fillRect(
    16,
    BASE_HEIGHT - 40,
    BASE_WIDTH - 32,
    24
  );
}
function drawFakeProgress() {
  const barWidth = BASE_WIDTH - 80;
  const barHeight = 10;
  const x = 40;
  const y = BASE_HEIGHT / 2 + 24;

  // nền thanh
  ctx.fillStyle = "#333";
  ctx.fillRect(x, y, barWidth, barHeight);

  // tiến trình giả
  const progress =
    Math.min(gamestate.loadingtime / 1500, 1);

  ctx.fillStyle = "#56c856";
  ctx.fillRect(
    x,
    y,
    barWidth * progress,
    barHeight
  );
}
function drawLoading(dt) {
  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, BASE_WIDTH, BASE_HEIGHT);
  drawLoadingDecor();
  drawFakeProgress();

  gamestate.loadingtime += dt;

  const frame =
    Math.floor(gamestate.loadingtime / 200) % carFrames.length;

  ctx.drawImage(
    carFrames[frame],
    CAR_X,
    CAR_Y
  );

  ctx.fillStyle = "white";
  ctx.font = "16px PixelFont";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const dots = ".".repeat(
    Math.floor(gamestate.loadingtime / 400) % 4
  );

  ctx.fillText(
    "Đang di chuyển" + dots,
    BASE_WIDTH / 2,
    BASE_HEIGHT / 2
  );

  if (gamestate.loadingtime >= 1500) {
    gamestate.loading = false;
    gamestate.loadingtime = 0;
  }
}
let lastTime = 0;

function gameLoop(time) {
  const dt = time - lastTime;
  lastTime = time;

  ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
  ctx.clearRect(0, 0, BASE_WIDTH, BASE_HEIGHT);

  if (gamestate.loading) {
    drawLoading(dt);
  } else {
    if (gamestate.map === 1) drawScene1();
    if (gamestate.map === 2) drawScene2();
    if (gamestate.map === 3) drawScene3();
  }
  

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
const MAX_MAP = 3;

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "p" && !gamestate.loading) {
    let nextMap = gamestate.map + 1;
    if (nextMap > MAX_MAP) nextMap = 1;
    changeMap(nextMap);
  }
});
function redrawMap() {
  if (gamestate.map === 1) drawScene1();
  if (gamestate.map === 2) drawScene2();
}
const CAR_WIDTH = 96;
const CAR_HEIGHT = 48;

const CAR_X = BASE_WIDTH - CAR_WIDTH - 16;  // góc phải
const CAR_Y = BASE_HEIGHT - CAR_HEIGHT - 16; // góc dưới
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
requestAnimationFrame(gameLoop);
const btt_btn = document.createElement("button")
btt_btn.id = "btt-btn"
btt_btn.style.position = "absolute"
btt_btn.style.left = (window.innerWidth-(Math.floor(BASE_WIDTH * SCALE)))/2 + 368*SCALE + "px"
btt_btn.style.top = (window.innerHeight-(Math.floor(BASE_HEIGHT * SCALE)))/2 + 16*SCALE + "px"
btt_btn.style.width = 80*SCALE + "px"
btt_btn.style.height = 50*SCALE + "px"
btt_btn.style.backgroundColor = "transparent"
btt_btn.style.cursor = "pointer"
btt_btn.style.border = "none"
btt_btn.style.fontFamily = "PixelFont"
if (gamestate.map === 2){
    btt_btn.style.visibility = "hidden"
}
document.body.appendChild(btt_btn)


window.addEventListener("resize", resizeCanvas);
resizeCanvas();
window.addEventListener("resize", function(){
    document.getElementById("btt-btn").style.position = "absolute"
    document.getElementById("btt-btn").style.left = (window.innerWidth-(Math.floor(BASE_WIDTH * SCALE)))/2 + 368*SCALE + "px"
    document.getElementById("btt-btn").style.top = (window.innerHeight-(Math.floor(BASE_HEIGHT * SCALE)))/2 + 16*SCALE + "px"
    document.getElementById("btt-btn").style.width = 80*SCALE + "px"
    document.getElementById("btt-btn").style.height = 50*SCALE + "px"
})
const mapchange = new Proxy(gamestate, {
    set(target, prop, value) {
        if (prop === "map") {
            if (value === 1) {
                drawScene1();
                document.getElementById("btt-btn").style.visibility = "visible";
            } else if (value === 2) {
                drawScene2();
                document.getElementById("btt-btn").style.visibility = "hidden";
            }
        };
    }
});
document.getElementById("btt-btn").addEventListener("mouseenter", function() {
    console.log("hovered")
document.addEventListener("keydown", function(event) {
    if (event.key == "e") {
        document.addEventListener("keyup", function(event) {
            if (event.key == "e") {
                window.clearTimeout(timeoutId);
            }
        })
        const timeoutId = window.setTimeout(function() {
            document.getElementById("btt").style.visibility = "visible";
            document.getElementById("btt-btn").style.visibility = "hidden";
        }, 1000)
    }
}
)
}
);
} // cuối của onclick startgame
// nhớ đóng onclick startgame đúng chỗ !!!
document.getElementById("settings").onclick = function(){
    if (document.getElementById("settings-menu").style.visibility === "hidden") {
        document.getElementById("settings-menu").style.visibility = "visible";
        document.getElementById("achievements-menu").style.visibility = "hidden";
    } else {
        document.getElementById("settings-menu").style.visibility = "hidden";
    }
}
document.getElementById("achievements").onclick = function(){
    if (document.getElementById("achievements-menu").style.visibility === "hidden") {
        document.getElementById("achievements-menu").style.visibility = "visible";
        document.getElementById("settings-menu").style.visibility = "hidden";
    } else {
        document.getElementById("achievements-menu").style.visibility = "hidden";
    }
}
document.getElementById("close-settings").onclick = function(){
    document.getElementById("settings-menu").style.visibility = "hidden";
}
document.getElementById("close-btt").onclick = function(){
    document.getElementById("btt").style.visibility = "hidden";
    document.getElementById("btt-btn").style.visibility = "visible";
}
console.log("code hoạt động")
console.log(1/Math.random())