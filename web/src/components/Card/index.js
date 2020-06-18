import React from 'react';
import Cidade from '../../assets/cidade.jpg';

import './styles.css';

function Card() {
  return (
    <div className="card">
      <img src={Cidade} alt="cidade"/>

      <div className="text">
        <p className="little">4 Days ago</p>
        <h3>Post One</h3>
        <p className="text-info">Lorsdfsdfsdfsdfsdfsdsfdem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="info">
        <ul>
          <li>
            <p>4m</p>
            <span>READ</span>
          </li>
          <li>
            <p>52323</p>
            <span>VIEWS</span>
          </li>
          <li>
            <p>32</p>
            <span>COMMENTS</span>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Card;
