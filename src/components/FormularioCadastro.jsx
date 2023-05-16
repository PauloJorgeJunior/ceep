import React, {Component} from "react";
import App from "../App";

class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder={"Título"}/>
                <textarea name="" id="" cols="30" rows="10" placeholder={"Escreva sua nota..."}/>
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;

