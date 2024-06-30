import { search, asignaciones, crearUsuario } from "./modulo.js";

const $form = document.querySelector("#search");
const $cards = document.querySelector("#cards");
const $input = document.querySelector("#nombre");
const $fragment = document.createDocumentFragment();



const buscador = (event) => {
    event.preventDefault();
  
  search($input.value).then((data) => {
    // Limpiar cards
      $cards.innerHTML = '';
      if (data.length > 0 && data[0].asignaciones) {
        asignaciones(data[0].asignaciones, (error, arregloAsignaciones) => {
          if (error) {
            console.error("Error fetching assignments:", error);
          } else {
            arregloAsignaciones.forEach(asignacion => {
              const $div = document.createElement("div");
              const $p = document.createElement("p");
              $p.classList.add("card")
              $p.textContent = asignacion.value[0].nombre
              $div.appendChild($p)
              $fragment.appendChild($div)
            });
            $cards.appendChild($fragment)
          }
        });
      } else {
        console.log("No se encontraron asignaciones para el usuario.");
      }
    });
};

const validar = (event) => {
  if ($input.value.length > 3) {
    buscador(event)
  }
}


$form.addEventListener("submit", buscador);
$input.addEventListener("keyup", validar)

