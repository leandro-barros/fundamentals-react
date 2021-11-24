import React from "react";

export default function ComParam(props) {
    return (
        <div>
            <h1>{ props.title }</h1>
            <p>O aluno { props.aluno } teve a nota 
                <strong> { props.nota }</strong>
            </p>
            
        </div>
    );
}