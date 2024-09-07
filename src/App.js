import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/home.jsx';
import Login from './screens/Login/login.jsx';
import ConvictDetails from './screens/ConvictDetails/ConvictDetailsForm.jsx'
import Botpress from './botfolder/botpress.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accusedList" element={<Botpress />} />
          <Route path="/convictDetails" element={<ConvictDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
