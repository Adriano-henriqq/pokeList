import { Component } from "react";
import styles from './ListPokemons.module.css'
import Pokemon from "../Pokemon";
import ComponentError from "../PageError";

class ListPokemons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagination: {},
            urls: [],
            pokemonDigitado: null,
            erro: false
        }
        this.getError = this.getError.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.pokemonDigitado !== prevProps.pokemonDigitado) {
            this.setState({ pokemonDigitado: this.props.pokemonDigitado, erro: null });

        }

    }

    getError(error) {
        const errorAchado = error
        this.setState({ erro: errorAchado });

    }
    render() {


        if (this.state.pokemonDigitado !== null) {

            return (
                <div className={styles.container}>
                    {this.state.erro !== 404 ?
                        <ul className={this.state.pokemonDigitado !== null ? styles.listaPokemonFiltrada : styles.listaPokemon}>
                            <Pokemon onError={this.getError} onClick={this.props.onClick} url={`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonDigitado}`} />
                        </ul>

                        :<ComponentError />}
                </div>
            )


        }
        return (
            <div className={styles.container}>

                <ul className={styles.listaPokemon}>
                    {this.props.urls.map((url, index) => (
                        <Pokemon onClick={this.props.onClick} key={index} url={url} />

                    ))}
                </ul>
                <button onClick={this.props.morePokemons} className={styles.buttonShowMore}>Mostrar Mais</button>
            </div>
        );
    }
}

export default ListPokemons;