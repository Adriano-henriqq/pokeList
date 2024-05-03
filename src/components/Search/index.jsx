import { Component } from "react";
import styles from './SearchPokemon.module.css'
import { CiSearch } from "react-icons/ci";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokemonName: ''
         }
         this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
       
        
        if(this.state.pokemonName.length > 0){
            this.props.onChange(this.state.pokemonName)
            this.setState({pokemonName: ''})

        }

    }
    handleChange(evento){
        this.setState({pokemonName: evento.target.value})
        
        
    }
    render() { 
        return ( 
            <div className={styles.containerInput}>
                <label htmlFor="pokemonInput"></label>
                <input value={this.state.pokemonName} onChange={this.handleChange.bind(this) } type="text" name="pokemonInput" placeholder="Ex: Charmander..." />
                <button onClick={this.handleClick}><CiSearch color="white"  size={20}/></button>
            </div>
         );
    }
}
 
export default SearchBar;