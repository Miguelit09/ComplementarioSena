import { getAsignacionesIds, getUserById } from "./modulo.js";


let id = parseInt(prompt("Ingrese el ID"));

console.log(getUserById(id, function (error, user) {
  try {
    if (!error) {
      // console.log(`Usuario encontrado: ${user.nombre} con el ID ${user.id}, asignaciones ${user.asignaciones}`)
      getAsignacionesIds(user.asignaciones, function (error, asignacionesNombres) {
        
      })
    } else {
      throw new Error(`Usuario no encontrado para el ID: ${id}`)
    }
  } catch (error) {
    console.error(`${error}`)
  }
}))