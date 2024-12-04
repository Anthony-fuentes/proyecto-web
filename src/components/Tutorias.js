import React, { useState } from 'react';

const Agendar = ({ agendarTutoria, mostrarSeccion }) => {
  const [materia, setMateria] = useState('');
  const [profesor, setProfesor] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [tutorias, setTutorias] = useState([]); // Estado inicial como un array vacío

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTutoria = {
      id: Date.now(),  // Un identificador único para la tutoría
      materia,
      profesor,
      fecha,
      hora,
      aceptada: null,  // El estado de aceptación de la tutoría (pendiente por defecto)
    };
    agendarTutoria(nuevaTutoria);  // Agrega la nueva tutoría al estado global
    mostrarSeccion('main');  // Regresa a la vista principal
  };

  return (
    <section id="agendar">
      <h2>Agendar Tutoría</h2>
      <form onSubmit={handleSubmit}>
        <label>Materia:</label>
        <input type="text" value={materia} onChange={(e) => setMateria(e.target.value)} required />
        <br />
        <label>Profesor:</label>
        <input type="text" value={profesor} onChange={(e) => setProfesor(e.target.value)} required />
        <br />
        <label>Fecha:</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
        <br />
        <label>Hora:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
        <br />
        <button type="submit">Agendar Tutoría</button>
      </form>
      <button onClick={() => mostrarSeccion('main')}>Volver</button>
    </section>
  );
};

export default Agendar;
