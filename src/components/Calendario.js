// src/components/Calendario.js
const Calendario = ({ tutorias, mostrarSeccion }) => {
  if (!Array.isArray(tutorias)) {
    return <p>No se encontraron tutorías.</p>;
  }

  return (
    <section id="calendario">
      <h2>Calendario de Tutorías</h2>
      <ul>
        {tutorias.map((tutoria, index) => (
          <li key={index}>
            Materia: {tutoria.materia}, Profesor: {tutoria.profesor}, Fecha: {tutoria.fecha}, Hora: {tutoria.hora}
          </li>
        ))}
      </ul>
      
    </section>
  );
};

export default Calendario;
