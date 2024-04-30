import { Component } from "react";
import styles from './Modal.module.css'
import { getData } from "../../apis/apis";
import { upperCaseFirstLetter } from "../../utils/upperCaseFirstChar";

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
                  <img className={styles.img} src={this.state.pokemon.sprites.front_default} alt="" />
                  <h3>{upperCaseFirstLetter(this.state.pokemon.name)}</h3>
                  </div> 
                  <div className={styles.stats}>
                  <h4>Stats</h4>
                    {this.state.pokemonStats.map((item,index)=> (
                        <div key={index} className={styles.statsInfo}>    
                        <p className={styles.statsName}>{upperCaseFirstLetter(item.stat.name.replace(/[-]/, ' '))}</p>
                        <span style={{padding: `0 ${item.base_stat}px`}}className={ `${styles.statsBar} ${styles[item.stat.name]} `}>{item.base_stat}</span>
                        
                        </div>
                    ))}
                </div>
                </div>
                    </div>
            </div>

        );
    }else{
        return null
    }

    }
    
}
 
export default Modal ;