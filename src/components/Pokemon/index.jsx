import { Component } from "react";
import styles from './Pokemon.module.css'
import { upperCaseFirstLetter } from "../../utils/upperCaseFirstChar";
import { getData } from "../../apis/apis";
import PokemonImage from "../PokemonImages";
import LoadIconGif from "../LoadingDataIcon";

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = { pokemons: [],
                       pokemonClicado: null 
        
        }
    }

    componentDidMount() {
        getData(this.props.url,(error,response)=>{
            if(error) return console.log(error)
            this.setState({ pokemons: [response] })
        })
    }
    
    handleClick = (pokemon) => {
        const pokemonClicado = pokemon
        this.setState({ pokemonClicado: pokemonClicado })
        this.props.onClick(pokemonClicado)
    }

    render() {

        if(this.state.pokemons.length === 0){
            return (
                <LoadIconGif/>
            )
        }
        return (
            <>
                {this.state.pokemons.map((pokemon) => (
                    <li  className={styles.itemPokemons} key={pokemon.id}>
                        <div className={styles.order}><span> #{pokemon.order} </span> </div>
                        <div className={styles.containerImg}>
                            <PokemonImage pokemonImg={pokemon.sprites.other.dream_world.front_default} pokemonAlt={pokemon.name} />
                               
                        </div>
                        <h3> {upperCaseFirstLetter(pokemon.name)}</h3>
                        <div className={styles.containerStats}>
                            
                            {pokemon.types.map((item, index) => (

                                <p key={index} className={`${styles.type} ${styles[item.type.name]}`}>{upperCaseFirstLetter(item.type.name)}</p>
                            ))}
                        </div>
                        <div className={styles.divButton}>    
                        <button className={styles.buttonShowMore} onClick={() => this.handleClick(pokemon.name)}>Detalhes</button>
                        </div>
                    </li>

                ))}
            </>
            
        );
    }
}

export default Pokemon;