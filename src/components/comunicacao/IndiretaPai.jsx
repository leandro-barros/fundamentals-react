import React from 'react';

import IndiretaFilho from './IndiretaFilho';

export default props => {
    let nome = '?';
    let idade = 0;
    let nerd = false;

    function fornecerInformacoes(_nome, _idade, _nerd) {
        nome = _nome;
        idade = _idade;
        nerd = _nerd;
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}