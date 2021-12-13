import React from 'react';

class Contador extends React.Component {

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <div>Valor: {this.props.numero}</div>
            </div>
        )
    }
}

export default Contador;