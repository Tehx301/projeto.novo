import React from 'react';
import { Link } from "react-router-dom";
import './telaInicial.css';
import axios from 'axios';

function Tela() {
  return (
    <div className="Container">
      <h3 className="titulo">stalkear alguem</h3>
      <div className="Base">
        <div className="Inicio">
          <input type="text" di="palavra" placeholder="qual name?" />
          <input type="text" di="palavra" placeholder="escrevinha mano" />
          <button type="submit" id="oBotao">perta</button>
        </div>
      </div>
    </div>
  );
}

export default Tela;
