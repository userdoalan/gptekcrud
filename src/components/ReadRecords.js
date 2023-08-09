import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReadRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/registros');
      setRecords(response.data);
    } catch (error) {
      console.error('Erro ao buscar registros:', error);
    }
  };

  return (
    <div>
      <h2>Registros</h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            Nome: {record.nome}, Idade: {record.idade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadRecords;
