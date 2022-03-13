import { Component } from "react";

class BuscarCepComponent extends Component {

    constructor(props) {
        super(props);
        this.cep = "";
    }

    handleMudancaCep(event) {
        event.preventDefault();
        this.cep = event.target.value;
    }

    PesquisarCep(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.PesquisarCep(this.cep);
    }

    render() {
        return(
            <section className="section-cep">
                <form
                    onSubmit={this.PesquisarCep.bind(this)} 
                    className="form-cep">
                    <input 
                        type="text"
                        placeholder="Insira o seu Cep"
                        className="form-cep_input"
                        onChange={ this.handleMudancaCep.bind(this) }
                    />
                    <button className="form-cep_input form-cep_submit">Pesquisar</button>            
                </form>
                <div>
                    <textarea/>
                </div>                
            </section>
        )
    }

}

export default BuscarCepComponent;