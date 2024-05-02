import { Component } from "react";
import styles from './ListPokemons.module.css'
import Pokemon from "../Pokemon";

class ListPokemons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagination: {},
            urls: [],
            pokemonDigitado: null
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.pokemonDigitado !== prevProps.pokemonDigitado) {
            this.setState({ pokemonDigitado: this.props.pokemonDigitado });
        }
    }
    render() {

        if (this.state.pokemonDigitado !== null) {
            
            return (
                <div className={styles.container}>
                    <ul>
                        <Pokemon onClick={this.props.onClick} url={`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonDigitado}`} />
                    </ul>
                </div>
            )
        }
        return (
            <div className={styles.container}>

                <hr />
                <ul>
                    {this.props.urls.map((url, index) => (
                        <Pokemon  onClick={this.props.onClick} key={index} url={url} />

                    ))}
                </ul>
                <button onClick={this.props.morePokemons} className={styles.buttonShowMore}> Mostrar Mais </button>
            </div>
        );
    }
}

export default ListPokemons;