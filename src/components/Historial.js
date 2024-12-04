import React from 'react';

const Historial = ({ tutorias, mostrarSeccion }) => {
  // Comprobamos si tutorias es un array
  if (!Array.isArray(tutorias)) {
    return <p>No hay tutorías disponibles.</p>;
  }

  return (
    <section id="historial">
      <h2>Historial de Tutorías</h2>
      <ul>
        {tutorias.length === 0 ? (
          <li>No tienes tutorías agendadas.</li>
        ) : (
          tutorias.map((tutoria, index) => (
            <li key={index}>
              Materia: {tutoria.materia}, Profesor: {tutoria.profesor}, Fecha: {tutoria.fecha}, Hora: {tutoria.hora}
            </li>
          ))
        )}
      </ul>
     
    </section>
  );
};

export default Historial;
