

export class Matematicas {

  constructor(a, b) {
    this.a = a
    this.b = b
  }

  sumar = () => {
    try {
      if (!isNaN(this.a) && !isNaN(this.b)) {
        return this.a + this.b
      } else {
        throw new Error("Por favor, ingrese solo números")
      }
    } catch (error) {
      return `Se produjo el siguiente error: ${error}`
    }
    
  }

  restar() { 
    try {
      if (!isNaN(this.a) && !isNaN(this.b)) {
        return this.a - this.b
      } else {
        throw new Error("Por favor, ingrese solo números")
      }
    } catch (error) {
      return `Se produjo el siguiente error: ${error}`
    }
  }
  multiplicar() { 
    try {
      if (!isNaN(this.a) && !isNaN(this.b)) {
        return this.a * this.b;
      } else {
        throw new Error("Por favor, ingrese solo números")
      }
    } catch (error) {
      return `Se produjo el siguiente error: ${error}`
    }
    
  }
  dividir() {
    try {
      if (this.b === 0) {
        throw new Error("No se puede dividir entre cero")
      } else if (!isNaN(this.a) && !isNaN(this.b)){
        return this.a / this.b;
      }else {
        throw new Error("Por favor, ingrese solo números")
      }
    } catch (error) {
      return `Se produjo el siguiente error: ${error}`
    }
    
  }
  
}