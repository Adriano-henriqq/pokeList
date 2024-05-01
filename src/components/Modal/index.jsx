import { Component } from "react";
import styles from './Modal.module.css'
import { getData } from "../../apis/apis";
import { upperCaseFirstLetter } from "../../utils/upperCaseFirstChar";
import PokemonImage from "../PokemonImages";
import LoadIconGif from "../LoadingDataIcon";

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: '',
            pokemonStats: []
        }
    }

    componentDidMount(){
        getData(`https://pokeapi.co/api/v2/pokemon/${this.props.nome}`,(err,response)=>{
            if(err)return console.log(err)
            this.setState({pokemonStats: [...response.stats]})
            this.setState({pokemon: {...response}})
        })
    }
    state = {  } 
    render() {
       if(this.props.showModal && this.state.pokemon.length !== 0) {  
        return (
            <div onClick={this.props.handleModal} className={styles.containerModal}>
                <div className={styles.modal}>
                  <div className={styles.statsContainer}>
                 <div className={styles.statsInfoContainer}>     
                 <PokemonImage pokemonImg={this.state.pokemon.sprites.other.dream_world.front_default} pokemonAlt={this.state.pokemon.name}/>
                  <h3>{upperCaseFirstLetter(this.state.pokemon.name)}</h3>
                  </div> 
                  <div className={styles.stats}>
                  <div>  
                  <h4>Stats</h4>
                  </div>
                  <div className={styles.orderStats}>  
                    {this.state.pokemonStats.map((item,index)=> (
                        <div key={index} className={styles.statsInfo}>    
                        <p className={styles.statsName}>{upperCaseFirstLetter(item.stat.name.replace(/[-]/, ' '))}</p>
                        <span style={{padding: `0 ${item.base_stat}px  `}}className={ `${styles.statsBar} ${styles[item.stat.name]} `}>{item.base_stat}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                    </div>
            </div>

        );
    }else{
        <LoadIconGif/>
    }

    }
    
}
 
export default Modal ;