import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Importa o componente App
 // Pode conter estilos globais ou importações de estilo

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root') // Renderiza o componente App no elemento com o ID "root"
);
