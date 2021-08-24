import React, { useState } from 'react';
import { Box, Button, withStyles } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useHistory } from "react-router-dom";

const NavBar = ({
  classes,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  let history = useHistory();

  const onClickNFT = () => {
    history.push('/');
    setActiveIndex(0);
  };

  const onClickWatchlist = () => {
    history.push('/watchlist');
    setActiveIndex(1);
  };

  const navList = [
    {
      title: 'NFTs',
      onClick: onClickNFT,
    },
    {
      title: 'Watchlist',
      startIcon: <StarIcon />,
      onClick: onClickWatchlist,
    },
  ];

  return (
    <Box className={classes.container} >
      {navList.map((nav, index) => (
        <Button
          key={`${nav.title}`}
          variant={activeIndex===index ? 'contained' : 'outlined'}
          color='secondary'
          classes={{
            root: classes.button,
          }}
          startIcon={nav.startIcon}
          onClick={nav.onClick}
        >
          {nav.title}
        </Button>
      ))}
    </Box>
  );
};

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    marginLeft: 16,
    fontWeight: 700,
    textTransform: 'capitalize',
  },
});

export default withStyles(styles)(NavBar);