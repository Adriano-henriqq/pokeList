import { React, Component } from "react";
import ListPokemons from "./components/listPokemons";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { getData } from "./apis/apis";
import Pokemon from "./components/Pokemon";


class App extends Component{
  state = {
    showModal: false,
    urls: [],
    pagination: {},
    pokemonClicado: ''
  }

  showModal = (nome)=>{
    this.setState((statePrev)=>{
      return {showModal: !statePrev.showModal ? statePrev.showModal = true : false}
    })
    this.setState({pokemonClicado: nome})

  }

  componentDidMount(){
    getData('https://pokeapi.co/api/v2/pokemon', (error,response)=>{
        if(error){
            console.log(error)
        }
        this.setState({pagination: response.next})
       const data = response.results
       .map((item)=> item.url)
      
       this.setState({urls: data}) 
      
    })
}
morePokemons(){
        
  getData(this.state.pagination, (error,response)=>{
      if(error){
          console.log(error)
      }
      const data = response.results.map((item)=> item.url)
      this.setState((prevState)=> {
          return {urls: [...prevState.urls, ...data]}
      })
      this.setState({pagination: response.next})
  })
}

  render(){
  return (
    <div >
   <Header/>
   <ListPokemons morePokemons={this.morePokemons.bind(this)} urls={this.state.urls} onClick={this.showModal}  />
   {this.state.showModal && <Modal nome={this.state.pokemonClicado} handleModal={this.showModal.bind(this)} showModal={this.state.showModal}/>}
   </div>
  )
 }
}

export default App;
