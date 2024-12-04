import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Main from './components/Main';
import Agendar from './components/Agendar';
import Historial from './components/Historial';
import Calendario from './components/Calendario';
import ProfesorPanel from './components/ProfesorPanel';
import './styles.css';

function App() {
  const [seccion, setSeccion] = useState('inicio');
  const [usuario, setUsuario] = useState(null);
  const [tutorias, setTutorias] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  // Cargar usuarios desde data.json al inicio
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.usuarios)) {
          setUsuarios(data.usuarios);
        } else {
          console.error('No se encontró la propiedad "usuarios" en el JSON o no es un array');
          setUsuarios([]);
        }
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
        setUsuarios([]);
      });
  }, []);

  const iniciarSesion = (email, password) => {
    const usuarioAutenticado = usuarios.find(
      (user) => user.email === email && user.password === password
    );

    if (usuarioAutenticado) {
      setUsuario(usuarioAutenticado);
      setSeccion(usuarioAutenticado.rol === 'estudiante' ? 'main' : 'profesorPanel');
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  };

  const cerrarSesion = () => {
    setUsuario(null);
    setSeccion('inicio');
  };

  const gestionarTutoria = (id, aceptada) => {
    setTutorias((prevTutorias) =>
      prevTutorias.map((tutoria) => {
        if (tutoria.id === id) {
          alert(
            `La tutoría con ID ${id} ha sido ${aceptada ? 'aceptada' : 'rechazada'} por el profesor.`
          );
          return { ...tutoria, aceptada };
        }
        return tutoria;
      })
    );
  };

  const agendarTutoria = (nuevaTutoria) => {
    setTutorias((prevTutorias) => [...prevTutorias, nuevaTutoria]);
  };

  return (
    <div className="App">
      {seccion === 'inicio' && (
        <section id="inicio">
          <h2>Bienvenido al Sistema de Tutorías Académicas</h2>
          <button onClick={() => setSeccion('login')}>Iniciar Sesión</button>
        </section>
      )}

      {seccion === 'login' && (
        <Login usuarios={usuarios} iniciarSesion={iniciarSesion} mostrarSeccion={setSeccion} />
      )}

      {seccion === 'main' && usuario?.rol === 'estudiante' && (
        <>
          <Main usuario={usuario} tutorias={tutorias} mostrarSeccion={setSeccion} />
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
          <button onClick={() => setSeccion('agendar')}>Agendar Tutoría</button>
          <button onClick={() => setSeccion('historial')}>Ver Historial</button>
          <button onClick={() => setSeccion('calendario')}>Ver Calendario</button>
        </>
      )}

      {seccion === 'profesorPanel' && usuario?.rol === 'profesor' && (
        <>
          {/* Filtramos las tutorías por el nombre del profesor */}
          <ProfesorPanel
            usuario={usuario}
            tutorias={tutorias.filter(
              (tutoria) => tutoria.profesor === usuario.nombre
            )}
            mostrarSeccion={setSeccion}
            gestionarTutoria={gestionarTutoria}
          />
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </>
      )}

      {seccion === 'agendar' && (
        <>
          <Agendar agendarTutoria={agendarTutoria} mostrarSeccion={setSeccion} usuarios={usuarios} />
          <button onClick={() => setSeccion('main')}>Volver</button>
        </>
      )}

      {seccion === 'historial' && (
        <>
          <Historial tutorias={tutorias} mostrarSeccion={setSeccion} />
          <button onClick={() => setSeccion('main')}>Volver</button>
        </>
      )}

      {seccion === 'calendario' && (
        <>
          <Calendario tutorias={tutorias} mostrarSeccion={setSeccion} />
          <button onClick={() => setSeccion('main')}>Volver</button>
        </>
      )}
    </div>
  );
}

export default App;
