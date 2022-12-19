let regex = /^[A-Z0-9+]+@[a-z0-9.]+$/;
function checkEmail(email){
    if(regex.test(email)){
        return true;
    } return false;
}
let e1 = "@gmail.com";
let e2 = "ab@gmail.com";
let e3 = "@#adff.com";
let e4 = "ABCX123@gmail.com";

function checkSubmit() {
    let value = document.getElementById("email").value;

    if(checkEmail(value)){
        alert("Email đúng rồi ");
    }else{
        alert("Email sai rồi ");
    }
    

}