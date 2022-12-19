import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/Contact.class";

function ComponenteB({ contact }) {
  return (
    <div>
      <h2>{contact.Nombre}</h2>
      <h2>{contact.Apellido}</h2>
      <h3>{contact.Email}</h3>
      <p>
        {contact.Conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </p>
    </div>
  );
}

ComponenteB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponenteB;
