import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DeleteRecord() {
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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/excluir/${id}`);
      // Redirecionar após a exclusão
      window.location = '/';
    } catch (error) {
      console.error('Erro ao excluir registro:', error);
    }
  };

  return (
    <div>
      <h2>Excluir Registro</h2>
      <p>Tem certeza que deseja excluir o registro de {nome}?</p>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
}

export default DeleteRecord;
