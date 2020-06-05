import React, { Component } from 'react';
import FormValidator from '../../assets/FormValidator';
import PopUp from '../PopUp/PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validaQuando: false,
                mensagem: 'Entre com um nome.'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validaQuando: false,
                mensagem: 'Entre com um livro.'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 999 }],
                validaQuando: true,
                mensagem: 'Entre com um valor numérico.'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validator.valido()      
        }
        this.state = this.stateInicial;
    }

    escutadorDeInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {
        const validacao = this.validator.valida(this.state)

        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }
        else {
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter((elem)=>{
                return elem.isInvalid;
            })
            camposInvalidos.forEach((campo)=>{
                PopUp.exibirMensagem('error', campo.message)
            });
        }
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <div className="center">
                    <button onClick={this.submitFormulario} type="button" className="waves-effect waves-light btn #3f51b5 indigo">Salvar</button>
                </div>

            </form>
        )
    };
}

export default Formulario;
