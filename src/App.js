import { React, Component } from "react";
import './app.css'
import ListPokemons from "./components/listPokemons";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { getData } from "./apis/apis";
import SearchBar from "./components/Search";
import { FaLongArrowAltLeft } from "react-icons/fa";



class App extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false,
      urls: [],
      pagination: {},
      pokemonClicado: '',
      pokemonDigitado: null,
      filtrar: false,
    }
    this.showModal = this.showModal.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
    this.morePokemons = this.morePokemons.bind(this);
  }

  showModal(nome) {
    this.setState((statePrev) => {
      return { 
        showModal: !statePrev.showModal, 
        pokemonClicado: nome 
       }
    })
  }

  searchPokemon(nomePokemon){
    this.setState({ pokemonDigitado: nomePokemon.toLowerCase() })
  }

  componentDidMount() {
    getData('https://pokeapi.co/api/v2/pokemon', (error, response) => {
      if (error) {
        console.log(error)
      }
      this.setState({ pagination: response.next })
      const data = response.results
        .map((item) => item.url)

      this.setState({ urls: data })

    })
  }
  morePokemons() {
    getData(this.state.pagination, (error, response) => {
      if (error) {
        console.log(error)
      }
      const data = response.results.map((item) => item.url)
      this.setState((prevState) => {
        return { urls: [...prevState.urls, ...data] }
      })
      this.setState({ pagination: response.next })
    })
  }

  render() {

    return (
      <div className="jersey-15-regular ">
        <header>
          <Header/>
          <SearchBar onChange={this.searchPokemon} />
        </header>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {this.state.pokemonDigitado && <FaLongArrowAltLeft  cursor={'pointer'}  onClick={()=>this.setState({pokemonDigitado:null})} size={30}/>}
        </div>
        <ListPokemons pokemonDigitado={this.state.pokemonDigitado} morePokemons={this.morePokemons} urls={this.state.urls} onClick={this.showModal} />
        {this.state.showModal && <Modal nome={this.state.pokemonClicado} handleModal={this.showModal} showModal={this.state.showModal} />}
      </div>
    )
  }
}

export default App;
