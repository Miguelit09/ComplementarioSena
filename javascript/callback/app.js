import { getAsignacionesIds, getUserById } from "./modulo.js";


let id = parseInt(prompt("Ingrese el ID"));

getUserById(id, function (error, user) {
  try {
    if (!error) {
      if (user.instructor){
        console.log(`${user.nombre} es instructor y no tiene asignaciones.`);
      } else {
        getAsignacionesIds(user.asignaciones, function (error, asignacionesNombres) {
          if (!error) {
            console.log(`Asignaciones de ${user.nombre}:`);
            asignacionesNombres.forEach(asignacion => {
              console.log(asignacion.nombre);
            });
          }
        });
      }
    } else {
      throw new Error(`Usuario no encontrado para el ID: ${id}`);
    }
  } catch (error) {
    console.error(`${error}`);
  }
});


