function suma(a, b, ...c) { // ...c recibe un arreglo que contiene todos los argumentos restantes que lleguen adicionales
  let resultado = a+b
  c.forEach(function (n) {
    resultado += n
  })
  return resultado
}

console.log(suma(5, 5))

console.log(suma(5, 5, 5, 5, 5, 5))


const arreglo1 = [1,5,9,12]
const arreglo2 = [1, 5, 9, 12]

console.log(arreglo1, arreglo2)

console.log(arreglo1.concat(arreglo2))

const abc = [...arreglo1, ...arreglo2]

console.log(abc)