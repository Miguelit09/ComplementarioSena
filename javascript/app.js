import { Matematicas } from "./modulo.js";

let a = parseFloat(prompt("Ingrese el primer número: "));
let b = parseFloat(prompt("Ingrese el segundo número: "));

const obj = new Matematicas(a, b);
let laSuma = obj.sumar();
let laResta = obj.restar();
let laMultiplicacion = obj.multiplicar()
let laDivision = obj.dividir()

console.log(laSuma)
console.log(laResta)
console.log(laMultiplicacion)
console.log(laDivision)