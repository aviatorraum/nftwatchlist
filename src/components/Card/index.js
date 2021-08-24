import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LabelText from '../LabelText';
import { priceFormat, numberFormat } from '../../utils/numberUtils';

const NFTCard = ({
  type,
  data,
  classes,
  action,
}) => {
  const [disabled, setDisabled] = useState(false);

  const lastSalePrice = data.getIn(['last_sale', 'payment_token', 'usd_price']);
  const lastSaleText = (lastSalePrice) ? `${priceFormat(lastSalePrice)} USD` : '-'
  const buttonText = (type==='ADD')
    ? 'Add to Watchlist'
    : 'Remove from Watchlist'

  const onClick = (item) => () => {
    action(item)
    setDisabled(true);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='140'
        image={data.get('image_thumbnail_url')}
        title='Contemplative Reptile'
      />
      <CardContent>
        <Typography className={classes.title}>
          {data.get('name')}
        </Typography>
        <LabelText label='num_sales' text={numberFormat(data.get('num_sales'))}/>
        <LabelText label='last_sale_price' text={lastSaleText}/>
        <LabelText label='address' text={data.getIn(['asset_contract', 'address'])}/>
      </CardContent>
      <Button
        disabled={disabled}
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={onClick(data)}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

const styles = () => ({
  root: {
    minWidth: 230,
    marginRight: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  content: {
    fontSize: 12,
  },
  button: {
    width: '100%',
    borderRadius: 0,
  },
});

export default withStyles(styles)(NFTCard);