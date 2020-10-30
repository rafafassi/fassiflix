import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './components/pages/cadastro/Video/index';
import CadastroCategoria from './components/pages/cadastro/categoria';

const Pagina404 = () => (
  <div>
    PÁGINA 404
  </div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route path="/" component={Home} exact />
    <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
