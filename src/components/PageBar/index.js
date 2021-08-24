import React from 'react';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';

export const SIZE = 20;

const PageBar = ({
  page,
  count=10,
  onPageChange,
}) => {
  const isFirstPage = page <= 1;

  return (
    <Box display='flex' justifyContent='center'>
      <Pagination
        color='primary'
        page={page}
        count={count}
        hideNextButton={isFirstPage}
        hidePrevButton={isFirstPage}
        onChange={onPageChange}
      />
    </Box>
  );
};

PageBar.defaultProps = {
  page: 1,
  totalCount: 0,
  totalPageCount: 0,
};

export default PageBar;
