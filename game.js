const gamestate = {
    mxd :30,
    money :100,
    Day :1,
    TangQua : true,
    Thoidiem : ["Sang","Toi"],
    maxday : 4,
    thatvong :0,
    kotumua : 0,
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
let Lop2 = {
    name : "Cậu Bé Lớp 2",
    place : "Trường Học",
    thiencam : 65,
    yeuthich : [""],
    nguoithan : false
}
let GiaoVien = {
    name : "Giáo Viên",
    place : "Trường Học",
    thiencam : 75,
    yeuthich : [""],
    nguoithan : false
}
let BaTam = {
    name : "Bà Tám",
    place : "Quảng Trường",
    thiencam : 20,
    yeuthich : [""],
    nguoithan : false
}
let ChiNam = {
    name : "Chị Năm",
    place : "Quảng Trường",
    thiencam : 50,
    yeuthich : [""],
    nguoithan : false
}
let ThiTruong = {
    name : "Thị Trưởng",
    place : "Quảng Trường",
    yeuthich : [""],
    nguoithan : false
}
let CoUt = {
    name : "Cô Út",
    place : "Chợ",
    thiencam : 70,
    yeuthich : [""],
    nguoithan : true
}
let HoaThanh = {
    name : "Bác Hoa Thánh",
    place : "Chợ",
    thiencam : 50,
    yeuthich : [""],
    nguoithan : false
}
let Bacba = {
    name : "Bác Ba Bán Rau",
    place : "Chợ",
    thiencam : 40,
    yeuthich : [""],
    nguoithan : false
}
let NhanNan = {
    name : "Nhận Nan",
    place : "Nhà",
    thiencam : 40,
    yeuthich : [""],
    nguoithan : false
}
let NhoNghia = {
    name : "Nhớ Nghĩa",
    place : "Nhà",
    thiencam : 80,
    yeuthich : [""],
    nguoithan : true
}
let Mom = {
    name : "Mẹ",
    place : "Nhà",
    thiencam : 95,
    yeuthich : [""],
    nguoithan : true
}
const NPClist = [Mom,NhoNghia,NhanNan,Bacba,HoaThanh,CoUt,ThiTruong,ChiNam,BaTam,GiaoVien,Lop2]
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
const map = [
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
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
const house = {
    img: new Image(),
    x: 3 * TILE,
    y: 10 * TILE,
    w: 112,
    h: 80
}; 
const house2 = {
    img: new Image(),
    x: 23 * TILE,
    y: 10 * TILE,
    w: 112,
    h: 80
}; 
const house3 = {
    img: new Image(),
    x: 9 * TILE,
    y: -1 * TILE,
    w: 112,
    h: 80
}; 
const BTT = {
    img: new Image(),
    x: 22 * TILE,
    y: -1 * TILE,
    w: 112,
    h: 80
}; 
house3.img.src = "sprites/Nha3.png"
house2.img.src = "sprites/Nha2.png"
house.img.src = "sprites/Nha.png"
BTT.img.src = "sprites/BTT.png"
house.img.onload = () => {
    drawScene();
};
house2.img.onload = () => {
    drawScene();
};
house3.img.onload = () => {
    drawScene();
};
BTT.img.onload = () => {
    drawScene();
};
function drawMap() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {

      const tileId = map[y][x];
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
function drawScene() {
    drawMap();
    ctx.drawImage(house.img,house.x,house.y);
    ctx.drawImage(house2.img,house2.x,house2.y);
    ctx.drawImage(house3.img,house3.x,house3.y);
    ctx.drawImage(BTT.img,BTT.x,BTT.y);
}
for (let key in tiles) {
  tiles[key].onload = () => {
    loaded++;
    if (loaded === totalTiles) {
      drawScene();
    }
  };
}
const BASE_WIDTH = map[0].length * TILE;  
const BASE_HEIGHT = map.length * TILE;  
canvas.width = BASE_WIDTH;
canvas.height = BASE_HEIGHT;
ctx.imageSmoothingEnabled = false;

function resizeCanvas() {
  const scale = Math.min(
    window.innerWidth / BASE_WIDTH,
    window.innerHeight / BASE_HEIGHT
  );

  canvas.width = BASE_WIDTH;
  canvas.height = BASE_HEIGHT;

  canvas.style.width = Math.floor(BASE_WIDTH * scale) + "px";
  canvas.style.height = Math.floor(BASE_HEIGHT * scale) + "px";

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.imageSmoothingEnabled = false;

  drawScene();
}


window.addEventListener("resize", resizeCanvas);
resizeCanvas();
