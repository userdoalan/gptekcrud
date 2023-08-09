import React from 'react';
import Switch from "react-switch";
import { BrowserRouter, Route, Link} from 'react-router-dom';
import ReadRecords from './components/ReadRecords';
import CreateRecord from './components/CreateRecord';
import UpdateRecord from './components/UpdateRecord';
import DeleteRecord from './components/DeleteRecord';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Registros</Link>
          </li>
          <li>
            <Link to="/criar">Criar Registro</Link>
          </li>
        </ul>
      </nav>
      
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/ler" exact component={ReadRecords} />
        <Route path="/criar" component={CreateRecord} />
        <Route path="/atualizar/:id" component={UpdateRecord} />
        <Route path="/excluir/:id" component={DeleteRecord} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
