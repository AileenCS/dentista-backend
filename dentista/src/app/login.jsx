import React from 'react';
 

function LoginForm() {
  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      <img src='./assets/logo.png' alt="Logo" className="logo" /> 
      <form className="login-form">
        <h2>Iniciar sesión</h2> 
        <div className="form-control">
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" placeholder="Ingresa tu correo electrónico" />
        </div>
        <div className="form-control">
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" placeholder="Ingresa tu contraseña" />
        </div>
        <button type="submit" className="btn-login">Entrar
        </button> 
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
