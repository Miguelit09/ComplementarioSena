import { search, asignaciones } from "./modulo.js";

const $form = document.querySelector("#search");
const $input = document.querySelector("#nombre");

const buscador = (event) => {
    event.preventDefault();
  
    search($input.value).then((data) => {
      if (data.length > 0 && data[0].asignaciones) {
        asignaciones(data[0].asignaciones, (error, arreglo) => {
          if (error) {
            console.error("Error fetching assignments:", error);
          } else {
            console.log(arreglo);
          }
        });
      } else {
        console.log("No se encontraron asignaciones para el usuario.");
      }
    });
};



$form.addEventListener("submit", buscador);


