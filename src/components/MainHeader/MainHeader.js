import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page, ando en el branch de lewis</h1>
      <Navigation/>
    </header>
  );
};

export default MainHeader;
