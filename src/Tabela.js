import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const linhas = props.autores.map((autor, index) => {
        return (
            <tr key={index}>
                <td>{autor.nome}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td><button onClick={() => {props.removerAutor(index)}} className="waves-effect waves-light btn #3f51b5 indigo">Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
};

class Tabela extends Component {
    render() {
        const { autores, removerAutor } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody autores={autores} removerAutor={removerAutor} />
            </table>
        )
    }
}

export default Tabela