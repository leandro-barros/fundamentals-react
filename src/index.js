import ReactDOM from "react-dom";
import React from 'react'

import './index.css'

import FirstComponent from './components/basics/FirstComponent.js'
import ComParam from "./components/basics/ComParam";

const element = document.getElementById('root');

ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
        <ComParam
            title="Situação do Aluno" 
            aluno="Leandro Barros"
            nota={ 9.8 }/>
    </div>,
     element
);