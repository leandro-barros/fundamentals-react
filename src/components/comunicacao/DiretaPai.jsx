import React from 'react';

import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho name="Júnior" age={ 20 } nerd="true" />
            <DiretaFilho name="Gabriel" age={ 17 } nerd="true" />
        </div>
    )
}