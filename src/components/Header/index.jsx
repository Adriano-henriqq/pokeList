import { Component } from "react";
import styles from './Header.module.css'
import logo from '../../assets/pokebola.png'
import pokebola from '../../assets/pokeball.svg'

class Header extends Component {
    render() { 
        return (
            <header className={styles.header}>
                <img className={styles.img} src={logo} alt="Logo Pokebola" />
                <h3>P{<img style={{width: 20, verticalAlign: 'middle'}} src={pokebola} alt="pokelist" />}keList</h3>
            </header>
        );
    }
}
 
export default Header ;