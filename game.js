console.log("git test");

let gamestate = {
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
QuestNPC(Thoaime,gamestate)