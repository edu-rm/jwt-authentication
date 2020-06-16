import React from 'react';
import Cidade from '../../assets/cidade.jpg';

import './styles.css';

function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={Cidade} alt="cidade"/>
        <div className="text">
          <p>Informações</p>
        </div>
      </div>
    </div>

  );
}

export default Card;
