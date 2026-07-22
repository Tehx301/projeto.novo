import { useState } from 'react';
import '../src/pages/telaInicial.css';
import axios from 'axios';
import { dbPromise } from "../src/pages/utils/db.js";

export const savePokemonDB = async (ceps) => {
  const db = await dbPromise;
  return db.put("cep", ceps);
};

function Tela() {
  //states controlados pelo componente
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState(0);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  //manipuladores do formulario para editar variaveis de estado
  const manipularNome = (e) => {
    setNome(e.target.value);
    console.log(nome);
  };
  const manipularTel = (e) => {
    setTelefone(e.target.value);
    console.log(telefone);
  };
  const manipularCep = (e) => {
    setCep(e.target.value);
    console.log(cep);
  };

  //Manipulador do botão para executar uma ação
  const manipularBotao = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/01001000/json/`,
      );
      setEndereco(response.data);
      console.log(endereco);
    } catch (e) {
      console.error(e);
    }
  };



  //Formulario de cadastro
  return (
          <div className="titulo">stalkiar alguem
 
      <form className='formRegistro'>
        <label className='labelRegistro'>Nome</label>
        <input className='inputRegistro' placeholder="qual nome" onChange={manipularNome}></input>
        <label className='labelRegistro'>Telefone</label>
        <input className='inputRegistro' placeholder="qual é o numero?" onChange={manipularTel}></input>
        <label className='labelRegistro'>CEP</label>
        <input className='inputRegistro' placeholder="escrevinha mano" onChange={manipularCep}></input>
        <button className='buttonRegistro' onClick={manipularBotao}>
          vae
        </button>
      </form>
    </div>
  );
}

export default Tela;