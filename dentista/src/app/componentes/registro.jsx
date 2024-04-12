'use client'
import React, { useState } from 'react';

function RegistrationForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log({
      nombre,
      email,
      password,
      confirmPassword
    });
  };

  return (
    <div className="registration-container">
      <div className="background-overlay"></div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Crear una cuenta</h2>
        <div className="form-control">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirma tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn-register">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;

