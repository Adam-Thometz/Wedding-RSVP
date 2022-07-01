import React from 'react';
import Body from './body/Body';
import Header from './header/Header';
import Navbar from './nav/Navbar';

const Main = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Body />
    </main>
  );
};

export default Main;