import React, { Fragment } from 'react';
import { Box, Grid, withStyles } from '@material-ui/core';
import NFTCard from '../Card';

const CardGrid = ({
  hide, 
  classes,
  list,
  type,
  action,
}) => {
  if(hide) return <Fragment />;
  
  return (
    <Box className={classes.container} >
      <Grid container>
        {list.map((data) => {
          const id = data.get('id');
          return (
            <Grid item
              lg={3}
              md={4}
              sm={6}
              key={`card_grid_${id}`}
            >
              <NFTCard
                type={type}
                data={data}
                action={action}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const styles = () => ({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
  },
  button: {
    marginLeft: 16,
  },
});

export default withStyles(styles)(CardGrid);