import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';
import PostContainer from './Components/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {

  constructor () {
    super();
    this.state = {
      dummy: []
    }
  }

  componentDidMount () {
    this.setState({dummy: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />

        <section className="content">

        {this.state.dummy.map(dummyData => (
          <PostContainer key={dummyData.username} dummyData={dummyData} />
        ))}

        </section>

      </div>
    );
  }
}

export default App;