import React from "react";

import './App.css'

import ComParam from "./components/basics/ComParam";
import FirstComponent from "./components/basics/FirstComponent";
import Fragment from "./components/basics/Fragment";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";

import ParOrImpar from './components/condicional/ParOrImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import ListaAlunos from './components/repeticao/ListaAlunos'

import TabelaProdutos from "./components/repeticao/TabelaProdutos";

import Radom from "./components/Radom";

import Card from './components/layout/Card'


export default () => {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>

            <div className="cards">
                <Card title="#08 - Rederização Condicional" color="#982395">
                    <ParOrImpar number={20}/>
                    <UsuarioInfo usuario={{ name: 'Fernando' }} />
                    {/*<UsuarioInfo usuario={{ email: 'fernando@gmai.com' }} />*/}
                </Card>

                <Card title="#07 - Desafio Repetição" color="#3a9ad9">
                    <TabelaProdutos />
                </Card>

                <Card title="#06 - Repetição" color="#ff8c65">
                    <ListaAlunos />
                </Card>

                <Card title="#05 - Componente com filhos" color="#00c8f8">
                    <Familia sobrenome="Barros">
                    <FamiliaMembro nome="Pedro"/>  
                    <FamiliaMembro nome="Ana"/> 
                    <FamiliaMembro nome="Gustavo"/> 
                    </Familia>
                </Card>

                <Card title="#04 - Desafio Aleatório" color="#FA6900">
                    <Radom 
                        min={ 5 }
                        max={ 10 } />
                </Card>

                <Card title="#03 - Fragment" color="#E94C6F">
                    <Fragment />
                </Card>

                <Card title="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParam 
                        title="Situação Aluno"
                        aluno="Leandro Barros"
                        nota={ 9.8 } />
                </Card>

                <Card title="#01 - Primeiro Componente" color="#588C73">
                    <FirstComponent />
                </Card>     
            </div>
    
        </div>

    );
}