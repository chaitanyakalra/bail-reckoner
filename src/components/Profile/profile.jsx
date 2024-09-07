// import React from 'react';
// import './profile.css'; // Assuming you are using a separate CSS file for styling

// const Profile = ({ criminal }) => {
//   return (
//     <div className="profile-box">
//       <div className="profile-header">
//         <img 
//           src=""
//           alt="Accused" 
//           className="profile-img" 
//         />
//         <h2 className="name"></h2>
//       </div>
//       <div className="profile-details">
//         <p><strong>Kaidi No.:</strong></p>
//         <p><strong>Aadhar No.:</strong> </p>
//         <p><strong>Age:</strong> </p>
//         <p><strong>Year of Imprisonment:</strong> </p>
//         <p><strong>Jurisdiction:</strong> </p>
//         <p><strong>Crimes Committed:</strong></p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './profile.css'; // Assuming you are using a separate CSS file for styling
import Header from '../Header/header';

const Profile = () => {
  const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
  const [criminal, setCriminal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCriminalDetails = async () => {
      try {
      const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
      console.log("Constructed URL", url);
      const response = await axios.get(url);
        setCriminal(response.data);
      } catch (err) {
        setError('Failed to fetch criminal details');
      }
    };

    if (aadhaarCardId) {
      fetchCriminalDetails();
    }
  }, [aadhaarCardId]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!criminal) {
    return <div>Loading loading...</div>;
  }

  return (
    <>
    <div className="ActualHeader">
    <Header/>
    </div>
    <div className="profile-box">
      
      <div className="profile-header">
        <img 
          src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
          
          className="profile-img" 
        />
        <h2 className="name">{criminal.name}</h2>
        
      </div>
      <div className="profile-details">
      <br />  
        
        
        <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
        <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
        <p><strong>Age:</strong> {criminal.age}</p>
        <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
        <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
        <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
      </div>
    </div>
    </>
  );
};

export default Profile;

