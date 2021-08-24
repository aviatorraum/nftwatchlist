import React, { useState } from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';
import CardGrid from '../../components/CardGrid';
import PageBar from '../../components/PageBar';
import usePagination from '../../hooks/usePagination';
import useInterval from '../../hooks/useInterval';
import { toNumber } from '../../utils/numberUtils';

const WatchlistScreen = ({
  classes,
  list,
  listSize,
  totalSoldPrice,
  handleGet,
  handleRemove,
}) => {
  const [count, setCount] = useState(0);
  const {
    page,
    onPageChange,
  } = usePagination(list);

  const totalLastSale = list.reduce((res, item) => (
    res += toNumber(item.getIn(['last_sale', 'payment_token', 'usd_price']))
  ), 0);

  useInterval(() => {
    if(listSize===0) return;

    if(count<=listSize) {
      const item = list.get(count);
      const query = {
        token_id: item.get('token_id'),
        event_type: 'successful',
      };
      handleGet(query);
      setCount(c => (c===listSize-1) ? 0 : c+1);
    }
  }, 10 * 1000);

  return (
    <Box className={classes.container}>
      <Typography className={classes.amount}>
        Total watched values: $ {totalLastSale} (USD)
      </Typography>
      <Typography className={classes.amount}>
        Total watched assets sold price: $ {totalSoldPrice} (USD)
      </Typography>
      <CardGrid
        hide={list.length===0}
        list={list}
        type='REMOVE'
        action={handleRemove}
      />
      <PageBar
        page={page}
        count={list.length || 0}
        onPageChange={onPageChange}
      />
    </Box>
  );
};

const styles = () => ({
  container: {
    padding: 16,
  },
  amount: {
    fontSize: 18,
  },
});

export default withStyles(styles)(WatchlistScreen);