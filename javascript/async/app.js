import { usuarios, posts } from "./modulo.js"

const $section = document.querySelector('section')






usuarios()
  .then((lista) => {
    lista.map((user) => {
      console.log(user)
      const $div = document.createElement('div');
      const $a = document.createElement('a');
      const $username = document.createElement('p');
      const $email = document.createElement('p');
      const $address = document.createElement('p');
      const $phone = document.createElement('p');
      const $website = document.createElement('a');
      
      $div.classList.add('item');
      $a.textContent = user.name;
      $a.setAttribute("href", "#");
      $a.classList.add('enlace');
      $div.appendChild($a);
      $username.textContent = `Username: ${user.username}`;
      $div.appendChild($username);
      $email.textContent = `Email: ${user.email}`;
      $div.appendChild($email);
      $address.textContent = `Address: ${user.address.street},  ${user.address.city}`;
      $div.appendChild($address);
      $phone.textContent = `Phone: ${user.phone}`;
      $div.appendChild($phone);
      $website.textContent = `Website: ${user.website}`;
      $website.setAttribute("href", "#");
      $website.classList.add('enlace', 'enlace-website');
      $div.appendChild($website);
      $section.appendChild($div);
      // posts(user.id)
      // .then((posts) => {

      //   })
    })
  })


// async function cuadrado(value) {
//   if (typeof value !== "number") {
//     return Promise.reject(`Cuidado, el valor ${value} no es un número`)
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value
//       })
//     }, 2000)
//   } )
// }


// cuadrado(2)
//   .then((obj) => {
//     console.log(`Promesa con valor ${obj.value} y con resultado ${obj.result}`);
//   })