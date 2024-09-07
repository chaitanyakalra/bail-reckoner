// src/components/CriminalProfile/CriminalProfile.jsx
import React from 'react';
import './profilepage.css'; // Import the CSS file for styling
import Header from '../../components/Header/header';
import Profile from '../../components/Profile/profile.jsx';

const ProfilePage = ({ criminal }) => {
  return (
    <div className="profile-page">
      <Header/>
      <Profile/>
    </div>
  );
};

export default ProfilePage;