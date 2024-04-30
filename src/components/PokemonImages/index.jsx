import { Component } from 'react';
import styles from './PokemonImages.module.css'

class PokemonImage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div className={styles.imgBackground}>
            <img src={this.props.pokemonImg} alt={`imagem do ${this.props.pokemonAlt}`} />
            <div className={styles.background}></div> 
            </div>
         );
    }
}
 
export default PokemonImage ;