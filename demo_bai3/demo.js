let sum = function(a, b){
    if(b == undefined){
        return a + 3;
    }

    return a + b;
}

let sum2 = (a, b) => {
    return a + b;
}

let sum3 = a => {
    a += 2;
    return a;
}

let sum4 = a => a + 3;

let sum5 = (a, b = "null", c = "default") => a +"; "+ b + "; "+ c;
// param = . là để thay cho if ở hàm sum
document.getElementById("id1").innerHTML = "<h1>xyz</h1>";



let mang1 = ["An","Minh","Nam"];
let mang2 = ["Thái","Lực","Ý"];
let mangAll = [...mang1,...mang2];
console.log(mangAll);

let mang2chieu = [...[mang1],...[mang2]];
console.log(mang2chieu);

let mang3 = [];

for (const i of mangAll) {
    console.log(i)
}

mangAll.forEach(
    arr => {
        if(arr.length == 3) mang3.push(arr);
    }       
)

let set = new Set;
set.add("An");
set.add("Minh");
set.add("Nam");
set.add("An");

let map = new Map;
map.set(1,"An");
map.set(2,"Minh");
map.set(3,"Nam");
map.set("1","Khang");
