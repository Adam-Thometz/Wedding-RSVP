import './App.css';

import Navbar from './nav/Navbar';
import Header from './header/Header';
import Body from './body/Body';
import RSVPForm from './form/RSVPForm';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <Body />
        <RSVPForm />
      </div>
  );
};

export default App;