import { Component } from "react";
import styles from './SearchPokemon.module.css'
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokemonName: ''
         }
         this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        
        this.props.onChange(this.state.pokemonName)
        this.setState((prevState)=>{
            return {pokemonName: prevState.pokemonName = ''}
        })
    }
    render() { 
        return ( 
            <div className={styles.containerInput}>
                <label htmlFor="pokemonInput">Pesquisar Pokemon</label>
                <input value={this.state.pokemonName} onChange={(evento)=> this.setState({pokemonName: evento.target.value})} type="text" name="pokemonInput" placeholder="Nome do Pokemon..." />
                <button onClick={this.handleChange}>Pesquisar</button>
            </div>
         );
    }
}
 
export default SearchBar;