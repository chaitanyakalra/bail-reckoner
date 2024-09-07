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
        <p><strong>Kaidi No :</strong>101</p>
        <p><strong>Aadhar No :</strong> 8234 2342 2342 4234 </p>
        <p><strong>Age :</strong> 56 </p>
        <p><strong>Year of Imprisonment :</strong> 2016 </p>
        <p><strong>Jurisdiction :</strong> Gurgaon </p>
      </div>
      <div className='profile-crimes'>
            <p><strong>Crimes Committed:</strong>Murder Assualt Rape Theft
            
            </p>
      </div>
    </div>
  );
};

export default Profile;
