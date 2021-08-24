import React, { useEffect } from 'react';
import { withStyles, Box } from '@material-ui/core';
import CardGrid from '../../components/CardGrid';
import PageBar from '../../components/PageBar';
import usePagination from '../../hooks/usePagination';

const HomeScreen = ({
  nftList,
  handleAdd,
  handleGetList,
}) => {
  const {
    page,
    onPageChange,
    payload,
  } = usePagination(handleGetList);

  useEffect(()=>{
    handleGetList(payload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <CardGrid
        hide={nftList.size===0}
        list={nftList}
        type='ADD'
        action={handleAdd}
      />
      <PageBar
        page={page}
        onPageChange={onPageChange}
      />
    </Box>
  );
};

const styles = () => ({
});

export default withStyles(styles)(HomeScreen);