import React, { useState } from 'react';

function Agendar({ agendarTutoria, mostrarSeccion, usuarios }) {
  const [profesor, setProfesor] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  // Obtener el nombre del estudiante (actualmente logueado)
  const estudianteNombre = 'Juan Pérez'; // Reemplázalo con el nombre del estudiante logueado

  // Filtrar los profesores disponibles
  const profesoresDisponibles = usuarios.filter((user) => user.rol === 'profesor');

  // Obtener las materias del profesor seleccionado
  const materiasDisponibles = profesoresDisponibles.find(
    (prof) => prof.nombre === profesor
  )?.materias || [];

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevaTutoria = {
      id: Date.now(), // ID único basado en la fecha
      estudiante: estudianteNombre, // Nombre del estudiante que agenda la tutoría
      profesor,
      materia,
      fecha,
      hora,
      aceptada: undefined, // Al principio está pendiente
    };
    agendarTutoria(nuevaTutoria);
    mostrarSeccion('main'); // Regresa al panel principal después de agendar
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Agendar Tutoría</h2>

      <label>
        Profesor:
        <select
          value={profesor}
          onChange={(e) => setProfesor(e.target.value)}
          required
        >
          <option value="">Selecciona un profesor</option>
          {profesoresDisponibles.map((profesor) => (
            <option key={profesor.email} value={profesor.nombre}>
              {profesor.nombre}
            </option>
          ))}
        </select>
      </label>

      {profesor && (
        <label>
          Materia:
          <select
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            required
          >
            <option value="">Selecciona una materia</option>
            {materiasDisponibles.map((materia) => (
              <option key={materia} value={materia}>
                {materia}
              </option>
            ))}
          </select>
        </label>
      )}

      <label>
        Fecha:
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </label>

      <label>
        Hora:
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </label>

      <button type="submit">Agendar</button>
    </form>
  );
}

export default Agendar;
