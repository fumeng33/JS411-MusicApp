import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dashboard from './components/Dashboard';
import Appbar from './components/Appbar';
// import Test from './components/test';

class App extends Component {

  state = {
    isLoggedIn: false
  };

  handleClick = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />
    } else {
    
  return (
      <div>
        <Appbar />
        <br />
            <TextField className='username'
              id="standard-input"
              label="Username*"
              type="username"
              autoComplete="current-password"
              margin="normal"
            />

            <br />
            <TextField className='password'
              id="standard-password-input"
              lable="Password*"
              type="password"
              autoComlete="current-password"
              margin="normal"
            />
            <br />
            <Button onClick={this.handleClick} variant="contained" color="primary">
              Login
        </Button>
          </div>
    )};
  }
}

export default App;