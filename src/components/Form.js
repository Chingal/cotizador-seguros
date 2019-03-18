import React, {Component} from 'react';

class Form extends Component {

    marcaRef = React.createRef();
    yearRef  = React.createRef();
    planBasicoRef   = React.createRef();
    planCompletoRef = React.createRef();

    cotizarSeguro = (e) => {
        e.preventDefault();
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';
        const obj = {
            marca: this.marcaRef.current.value,
            year : this.yearRef.current.value,
            plan : plan
        };
        this.props.cotizarSeguro(obj);
        // Resetear Form optional
        //e.currentTarget.reset();
    };

    render(){
        return(
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label htmlFor="marca">Marca</label>
                    <select name="marca" id="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label htmlFor="year">Año</label>
                    <select name="year" id="year" ref={this.yearRef}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                    </select>
                </div>

                <div className="campo">
                    <label htmlFor="plan">Plan</label>
                    <input type="radio" name="plan" value="Básico" ref={this.planBasicoRef} /> Básico
                    <input type="radio" name="plan" value="Completo" ref={this.planCompletoRef} /> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        )
    }
}

export default Form;