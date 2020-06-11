import React from 'react';

import { useRecoilState } from 'recoil';
import { filterState } from './store';

const Filter = () => {
  const [filterValue, setFilterValue] = useRecoilState(filterState)
  return (
    <div>
      <input value={filterValue} onChange={e => setFilterValue(e.target.value)} />
    </div>
  );
};

export default Filter;