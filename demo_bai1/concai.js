class Con extends Cha{
    m1(){
        console.log(this.name +' đã có '+ this.sodo);
        return 123;
    }
}

let cha = new Cha("contrai ta", "sổ đỏ");
cha.m1();

let conTra = new Con("contrai ta", "sổ đỏ");
conTra.m1();
alert(conTra.m1());
