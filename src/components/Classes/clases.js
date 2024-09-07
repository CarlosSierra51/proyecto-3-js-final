// clases.js
export class Persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
  }
  
  export class Contacto extends Persona {
    constructor(nombre, apellido, telefono, email) {
      super(nombre, apellido);
      this.telefono = telefono;
      this.email = email;
    }
  }