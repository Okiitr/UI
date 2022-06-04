console.log('this is a practice to get all the links as a string ')

// let link = document.links;

// console.log(link)

// for( let i=0; i<link.length; i++ ){
//     console.log(link[i].toString())
// }


let element= document.getElementById('main');
console.log(element.className)
console.log(element.tagName)
console.log(element.childNodes)
 console.log(element.children)
 console.log(element.parentNode)
 console.log(element.nextElementSibling)
console.log(element)
console.log(element.childElementCount)
console.log(element.nodeName)
console.log(element.nodeType)
let nav = element.nextElementSibling;
console.log(nav.children[1].childNodes)

 
let a=document.querySelector(".row");
console.log(a)
console.log(a.firstElementChild.nextElementSibling.children[1])



// creating an element through java script

let link = document.createElement('h5');
link.className='first';
link.id='heading';
// link.innerHTML="hello i am java"
let txt= document.createTextNode('hello i am through textnode');
link.appendChild(txt)
link.style.color='red'
link.setAttribute('name', 'java')
console.log(link)

let header = document.getElementById('header');
header.appendChild(link)
console.log(header.lastElementChild);
