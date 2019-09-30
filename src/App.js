import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ persons:users }))
  }
  
  render() {
    const {persons, searchField} = this.state;
    const filteredPersons = persons.filter(person => 
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox 
          placeholder='search a person'
          handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList persons={filteredPersons} />
      </div>
    )
  }
}

export default App;
