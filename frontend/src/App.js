import './App.css';

import RSVPForm from './body/form/RSVPForm';
import HeroImage from './hero/HeroImage';
import Details from './body/details/Details';
import Navbar from './hero/nav/Navbar';
import Header from './hero/title/Title';
import Body from './body/Body';

function App() {
  return (
    <div className="App">
      <HeroImage>
        <Navbar />
        <Header />
      </HeroImage>
      <Body>
        <Details />
        <RSVPForm />
      </Body>
    </div>
  );
};

export default App;