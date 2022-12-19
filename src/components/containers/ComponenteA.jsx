import React from "react";
import ComponenteB from "../pure/ComponenteB";
import { Contact } from "../../models/Contact.class";

function ComponenteA() {
  const contacto = new Contact("Pepe", "Peposo", "pepe@gmail.com", true);
  return (
    <div>
      <h1>Ejercicio 1,2 y 3</h1>
      <ComponenteB contact={contacto} />
    </div>
  );
}

export default ComponenteA;
