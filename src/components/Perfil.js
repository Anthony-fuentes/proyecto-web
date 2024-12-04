import React from 'react';

function Perfil({ usuario, mostrarSeccion }) {
  return (
    <section id="perfil">
      <h2>Perfil del Estudiante</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Correo Electrónico: {usuario.email}</p>
      <button onClick={() => mostrarSeccion('main')}>Volver</button>
    </section>
  );
}

export default Perfil;
