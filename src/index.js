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
            firstTitle="Primeiro título" 
            secondTitle="Segundo título"/>
    </div>,
     element
);