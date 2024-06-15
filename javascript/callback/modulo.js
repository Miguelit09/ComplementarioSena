import { users, asignaciones} from "./datos.js";


export function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`Usuario no encontrado para el id ${id}`)
  } 
  return callback(null, user)
}

export function getAsignacionesIds(ids, callback) {
  console.log(ids)
  const respuesta = asignaciones.filter((x, indice, ids) => {
    console.log(x, indice, ids)
  })
}
