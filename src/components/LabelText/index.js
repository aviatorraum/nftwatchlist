import React from 'react';
import { withStyles, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

  const LabelText = ({
    label,
    text,
    classes,
  }) => {
    return (
      <Box className={classes.contentContainer}>
        <Typography className={classes.label}>
          {label}
        </Typography>
        <Typography className={classes.text}>
          {text}
        </Typography>
      </Box>
    );
  };

  const styles = () => ({
    contentContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: 12,
      fontWeight: 700,
    },
    text: {
      fontSize: 12,
    },
  });
  export default withStyles(styles)(LabelText);