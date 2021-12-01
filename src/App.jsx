import React from "react";

import './App.css'

import ComParam from "./components/basics/ComParam";
import FirstComponent from "./components/basics/FirstComponent";
import Fragment from "./components/basics/Fragment";

import Radom from "./components/Radom";

import Card from './components/layout/Card'


export default () => {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>

            <div className="cards">
                <Card title="#04 - Desafio Aleatório">
                    <Radom 
                        min={ 5 }
                        max={ 10 } />
                </Card>

                <Card title="#03 - Fragment">
                    <Fragment />
                </Card>

                <Card title="#02 - Com Parâmetro">
                    <ComParam 
                        title="Situação Aluno"
                        aluno="Leandro Barros"
                        nota={ 9.8 } />
                </Card>

                <Card title="#01 - Primeiro Componente">
                    <FirstComponent />
                </Card>     
            </div>
    
        </div>

    );
}