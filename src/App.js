import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dashboard from './components/Dashboard';
import Appbar from './components/Appbar';

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
          <br />
          <br />
          <br />
          <TextField
            label="Username"
          />
          <br />
          <TextField
            label="Password"
            type="password"
          />
          <br />
          <Button
            onClick={this.handleClick}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
      )
    };
  }
}

export default App;