import React from "react";

export default (props) => {
    const { min, max } = props;
    const num = parseInt(Math.random() * (max - min) + min);
    return (
        <>
            <h1>Número aleatório entre { min } e { max }</h1>
            <span>Valor: { num }</span>
        </>
    );
}