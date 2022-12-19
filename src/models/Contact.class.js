export class Contact {
  Nombre = "";
  Apellido = "";
  Email = "";
  Conectado = true;

  constructor(nombre, apellido, email, conectado) {
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Email = email;
    this.Conectado = conectado;
  }
}
