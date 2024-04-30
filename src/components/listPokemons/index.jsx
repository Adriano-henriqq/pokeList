import { Component } from "react";
import styles from './ListPokemons.module.css'
import Pokemon from "../Pokemon";
import { getData } from "../../apis/apis";

class ListPokemons extends Component {
    constructor(props){
        super(props)
        this.state = {
         pagination: {},     
         urls: []
    } 
    
    
    }
  
   
    
    render() { 
        if(this.props.urls.length === 0){
            return <div>Loading...</div>
        }

        return (
           <div className={styles.container}>
            
            <hr />
           <ul> 
            {this.props.urls.map((url,index)=> (
               <Pokemon  onClick={this.props.onClick} key={index} url={url}/>
                
            ))}
           </ul> 
           <button onClick={this.props.morePokemons} className={styles.buttonShowMore}> Mostrar Mais </button>
           </div> 
     );
    }
}
 
export default ListPokemons;