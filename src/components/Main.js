import React from 'react';

function Main({ usuario, tutorias }) {
  return (
    <div>
      <h2>Panel del Estudiante</h2>
      <p>Bienvenido, {usuario.nombre}</p>
      <ul>
        {tutorias.map((tutoria) => (
          <li key={tutoria.id}>
            <p>Profesor: {tutoria.profesor}</p>
            <p>Fecha: {tutoria.fecha}</p>
            <p>Hora: {tutoria.hora}</p>
            <p>
              Estado:{' '}
              {tutoria.aceptada === undefined
                ? 'Pendiente'
                : tutoria.aceptada
                ? 'Aceptada'
                : 'Rechazada'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
