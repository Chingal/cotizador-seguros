import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';

class Resumen extends Component {
    // View Resumen
    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;
        if (!marca || !year || !plan) return null;
        return(
            <div className="resumen">
                <h2>Resumen de la cotización</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Año: {year}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
            </div>
        )
    };

    // Render Method
    render(){
        return(
            <div>
                {this.mostrarResumen()}
            </div>
        )
    }
}

export default Resumen;