import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../components/_SearchBar';
import DataList from '../components/DataList';
import TopNav from '../components/TopNav';

export default function MainPage() {
  const searched = useSelector(state => state.searched);

  return(
    <>
      <TopNav/>
      {searched &&
        <>
          <Search/>
          <DataList/>
        </>
      }
      {!searched &&
        <Search/>
      }
    </>
  );
}