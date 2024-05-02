import { Component } from "react";
import pokemonImg from "../../assets/pokemonTriste.png"

class ComponentError extends Component { 
    render() { 
        return (
            <div>
                <h3>Ops Pokemon não encontrado!</h3>
                <img src={pokemonImg} alt="Pikachu triste " />
            </div>
        );
    }
}
 
export default ComponentError;