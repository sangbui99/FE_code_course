async function onCrushBirthDayAsync(suckhoeCuaManh){
    if(suckhoeCuaManh) return 2;
    throw new Error("Anh om roi");
}

async function doSt(){
try{
    let result = await onCrushBirthDayAsync(true);
    console.log(`Crush co ${result} cai banh `);
}
catch(err){
    console.log(err);
}
finally{
    console.log("Party");
}
}
doSt();
