import { Component } from "react";
import styles from './Pokemon.module.css'
import { upperCaseFirstLetter } from "../../utils/upperCaseFirstChar";
import { getData } from "../../apis/apis";

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
        return (
            <>
                {this.state.pokemons.map((pokemon) => (
                    <li onClick={() => this.handleClick(pokemon.name)} className={styles.itemPokemons} key={pokemon.id}>
                        <div className={styles.order}><span> #{pokemon.order} </span> </div>
                        <img src={pokemon.sprites.front_default} alt={`imagem do ${pokemon.name}`} />
                        <h3> {upperCaseFirstLetter(pokemon.name)}</h3>
                        <div className={styles.containerStats}>
                            <p> EXP {pokemon.base_experience}</p>
                            {pokemon.types.map((item, index) => (

                                <p key={index} className={`${styles.type} ${styles[item.type.name]}`}>{upperCaseFirstLetter(item.type.name)}</p>
                            ))}
                        </div>
                        
                    </li>

                ))}
            </>
            
        );
    }
}

export default Pokemon;