import React, { useState } from 'react';

import './Mega.css'
export default props => {

    function gerarNumerosNaoContidos(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? 
            gerarNumerosNaoContidos(min, max, array) :
            aleatorio;
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumerosNaoContidos(1, 60, nums);
                return [ ...nums, novoNumero ];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const [numeros, setNumeros] = useState(Array(qtde).fill(0));

    return (
        <div>
            <h2>Mega</h2>
            <h3>{ numeros.join(' ') }</h3>
            <div className="mega">
                <label>Qtde de números</label>
                <input type="number" 
                    min="6"
                    max="15"
                    value={qtde}
                    onChange={e => { 
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}