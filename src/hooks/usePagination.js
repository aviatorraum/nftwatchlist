import { useState } from 'react';

const DEFAULT_PAYLOAD = {
  offset: 1,
  limit: 20,
  order_direction: 'desc',
  order_by: 'sale_count',
};

const usePagination = (action) => {
  const [page, setPage] = useState(1);
  const [payload, setPayload] = useState(DEFAULT_PAYLOAD);

  const onPageChange = (event, value) => {

    const newPayload = {
      ...payload,
      offset: value,
      limit: 20,
    };
    setPage(value);
    action(newPayload);
  };

  return {
    page,
    onPageChange,
    payload,
    setPayload,
  };
};

export default usePagination;
