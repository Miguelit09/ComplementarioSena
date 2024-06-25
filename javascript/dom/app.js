let win = window;
let dom = document;

const $header = document.querySelector('header');
const $div = document.querySelector('div'); // Selecciona el primero
const $divs = document.querySelectorAll('div'); // Selecciona todos los divs
const $main = dom.querySelector('main');
const $div_item = dom.querySelectorAll('main > div.item')
// const $item = dom.getElementsByClassName("item") -- Es la forma vieja
const $item = dom.querySelectorAll(".item") // -- Es la forma nueva
// const $idItem = dom.getElementsById("item") -- Es la forma vieja
const $idItem = dom.querySelector("#item") // -- Es la forma nueva

const $img = dom.querySelector('img');

const $form = dom.querySelector('form');

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

// $divs.forEach((div, a) => {
//   div.textContent = `a ${a + 1}`

// });



const arregloA = [...$divs]

arregloA.map((a) => {
  console.log(a)
})

console.log($main.childNodes)
console.log($main.childElementCount)

console.log($div_item)

console.log($item)

console.log($idItem)

console.log($main.firstElementChild)
console.log($main.lastElementChild)
console.log($main.parentElement)
console.log($main.previousElementSibling)
console.log($main.nextElementSibling)

$idItem.textContent = "Otra palabra";

$idItem.innerHTML = "<p><b>Otra</b> palabra</p>"
console.log($img)

$img.setAttribute("src", "https://picsum.photos/id/237/200/300")
$img.setAttribute("alt", "Una imagen aleatoria")

// console.log($img.classList)
// $img.classList.add("block")
// $img.classList.remove("block")
// console.log($img.classList)

// $img.classList.toggle("block")  // si tiene la clase, se la quita. Si no la tiene, se la pone
// console.log($img.classList)

$img.classList.add("block", "box")

$form.firstElementChild.setAttribute("type", "file")
$form.removeAttribute("action")
$form.setAttribute("enctype", "multipart/form-data")