import ReactDOM from "react-dom";
import React from 'react'

const tag = <strong>Hello React!!!</strong>;

const element = document.getElementById('root');
ReactDOM.render(
    <div>
        { tag }
    </div>,
     element
);