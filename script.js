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
    'Lê Đào Mỹ Anh',
    'Nguyễn Ngọc Anh',
    'Phạm Đức Anh',
    'Phan Hàn Anh',
    'Nguyễn Gia Bảo',
    'Lưu Bảo Châu',
    'Nguyễn Minh Châu',
    'Phạm Bảo Châu',
    'Lê Hoàng Vân Chi',
    'Phạm Tiến Dũng',
    'Nguyễn Khánh Duy',
    'Nguyễn Nhật Duy',
    'Phạm Hải Đăng',
    'Nguyễn Bảo Hân',
    'Trần Nguyễn Gia Hân',
    'Mai Khắc Hiếu',
    'Nguyễn Khánh Huyền',
    'Nguyễn Ngọc Khánh',
    'Lê Phạm Bảo Lam',
    'Đặng Phương Linh',
    'Nguyễn Ngô Ngọc Linh',
    'Nguyễn Phương Linh',
    'Nguyễn Phương Linh',
    'Bùi Thanh Mai',
    'Hoàng Bình Minh',
    'Lê Đức Minh',
    'Đỗ Minh Nghĩa',
    'Nguyễn Yến Ngọc',
    'Nguyễn Vũ Tuệ Nhi',
    'Phạm Duy Phước',
    'Dương Xuân Quý',
    'Bùi Thanh Thúy',
    'Nguyễn Ngọc Anh Thư',
    'Phạm Quốc Minh Quân',
    'Phạm Anh Thư',
    'Lê Thùy Trang',
    'Bùi Bảo Trung',
    'Phan Doãn Thành Trung',
    'Vũ Minh Tú',
    'Võ Thùy Vân',
    'Nguyễn Hải Yến',
];



shuffle(map);
// now myArray works as Stack with pop()


$(document).ready(function () {
    $(".desk button").on("click", function () {
        if (!isHacked) {
            this.innerHTML = map.pop();
            this.disabled = true;
            return;
        }
    });
});
