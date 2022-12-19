// Sử dung Class khai báo - hay dùng, nên dùng
class User {
    // name;
    // password;
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    showInfo(){
        return "tên là: "+this.name+"   mật khẩu "+this.password;
    }

    showInfo2(){
        return "Tên là: ${this.name} Mật khẩu: ${this.password}";
    }
}
let user = new User("sang", "123456");


// Sử dung function khai báo
function User1(){
    // thuôc tính
    this.name = "";
    this.password = "";

    // phương thưc
     this.showInfo = function(){
        return "tên là: "+this.name+"   mật khẩu "+this.password;
     }
}

let user1 = new User1();
user1.name = "sang";
user1.password = "654321";