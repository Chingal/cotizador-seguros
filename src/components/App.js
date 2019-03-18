import React, { Component } from 'react';

import Header from './Header';
import Form from './Form';
import Resumen from './Resumen';
import Resultado from './Resultado';

import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';

class App extends Component {
    // State
    state = {
        res: '',
        datos: {}
    };

    // Cotizar Method
    cotizarSeguro = (obj) => {
        let res = 2000;
        const {marca, year, plan} = obj;
        const diferencia = obtenerDiferenciaAnio(year);
        res -= (res*diferencia*3)/100;
        res = calcularMarca(marca)*res;
        let incremento = obtenerPlan(plan);
        res = parseFloat(res*incremento).toFixed(2);
        let auto = {
            marca: marca,
            year : year,
            plan : plan
        };
        this.setState({
            res  : res,
            datos: auto
        });
    };

    // Render Method
    render() {
        return (
            <div className="contenedor">
                <Header titulo="Cotizador de Seguro de Autos" />
                <div className="contenedor-formulario">
                    <Form cotizarSeguro={this.cotizarSeguro} />
                    <Resumen
                        datos={this.state.datos}
                    />
                    <Resultado res={this.state.res} />
                </div>
            </div>
        );
    }
}

export default App;
