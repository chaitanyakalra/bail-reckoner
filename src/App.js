import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/home.jsx';
import ConvictDetailsForm from './screens/ConvictDetails/ConvictDetailsForm';
import Login from './screens/Login/login.jsx';
import Botpress from './botfolder/botpress.jsx';
import Profile from './components/Profile/profile.jsx';
import ProfilePage from './screens/Profilepage/profilepage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />

          
          <Route path="/login" element={<Login />} />

          
          <Route path="/accusedList" element={<Botpress />} />

          
          <Route path="/convictDetails" element={<ConvictDetailsForm />} />

          <Route path="/profile/:aadhaarCardId" element={<Profile />} />



          <Route path="/profilePage" element={<ProfilePage />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
