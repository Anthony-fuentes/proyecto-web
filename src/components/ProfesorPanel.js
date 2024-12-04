import React from 'react';

function ProfesorPanel({ usuario, tutorias, gestionarTutoria }) {
  return (
    <div>
      <h2>Panel del Profesor</h2>
      <p>Bienvenido, {usuario.nombre}</p>
      <h3>Solicitudes de Tutorías</h3>
      <ul>
        {tutorias.map((tutoria) => (
          <li key={tutoria.id}>
            <p>Estudiante: {tutoria.estudiante}</p> {/* Nombre del estudiante */}
            <p>Materia: {tutoria.materia}</p> {/* Materia de la tutoría */}
            <p>Fecha: {tutoria.fecha}</p>
            <p>Hora: {tutoria.hora}</p>
            <button onClick={() => gestionarTutoria(tutoria.id, true)}>
              Aceptar
            </button>
            <button onClick={() => gestionarTutoria(tutoria.id, false)}>
              Rechazar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfesorPanel;
