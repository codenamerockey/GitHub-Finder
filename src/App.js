import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  /* componentDidMount() {
    // sending request for data with .then() promise
    axios.get('https://api.github.com/users').then(response => {
      console.log(response.data);
    });
  }*/
  /********async await syntax for axios http request***********/
  async componentDidMount() {
    this.setState({ loading: true }); // this sets our loading to true before we get our data from the api

    const resolve = await axios.get('https://api.github.com/users'); // get data

    //after getting data we update the state
    this.setState({ users: resolve.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
