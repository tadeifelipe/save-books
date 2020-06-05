import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './pages/Sobre';
import Livros from './pages/Livros';
import Autores from './pages/Autores';
import NotFound from './pages/NotFound';

import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={App}/>
        <Route path='/sobre' component={Sobre}/>
        <Route path='/livros' component={Livros}/>
        <Route path='/autores' component={Autores}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
