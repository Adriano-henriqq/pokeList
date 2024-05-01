import { Component } from "react";
import styles from './ListPokemons.module.css'
import Pokemon from "../Pokemon";

class ListPokemons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagination: {},
            urls: []
        }
    }
    render() {

        if (this.props.filtra) {
            return (
                <div className={styles.container}>
                    <Pokemon pokemonFiltrado={this.props.pokemonFiltrado} onClick={this.props.onClick} url={`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonFiltrado}`} />
                </div>
            )
        }
        return (
            <div className={styles.container}>

                <hr />
                <ul>
                    {this.props.urls.map((url, index) => (
                        <Pokemon pokemonFiltrado={this.props.pokemonFiltrado} onClick={this.props.onClick} key={index} url={url} />

                    ))}
                </ul>
                <button onClick={this.props.morePokemons} className={styles.buttonShowMore}> Mostrar Mais </button>
            </div>
        );
    }
}

export default ListPokemons;