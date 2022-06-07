// console.time('time taken')
// console.log('hey oman this is java script');
// console.log(34*4);
// console.table({oman:'name' , marks:34});
// console.timeEnd('time taken')

// variables in js
// var let const
// var oman='Human';
// console.log(oman)
// var x;
// x=23;
// console.log(x)

// // strings 
// let x=`"this" is a string`;
// let y=`oman is good`

// // string methods
// console.log(x.slice(0,5));
// console.log(x.substring(2,5));

// // for substr need length
// console.log(y.substr(2,5));
// console.log(y.replace('good','better'));
// console.log (x.concat(' ' ,y));

// console.log(x.split(" "));

// // string methods never change the original string
// console.log(x);
// console.log(y);


// Arrays

let cars= new Array("Volvo","BMW","Maruti","TATA");
const bus= ["mini","52_seater", "normal"];
let num =[2,5,54,34,534,6,23];
/*
// array methods
console.log(num.join('+'));
console.log(cars.toString());

console.log(num.pop());    // it changes the original array
console.log(num)

console.log(cars.push("Audi")) // it changes the original array
console.log(cars)

console.log(num.shift()) // it changes the original array
console.log(num.unshift(10))
console.log(num)

console.log(bus.splice(1,0,"Travelor","mini")) // it changes the original array
console.log(bus.splice(2,1,"big-mini"))
console.log(bus)

console.log(cars.sort())   // it changes the original array
console.log(cars)

console.log(num.sort(function(a,b){return a-b}))  // it changes the original array
console.log(num.sort(function(a,b){return b-a}))
console.log(num)


let fav=cars.slice(0,3) // it creates a new array without changing original one
console.log(fav)
console.log(cars)

console.log(cars.concat(bus))  // doesn't change the array
console.log(cars)
*/


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// let a= window;
// a=window.alert(denger)
// a=innerHeight
// console.log(a)

// events

let element=document.getElementById('btn');
console.log(element)

element.addEventListener("click",function(e){
    alert('submitted successfully!');
    document.getElementById("box").style.visibility='visible';
});

let x=document.getElementById("box")
.addEventListener("mouseover", function (e){
    let vari;
    vari=e.target
    console.log(vari)
    document.getElementById("box").style.visibility='hidden';
});

document.getElementById('body').addEventListener("mousemove",changeColor);

function changeColor(e){
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetx}, ${e.offsetX},)`;
}