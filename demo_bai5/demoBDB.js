function tinhGiaiThua(n){
    if(n < 2) return 1;
    return n*tinhGiaiThua(n-1);
}

function dicho(){
 console.log("đi chợ")
}

function naucom(hamChuyenVao){
    // Callback Function với tham số là 1 hàm
    setTimeout(hamChuyenVao,1000);
    console.log("nấu cơm")
}

function ancom(){
    naucom(dicho);
    console.log("ăn cơm")
}