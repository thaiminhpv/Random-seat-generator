function shuffle(arra1) {
    var i = arra1.length;
    var temp;
    var index;
    while (i > 0) {
        index = Math.floor(Math.random() * i);
        i--;
        temp = arra1[i];
        arra1[i] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function revealAll() {
    $(".desk button:not([disabled])").trigger("click");
}

function moveSeat() {

    /*
    dùng JQuery để Target được button:
        "họ hàng" với Quốc Anh (dùng child, parent các thứ)
        "Thuý Quỳnh"
    rồi đảo nội dụng 2 button này (just by innerHTML)
    */
    //chuyển chỗ Thuý Quỳnh ra cạnh Quốc Anh
    //    var thangNay = $("button:contains(Quốc Anh)");
    //    var coGai = $("button:contains(Thuý Quỳnh)")[0];
    //    var thangBenCanh;
    //    //nhớ hanlde trường hợp Quốc Anh ngồi vô bàn lẻ
    //    if (thangNay.parent().children()[0] == thangNay[0]) {
    //        //Quốc Anh bên trái
    //        thangBenCanh = thangNay.parent().children()[1];//bên phải
    //    } else {
    //        //Quốc Anh bên phải
    //        thangBenCanh = thangNay.parent().children()[0];
    //    }
    //    
    //    //đổi chỗ 2 đứa
    //    var contentTemp = thangBenCanh.innerHTML;
    //    thangBenCanh.innerHTML = coGai.innerHTML;
    //    coGai.innerHTML = contentTemp;
}

var isHacked = false;
var isButtonPressed = false;
var map = [
    'Diệu Anh',
    'Hoàng Anh',
    'Tuấn Bò',
    'Quốc Anh',
    'Quỳnh Anh',
    'Vi Anh',
    'N.Minh Châu',
    'T.Minh Châu',
    'Mai Chi',
    'Minh Đức',
    'Hương Giang',
    'Ngân Hà',
    'Hoàng Hạnh',
    'Thái Hoàng',
    'Xuân Hoàng',
    'Quang Hợp',
    'Văn Hùng',
    'Quang Huy',
    'Thu Hương',
    'Nguyên Khôi',
    'Trần Kiên',
    'Ái Linh',
    'Khánh Linh',
    'Mai Ly',
    'Hải Minh',
    'Thu Minh',
    'Hà My',
    'Trà My',
    'Minh Ngọc',
    'Phương Ngọc',
    'L.Hà Phương',
    'H Hà Phương',
    'Trần Quang',
    'Diễm Quỳnh',
    'Thuý Quỳnh',
    'Phương Thảo',
    'Thịnh Trần',
    'Minh Thư',
    'Anh Tú',
    'Mạnh Tuấn',
    'Quốc Tuấn',
    'Hồ Uyên',
    'Hoàng Việt',
    'Hà Vy',
    'Hường Vy'
];



shuffle(map);
// now myArray works as Stack with pop()


$(document).ready(function () {
    $("#teacher-table").on("click", function () {
        isHacked = true;
        if (isButtonPressed) {
            return;
        }
        console.log("evil mode enabled");

        //remove from list
        var hacklist = [
            'Thịnh Trần', 'Khánh Linh',
            'Hoàng Việt', 'Quốc Tuấn',
            'Hương Giang', 'Quỳnh Anh',
            'Vi Anh', 'Hồ Uyên',
            'Anh Tú', 'Thái Hoàng',
            'Trà My', 'T.Minh Châu'
        ];
        for (var a in hacklist) {
            console.log("removed " + map.splice(map.indexOf(hacklist[a]), 1) + " from list");
        }
        isButtonPressed = true;
    });

    $(".desk button").on("click", function () {
        if (!isHacked) {
            this.innerHTML = map.pop();
            this.disabled = true;
            return;
        } else {
            var thisTable = $(this).parent();
            if (thisTable.hasClass("thinh_khanhlinh")) {
                console.log("thinh_khanhlinh table clicked!");
                if (this == thisTable.children(":first")[0]) {
                    this.innerHTML = 'Thịnh Trần';
                } else {
                    this.innerHTML = 'Khánh Linh';
                }
            } else if (thisTable.hasClass("hoangviet_quoctuan")) {
                console.log("hoangviet_quoctuan table clicked!");
                if (this == thisTable.children(":first")[0]) {
                    this.innerHTML = 'Hoàng Việt';
                } else {
                    this.innerHTML = 'Quốc Tuấn';
                }
            } else if (thisTable.hasClass("huonggiang_quynhanh")) {
                console.log("huonggiang_quynhanh table clicked!");
                if (this == thisTable.children(":first")[0]) {
                    this.innerHTML = 'Hương Giang';
                } else {
                    this.innerHTML = 'Quỳnh Anh';
                }
            } else if (thisTable.hasClass("vianh_huongvy")) {
                console.log("vianh_huongvy table clicked!");
                if (this == thisTable.children(":first")[0]) {
                    this.innerHTML = 'Vi Anh';
                } else {
                    this.innerHTML = 'Hồ Uyên';
                }
            } else if (thisTable.hasClass("anhtu_thaihoang")) {
                console.log("anhtu_thaihoang table clicked!");
                if (this == thisTable.children(":first")[0]) {
                    this.innerHTML = 'Anh Tú';
                } else {
                    this.innerHTML = 'Thái Hoàng';
                }
            } else if (thisTable.hasClass("tramy_minhchau")) {
                console.log("tramy_minhchau table clicked!");
                if (this == thisTable.children(":first")[0]) {
                    this.innerHTML = 'Trà My';
                } else {
                    this.innerHTML = 'T.Minh Châu';
                }
            } else {
                this.innerHTML = map.pop();
            }
            this.disabled = true;
            return;
        }
    });
});