if (true) {
    // compound statement //combining multi-statement into a single statement // BLOCK
    var a = 10;
    console.log(a);
} //



{
    var b = 20; //console in global & can be access outside
    let c = 30; // console in block scope & hoisted + undefined & can't be access outside
    const d = 40; // console in block scope & hoisted + undefined & can't be access outside
    console.log(b); //can be access inside
    console.log(c); //can be access inside
    console.log(c); //can be access inside
}
console.log(b); //can be access outside=global
console.log(c); //can't be access outside
console.log(d); //can't be access outside



var e = 50; //console in global
let f = 60;
const g = 70; //
{
    var e = 55;
    let f = 65;
    const g = 75;
    console.log(e); //shadowing in global
    console.log(f); //console in block scope + shadowing
    console.log(g); //shadowing in block
}
console.log(e); //shadowing in global
console.log(f); //can be access script/outside scope
console.log(g); // not shadowing in global



const h = 80; //
function h1() {
    const h = 85;
    console.log(h);
}
h1();
console.log(h); // shadowing



let g = 90; {
    var g = 95; // illegal shadowing
}
let g = 90; {
    let g = 95; // legal shadowing
}
var g = 90; {
    let g = 95; // legal shadowing
}
let g = 90; //
function g1() {
    var g = 95; // legal shadowing because it is not interfering with let
}
const g = 90; {
    const g = 95; // legal shadowing
}



const i = 100; {
    const i = 105; // lexical scope
    {
        const i = 107; // lexical scope
        console.log(i);
    }
    console.log(i);
}
console.log(i);