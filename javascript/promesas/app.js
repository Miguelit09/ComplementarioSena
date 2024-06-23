import { getAsignacionesIdsPromise, getUserByIdPromise } from "./modulo.js";


let id = parseInt(prompt("Ingrese el ID"));

getUserByIdPromise(id)
  .then((user) => {
    console.log(`Nombre de usuario: ${user.nombre}`)
    return getAsignacionesIdsPromise(user.asignaciones, user.nombre)
  })
  .then((obj) => {
    if (obj.userAsignaciones.length > 0) {
      console.log(`Asignaciones:`);
      obj.userAsignaciones.forEach(asignacion => {
        console.log(asignacion.nombre);
      });
    } else {
      console.log("Este aprendiz no tiene asignaciones")
    }
  })
  .catch((e) => {
    console.log(e)
  })











// function cuadradoPromesa(value) {
//   if (typeof value !== "number") {
//     return Promise.reject("Cuidado, el valor que ingresó no es un número")
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value: value,
//         result: value * value
//       })
//     }, 3000)
//   })
// }

// cuadradoPromesa(2)
//   .then((obj) => {
//     console.log(`Promesa con valor ${obj.value} y con resultado ${obj.result}`);
//     return cuadradoPromesa(obj.result)
//   })
//   .then((obj) => {
//     console.log(`Promesa con valor ${obj.value} y con resultado ${obj.result}`);
//     return cuadradoPromesa(obj.result)
//   })
//   .then((obj) => {
//     console.log(`Promesa con valor ${obj.value} y con resultado ${obj.result}`);
//   })
//   .catch((e) => {
//     console.log(e)
//   }) 

