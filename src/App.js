import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';
import PopUp from './PopUp';


class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  };

  removerAutor = (index) => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        })
      }     
    );
    PopUp.exibirMensagem('error','Autor removido com sucesso');
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
    PopUp.exibirMensagem('success','Autor adicionado com sucesso');
  }

  render() {
    return (
      <>
        <Header />   
        <div className="container">
        <h1>Casa do código</h1> 
          <Tabela autores={this.state.autores} removerAutor={this.removerAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>

      </>
    );
  };
}

export default App;
