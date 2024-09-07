import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/home.jsx';
import ConvictDetailsForm from './screens/ConvictDetails/ConvictDetailsForm';
// import Login from './screens/Login/login.jsx';

function App() {
  return (
    <Router>
      <div className="App">

        {/* <ConvictDetailsForm/> */}
        <Home/>
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
