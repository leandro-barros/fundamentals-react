import ReactDOM from "react-dom";
import React from 'react'

import './index.css'

import FirstComponent from './components/basics/FirstComponent.js'

const tag = <strong>Hello React!!!</strong>;

const element = document.getElementById('root');
ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
    </div>,
     element
);