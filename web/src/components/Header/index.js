import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { AuthContext } from '../../Hooks/AuthContext';

function Header() {
  const { state, dispatch } = useContext(AuthContext);

  function handleLogout(){
    dispatch({
      type : '@SAIR',
    });
  }

  return (
    <nav>
      <ul>
        <li>
          <h1>hook<strong>S</strong></h1>
          <p>By: Eduardo Rampon Meireles</p>
        </li>
        <li>
          {
            state.isAuthenticated
            ?
            <button onClick={handleLogout}>Sair</button>
            :
            <p>Faça login</p>
          }
        </li>
      </ul>
    </nav>
  );
}

export default Header;
