import React, { useContext } from 'react';
import './styles.css';

function Login() {

  return (
    <div className="container-login">
      <h2>Faça login</h2>
      <form>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Senha"/>
        <button type="button">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
