import React, { useState } from 'react';
import axios from 'axios';

function CreateRecord() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://6486009aa795d24810b79430.mockapi.io/api/teste', { nome, idade });
      // Redirecionar para a página de leitura após a criação
      window.location = '/';
    } catch (error) {
      console.error('Erro ao criar registro:', error);
    }
  };

  return (
    <div>
      <h2>Criar Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>Idade:</label>
        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default CreateRecord;
