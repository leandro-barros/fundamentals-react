import React from "react";
import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default (props) => {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'par' : 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.name}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div className="tabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )

};