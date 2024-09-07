import React from 'react';
import './profile.css'; // Assuming you are using a separate CSS file for styling

const Profile = ({ criminal }) => {
  return (
    <div className="profile-box">
      <div className="profile-header">
        <img 
          src=""
          alt="Accused" 
          className="profile-img" 
        />
        <h2 className="name"></h2>
      </div>
      <div className="profile-details">
        <p><strong>Kaidi No.:</strong></p>
        <p><strong>Aadhar No.:</strong> </p>
        <p><strong>Age:</strong> </p>
        <p><strong>Year of Imprisonment:</strong> </p>
        <p><strong>Jurisdiction:</strong> </p>
        <p><strong>Crimes Committed:</strong></p>
      </div>
    </div>
  );
};

export default Profile;
