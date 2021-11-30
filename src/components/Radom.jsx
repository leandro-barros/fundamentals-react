import React from "react";

export default (props) => {
    const { min, max } = props;
    const num = parseInt(Math.random() * (max - min) + min);
    return (
        <>
            <h2>Número aleatório entre { min } e { max }</h2>
            <span>Valor: { num }</span>
        </>
    );
}