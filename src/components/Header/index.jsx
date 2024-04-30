import { Component } from "react";
import styles from './Header.module.css'
import logo from '../../assets/pokeball.svg'

class Header extends Component {
    render() { 
        return (
            <header className={styles.header}>
                <img className={styles.img} src={logo} alt="Logo Pokebola" />
                <h3>PokeList</h3>
            </header>
        );
    }
}
 
export default Header ;