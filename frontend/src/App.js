import { Route, Routes } from 'react-router-dom';
import './App.css';

import RSVPForm from './form/RSVPForm';
import Main from './main-page/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path='/rsvp' element={<RSVPForm />} />
      </Routes>
    </div>
  );
};

export default App;