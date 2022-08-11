import React, { useState } from 'react';

import RSVPForm from './body/form/RSVPForm';
import HeroImage from './hero/HeroImage';
import Details from './body/details/Details';
import Navbar from './hero/nav/Navbar';
import Header from './hero/title/Title';
import GradientWrapper from './body/GradientWrapper';
import GuestList from './guest-list/GuestList';
import Password from './body/password/Password';

function App() {
  const [showGuestList, setShowGuestList] = useState(false);

  const isBrideOrGroom = JSON.parse(localStorage.getItem('isBrideOrGroom'));
  return (
    <div className="App">
      <HeroImage>
        <Navbar />
        <Header />
      </HeroImage>
      <GradientWrapper>
        {isBrideOrGroom ? <Password setShowGuestList={setShowGuestList} /> : null}
        {showGuestList ? <GuestList /> : (<>
          <Details />
          <RSVPForm />
        </>)}
      </GradientWrapper>
    </div>
  );
};

export default App;