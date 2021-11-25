import React from "react";

import ComParam from "./components/basics/ComParam";
import FirstComponent from "./components/basics/FirstComponent";
import Fragment from "./components/basics/Fragment";
import Radom from "./components/Radom";


export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Radom 
                min={ 5 }
                max={ 10 } />
            <Fragment />
            <ComParam 
                title="Situação Aluno"
                aluno="Leandro Barros"
                nota={ 9.8 } />
            <FirstComponent />
        </div>

    );
}