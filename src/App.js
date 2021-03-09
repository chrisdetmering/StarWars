import React, {Component} from 'react';
import Input from './Input.js';
import Table from './Table.js';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
     input : '',
     characters: [],
     isLoaded: false, 
     count: 0, 
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchCharacters = this.searchCharacters.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this); 
    this.getCharacters = this.getCharacters.bind(this); 
  }

  showPage(value) {
    try {
     const url = `https://swapi.dev/api/people/?page=${value}`
      ;(async () => {
      const page = await axios.get(url).then(res => res.data.results)

       for(const character of page){
         const homeworldURL = character.homeworld
         const newHomeworldURL = homeworldURL.replace("http", "https")
         const homeworldRes = await axios.get(newHomeworldURL).then(res => res.data.name)
         character.homeworld = [homeworldRes]
         if(character.species.length !== 0){
          const speciesURL = character.species;
          const speciesURLstring = speciesURL.toString()
          const newSpeciesURL = speciesURLstring.replace("http", "https")
          const speciesRes = await axios.get(newSpeciesURL).then(res => res.data.name)
          character.species = [speciesRes]
         }else{
           character.species = 'Human'
         }
       }
       this.setState({characters: [...page],
                      isLoaded: true})
      })() 
    } catch (err) {
    console.error(err);
    }
  }



  handleInputChange (e) {
    e.preventDefault();
    this.setState({input: e.target.value}) 
  }


  searchCharacter (e) {
    e.preventDefault();
    if(this.state.input === ''){
      this.showPage(1)
    }else{
      if(this.state.isLoaded){
        this.setState({isLoaded: false,
                       newCharacters: [],
                      characters: []})
      }
      this.sendSearchRequest()  
    }
  }

  render () {
    const {isLoaded} = this.state;
     return (
      <div>
        <div className='text-warning mt-5 w-75 border border-white rounded mx-auto'>
          <h1 className='d-flex justify-content-center display-3'>STAR WARS</h1>
          <form className='form'>
           <Input searchInput={this.state.input} handleInputChange={this.handleInputChange} resetInputValue={this.resetInputValue}/>
           <div className='d-flex justify-content-center m-3'>
             <button onClick={this.searchCharacter} className='btn btn-warning text-white'>Search</button>
            </div>
          </form>
        </div>
        <div className='text-white'>
          {isLoaded ? <Table characters={this.state.characters}
        /> : <div className='d-flex justify-content-center m-5'>Loading...</div>} 
       </div>
       <div>
         <ButtonPageChange changePageCount={this.changePageCount} />
       </div>
      </div>
    )
  }
 }  

  
export default App;