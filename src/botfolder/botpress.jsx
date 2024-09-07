// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Botpress() {
//   const [aadhaarCardId, setAadhaarCardId] = useState('');
//   const [crimes, setCrimes] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchCrimes = async (id) => {
//     try {
//       const response = await axios.get('http://localhost:3000/route-accused', {
//         params: { aadhaarCardId: id }
        
//       });
//       console.log("adharcardid",id);
//       if (response.data.success) {
//         setCrimes(response.data.data.crimes || []);
//         setError(null);
//       } else {
//         setCrimes([]);
//         setError(response.data.message || 'Error fetching crimes data.');
//       }
//     } catch (err) {
//       setCrimes([]);
//       setError(`Error fetching crimes data: ${err.message}`);
//       console.error('Error fetching crimes data:', err);
//     }
//   };

//   const handleInputChange = (event) => {
//     setAadhaarCardId(event.target.value);
//   };

//   const handleFetchCrimes = (event) => {
//     event.preventDefault();
//     fetchCrimes(aadhaarCardId);
//   };

//   const sendCrimesToBot = async () => {
//     try {
//       const botResponse = await axios.post('/your-bot-endpoint', {
//         text: `Crimes: ${crimes.join(', ')}`
//       });
//       console.log('Bot response:', botResponse.data);
//     } catch (err) {
//       console.error('Error sending data to bot:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Crimes of the Accused</h2>
//       <form onSubmit={handleFetchCrimes}>
//         <input
//           type="text"
//           value={aadhaarCardId}
//           onChange={handleInputChange}
//           placeholder="Enter Aadhaar Card ID"
//           required
//         />
//         <button type="submit">Fetch Crimes</button>
//       </form>
//       {error && <p>{error}</p>}
//       <ul>
//         {crimes.length > 0 ? (
//           crimes.map((crime, index) => <li key={index}>{crime}</li>)
//         ) : (
//           <p>No crimes found.</p>
//         )}
//       </ul>
//       {crimes.length > 0 && (
//         <button onClick={sendCrimesToBot}>Send Crimes to Bot</button>
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';

const FetchCrimes = () => {
  const [aadhaarCardId, setAadhaarCardId] = useState('');
  const [crimes, setCrimes] = useState([]);
  const [error, setError] = useState('');

  const fetchCrimes = async () => {
    try {
      // Correcting the axios request by using template literals with backticks
      const url = `/api/accused/crimes/${aadhaarCardId}`;
      console.log("Constructed URL", url);
      const response = await axios.get(`http://localhost:4900/api/accused/crimes/${aadhaarCardId}`);
      console.log(response.data.crimes); // Debugging - Check if the data is being received
      console.log('Requesting:', url);
      setCrimes(response.data.crimes);
      setError('');
    } catch (err) {
      console.error(err); // Debugging - Check what error is being thrown
      setError('Could not find crimes for the given Aadhaar card ID');
      setCrimes([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aadhar String: ", aadhaarCardId);
    
    if (aadhaarCardId) {
      fetchCrimes();
    }
  };

  const sendCrimesToBot = async () => {
        try {
          const botResponse = await axios.post('/your-bot-endpoint', {
            text: `Crimes: ${crimes.join(', ')}`
          });
          console.log('Bot response:', botResponse.data);
        } catch (err) {
          console.error('Error sending data to bot:', err);
        }
      };

  return (
    <div>
      <h2>Fetch Crimes by Aadhaar Card ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Aadhaar Card ID"
          value={aadhaarCardId}
          onChange={(e) => setAadhaarCardId(e.target.value)}
        />
        <button type="submit">Fetch Crimes</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {crimes.length > 0 && (
        <div>
          <h3>Crimes:</h3>
          <ul>
            {crimes.map((crime, index) => (
              <li key={index}>{crime}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FetchCrimes;
