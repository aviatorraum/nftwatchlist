import React from 'react';
import { Box, withStyles } from '@material-ui/core';
import Navbar from '../Navbar';

const Wrapper = ({
  classes,
  children,
}) => {
  return (
    <Box className={classes.container} >
      <Navbar />
      {children}
    </Box>
  );
};

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
  },
});

export default withStyles(styles)(Wrapper);