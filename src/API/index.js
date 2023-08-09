const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco_de_dados'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

// Rotas CRUD

// Rota para criar um novo registro
app.post('/api/criar', (req, res) => {
  const { nome, idade } = req.body;
  const query = 'INSERT INTO tabela (nome, idade) VALUES (?, ?)';
  db.query(query, [nome, idade], (err, result) => {
    if (err) {
      console.error('Erro ao criar registro:', err);
      res.status(500).send('Erro ao criar registro');
      return;
    }
    res.send('Registro criado com sucesso');
  });
});

// Rota para obter todos os registros
app.get('/api/registros', (req, res) => {
  const query = 'SELECT * FROM tabela';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao obter registros:', err);
      res.status(500).send('Erro ao obter registros');
      return;
    }
    res.json(result);
  });
});

// Rota para atualizar um registro
app.put('/api/atualizar/:id', (req, res) => {
  const id = req.params.id;
  const { nome, idade } = req.body;
  const query = 'UPDATE tabela SET nome = ?, idade = ? WHERE id = ?';
  db.query(query, [nome, idade, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar registro:', err);
      res.status(500).send('Erro ao atualizar registro');
      return;
    }
    res.send('Registro atualizado com sucesso');
  });
});

// Rota para excluir um registro
app.delete('/api/excluir/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM tabela WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir registro:', err);
      res.status(500).send('Erro ao excluir registro');
      return;
    }
    res.send('Registro excluído com sucesso');
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
