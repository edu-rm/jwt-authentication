import React, { useContext } from 'react';
import './styles.css';

import { AuthContext } from '../../Hooks/AuthContext';

function Login() {
  const { state } = useContext(AuthContext);

  return (
    <div className="container-login">
      <h2>Faça login</h2>
      <form>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Senha"/>
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
