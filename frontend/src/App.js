import RSVPForm from './body/form/RSVPForm';
import HeroImage from './hero/HeroImage';
import Details from './body/details/Details';
import Navbar from './hero/nav/Navbar';
import Header from './hero/title/Title';
import GradientWrapper from './body/GradientWrapper';

function App() {
  return (
    <div className="App">
      <HeroImage>
        <Navbar />
        <Header />
      </HeroImage>
      <GradientWrapper>
        <Details />
        <RSVPForm />
      </GradientWrapper>
    </div>
  );
};

export default App;