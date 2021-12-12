import React, { useState } from 'react';

import './Input.css';

export default props => {
    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div className="Input">
            <h1>{valor}</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined} /> {/* Componente não contrado*/}
            </div>
        </div>
    )
}