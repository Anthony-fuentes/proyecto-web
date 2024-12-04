import React, { useState } from 'react';

function Login({ iniciarSesion }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    iniciarSesion(email, password);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Iniciar Sesión</h2>
      <label>
        Correo Electrónico:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
