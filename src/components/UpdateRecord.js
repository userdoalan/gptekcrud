import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateRecord() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  useEffect(() => {
    fetchRecord();
  }, []);

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/registros/${id}`);
      setNome(response.data.nome);
      setIdade(response.data.idade);
    } catch (error) {
      console.error('Erro ao buscar registro:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/atualizar/${id}`, { nome, idade });
      // Redirecionar após a atualização
      window.location = '/';
    } catch (error) {
      console.error('Erro ao atualizar registro:', error);
    }
  };

  return (
    <div>
      <h2>Atualizar Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>Idade:</label>
        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default UpdateRecord;
