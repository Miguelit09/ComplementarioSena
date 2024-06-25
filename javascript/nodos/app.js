"use strict"

const $root = document.querySelector("#root");
const $fragmento = document.createDocumentFragment();


const lista = [
  {
    id: 1,
    titulo: "Titulo 1",
    texto: "algo por aquí",
    src: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 2,
    titulo: "Titulo 2",
    texto: "otro por aquí",
    src: "https://picsum.photos/200/300?grayscale"
  },
  {
    id: 3,
    titulo: "Titulo 3",
    texto: "nada por aquí",
    src: "https://picsum.photos/200/300/?blur"
  },
  {
    id: 4,
    titulo: "Titulo 4",
    texto: "nada por allá",
    src: "https://picsum.photos/200/300/?blur=2"
  }
]

lista.forEach((elemento) => {
  const $div = document.createElement('div');
  const $h1 = document.createElement('h1');
  const $p = document.createElement('p');
  const $img = document.createElement('img');

  $h1.textContent = elemento.titulo;
  $img.setAttribute("src", elemento.src);
  $p.textContent = elemento.texto;
  $div.appendChild($h1);
  $div.appendChild($img);
  $div.appendChild($p);

  $div.classList.add("card");
  $fragmento.appendChild($div);

})

$root.appendChild($fragmento);

