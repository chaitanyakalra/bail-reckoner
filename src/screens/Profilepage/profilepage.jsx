// src/components/CriminalProfile/CriminalProfile.jsx
import React from 'react';
import './profilepage.css'; // Import the CSS file for styling
import Header from '../../components/Header/header';
import Profile from '../../components/Profile/profile.jsx';
import Footer from '../../components/Footer/footer';
const ProfilePage = ({ criminal }) => {
  return (
    <div className="profile-page">
      <Header/>
      <Profile/>
      <Footer/>

    </div>
  );
};

export default ProfilePage;