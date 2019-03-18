import React, {Component} from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';

class Resultado extends Component {

    mostrarResultado = () => {
        const res = this.props.res;
        const mensaje = (!res)? 'Elige una marca, año y plan.': 'El resultado es $';
        return(
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado" key={res} timeout={{enter:500, exit:500}} >
                        <span>{res}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    };

    // Render Method
    render(){
        return(
            <React.Fragment>
            {this.mostrarResultado()}
            </React.Fragment>
        )
    }
}

export default Resultado;