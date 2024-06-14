console.log(Date())
console.clear()
let fecha = new Date()
console.log(fecha.getDate())

console.log(fecha.getDay())
console.log(fecha.getMonth())

let nacimiento = new Date("2004, 8, 9")
console.log(nacimiento)
console.log(fecha - nacimiento)

let edadEnMilisegundos = fecha - nacimiento;

// Convertir milisegundos a años aproximados
let edadEnAnios = Math.floor(edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25));

console.log(edadEnAnios)

console.log((1000 * 60 * 60 * 24 * 365.25))