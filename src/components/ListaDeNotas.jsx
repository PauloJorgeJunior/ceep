import React, {Component} from "react";
import CardNotas from "./CardNotas";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                <li>
                    <CardNotas/>
                </li>
            </ul>
        )
    }
}

export default ListaDeNotas;
