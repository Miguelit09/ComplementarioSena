import { users, asignaciones } from "../callback/datos.js";


// export function getUserById(id, callback) {
//   const user = users.find(function (user) {
//     return user.id === id;
//   });
//   if (!user) {
//     return callback(`Usuario no encontrado para el id ${id}`)
//   } 
//   return callback(null, user)
// }

// export function getAsignacionesIds(ids, callback) {
//   const asignacionesUsuario = asignaciones.filter(asignacion => ids.includes(asignacion.id));
//   callback(null, asignacionesUsuario);
// }




export function getUserByIdPromise(id) {
  return new Promise((correcto, error) => { /* correcto equivale a resolve, error equivale a reject */ 
    setTimeout(() => {
      users.find(function (user) {
        if (user.id === id) correcto(user)
      })
      error("El id ingresado no pertenece a ningún usuario.")
    }, 3000)
  })
}

export function getAsignacionesIdsPromise(ids, userName) {
  if (typeof ids === "undefined") {
    return Promise.reject("El usuario es instructor, no tiene asignaciones.")
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userAsignaciones: asignaciones.filter(asignacion => ids.includes(asignacion.id)),
      })
    }, 3000)
  })
}