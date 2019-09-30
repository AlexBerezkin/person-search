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
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ persons:users }))
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
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
          handleChange={this.handleChange} />
        <CardList persons={filteredPersons} />
      </div>
    )
  }
}

export default App;
