import React, { Component } from "react";
import { Card, CardContent, Typography, CardActions, Switch, Slider, MenuItem, Select, FormControl } from "@material-ui/core";
import Appbar from "./Appbar";

class Dashboard extends Component {
  state = {
    online: false,
    volume: 30,
    quality: 2,
    notifications: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.quality !== prevState.quality) {
      const notes = this.state.notifacations;

      if (this.state.quality === 1) {
        notes.musicQuality = 'Music qulity is degraded. Increase qulity if you connection allows it.'
      } else {
        notes.musicQuality = ''
      }
      this.setState({ notifications: notes });
    }

    if (this.state.online !== prevState.online) {
      const notes = this.state.notifications;
      if (this.state.online) {
        notes.onlineStatus = 'Your applicaiton is online. you will be able to share or stream music to other devices'
      } else {
        notes.onlineStatus = ''
      }
      this.setState({ notifacations: notes });
    }
    if (this.state.volume !== prevState.volume) {
      const notes = this.state.notifications;
      if (this.state.volume >= 80) {
        notes.volumeSetting = 'Listening to the music at high volume could cause long-term hearing loss.'
      } else {
        notes.volumeSetting = ''
      }
    }
  }
  //event listener for event fired the volume 
  handleVolumeChange = (event, value) => {
    this.setState({ volume: value })
  };
  //someone click on the button to set a  new sate 
  handleChange = event => {
    this.setState({ quality: event.target.value });
  };

  handleClick = () => {
    this.setState({ online: !this.state.online });
  };


  render() {
    return (
      <div>
        <Appbar />
        <br />
        <br />
        <h1>Welcome Meng!</h1>
        <br />
        {/*Card 1*/}
        <div className="container1">
          <Card className="card1">
            <CardContent>
              <Typography variant="h5" component="h5">
                Online Mode
              </Typography>
              <Typography variant="body2" component="p">
                Is this application connected
                <br />
                to the internet?
              </Typography>
            </CardContent>
            <CardActions>
              <Switch onClick={this.handleClick} {...this.state.online} />
            </CardActions>
          </Card>

          {/*Card 2*/}
          <Card className="card2">
            <CardContent>
              <Typography variant="h5" component="h5">
                Master Volume
              </Typography>
              <Typography variant="body2" component="p">
                Overrides all other sound
                <br />
                settings in this application
              </Typography>
            </CardContent>
            <CardActions>
              <Slider
                onChange={this.hanleVolumeChange}
                value={this.state.volume}
                aria-labelledby="discrete-slider"
                step={10}
                marks
                min={10}
                max={100} />
            </CardActions>
          </Card>

          {/*Card 3*/}
          <Card className="card3">
            <CardContent>
              <Typography variant="h5" component="h5">
                Sound Qulity
              </Typography>
              <Typography variant="body2" component="p">
                Manually Control the music
                <br />
                connection
              </Typography>
            </CardContent>
            <CardActions>
              <FormControl className="Form">
                <Select value={this.state.quality} onChange={this.handleChange}>
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </div>

        {/*System Notifications*/}
        <div className="notifications">
          <h2>System Notifications:</h2>
          {Object.keys(this.state.notifications).map(n => {
            return <p>{this.state.notifications[n]}</p>;
          })}
        </div>
      </div>
    );
  }
}


export default Dashboard;