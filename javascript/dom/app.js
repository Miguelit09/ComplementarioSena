let win = window;
let dom = document;

const $header = document.querySelector('header')
const $div = document.querySelector('div') // Selecciona el primero
const $divs = document.querySelectorAll('div') // Selecciona todos los divs


console.log(win);
console.log(dom);
console.log(dom.doctype);
console.log(dom.head);
console.log(dom.title);
console.log(dom.body);
console.log(dom.styleSheets);
console.log(dom.header);

console.log($header);

console.log($div)
console.log($divs)

$divs.forEach((div, a) => {
  div.textContent = `a ${a + 1}`

});



const arregloA = [...$divs]

arregloA.map((a) => {
  console.log(a)
})


