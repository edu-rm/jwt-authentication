import React from 'react';
import Card from '../../components/Card';

import './styles.css';

function Home() {

  return (
    <div className="container">
      <h1>Cidades</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default Home;
