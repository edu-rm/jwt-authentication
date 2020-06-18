import React, { useContext, useState } from 'react';
import api from '../../services/api';
import './styles.css';

import { AuthContext } from '../../Hooks/AuthContext';

function Login() {
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [message, setMessage] = useState();

  async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await api.post('sessions',{
        email_login: email,
        password_login: senha
      })

      dispatch({
        type: '@LOGIN',
        payload : {
          user: response.data.user.email,
          token: response.data.token,
        }
      });
    }catch(err){
      setMessage(err.message);
    }

  }
  return (
    <div className="container-login">
      <h2>Faça login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />

        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          placeholder="Senha"
        />
        {message && (<span>{message}</span>)}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
