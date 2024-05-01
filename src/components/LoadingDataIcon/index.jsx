import { Component } from "react";
import gifPokemon from '../../assets/pokemon-pikachu.gif'

class LoadIconGif extends Component {
    state = {  } 
    render() { 
        return (
            <img src={gifPokemon} alt=""/>
        );
    }
}
 
export default LoadIconGif;