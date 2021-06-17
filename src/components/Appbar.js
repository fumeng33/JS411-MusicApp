import React, { Component } from 'react';
import { AppBar, Box, Toolbar, Typography} from '@material-ui/core';

class Appbar extends Component {
  state = { }

  render() {
    return (
      <AppBar positon='sticky'>
        <Toolbar>
          <Typography component="div">
            <Box fontWeight="frontWeightBold" m={2}>
              Fu Fu's Music App
            </Box>
            </Typography> 
        </Toolbar>
      </AppBar>
    );
  }
}

export default Appbar;