import React, {Component} from 'react';
import Input from './Input.js';
import Table from './Table.js';
import axios from 'axios';
import PageButtons from './PageButtons.js';



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
  }

  componentDidMount () {
    this.getCharacters('https://swapi.dev/api/people'); 
  } 

  async getCharacters(url) { 
    const response = await axios.get(url); 
    const {count} = response.data; 
    const characters = await Promise.all(response.data.results.map(async character => { 
      character.homeWorld = await this.getHomeWorld(character.homeworld); 
      character.species = await this.getSpecies(character.species); 
      return character; 
    })); 

    this.setState({ 
      characters, 
      count, 
      isLoaded: true }); 
  }

  async getHomeWorld(url) { 
    const response = await axios.get(url.replace("http", "https"));
    return response.data.name; 
  }

  async getSpecies(url) { 
    if (url.length === 0) { 
      return "Human"; 
    } 

    const response = await axios.get(url[0].replace("http", "https")); 
    return response.data.name; 
  }
 
  handleInputChange (e) {
    e.preventDefault();
    this.setState({input: e.target.value}) 
  }
  
  searchCharacters(e) {
    e.preventDefault();
    this.getCharacters(`https://swapi.dev/api/people/?search=${this.state.input}`); 
  }

  handlePageChange(e) { 
    const pageNumber = e.target.value; 
    if (this.state.input === '') { 
      this.getCharacters(`https://swapi.dev/api/people/?page=${pageNumber}`); 
    } else { 
      this.getCharacters(`https://swapi.dev/api/people/?search=${this.state.input}&page=${pageNumber}`); 
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
             <button onClick={this.searchCharacters} className='btn btn-warning text-white'>Search</button>
            </div>
          </form>
        </div>
        <div className='text-white'>
          {isLoaded ? <Table characters={this.state.characters}
        /> : <div className='d-flex justify-content-center m-5'>Loading...</div>} 
       </div>
       <div>
         <PageButtons 
          count={this.state.count}
          click={this.handlePageChange} />
       </div>
      </div>
    )
  }
 }  

  
export default App;