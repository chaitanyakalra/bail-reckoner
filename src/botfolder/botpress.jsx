

// import React, { useState } from 'react';
// import axios from 'axios';

// const FetchCrimes = () => {
//   const [aadhaarCardId, setAadhaarCardId] = useState('');
//   const [crimes, setCrimes] = useState([]);
//   const [error, setError] = useState('');

//   const fetchCrimes = async () => {
//     try {
//       // Correcting the axios request by using template literals with backticks
//       const url = `/api/accused/crimes/${aadhaarCardId}`;
//       console.log("Constructed URL", url);
//       const response = await axios.get(`http://localhost:4900/api/accused/crimes/${aadhaarCardId}`);
//       console.log(response.data.crimes); // Debugging - Check if the data is being received
//       console.log('Requesting:', url);
//       setCrimes(response.data.crimes);
//       setError('');
//     } catch (err) {
//       console.error(err); // Debugging - Check what error is being thrown
//       setError('Could not find crimes for the given Aadhaar card ID');
//       setCrimes([]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Aadhar String: ", aadhaarCardId);
    
//     if (aadhaarCardId) {
//       fetchCrimes();
//     }
//   };

//   const sendCrimesToBot = async () => {
//         try {
//           const botResponse = await axios.post('/your-bot-endpoint', {
//             text: `Crimes: ${crimes.join(', ')}`
//           });
//           console.log('Bot response:', botResponse.data);
//         } catch (err) {
//           console.error('Error sending data to bot:', err);
//         }
//       };

//   return (
//     <div>
//       <h2>Fetch Crimes by Aadhaar Card ID</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Aadhaar Card ID"
//           value={aadhaarCardId}
//           onChange={(e) => setAadhaarCardId(e.target.value)}
//         />
//         <button type="submit">Fetch Crimes</button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {crimes.length > 0 && (
//         <div>
//           <h3>Crimes:</h3>
//           <ul>
//             {crimes.map((crime, index) => (
//               <li key={index}>{crime}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchCrimes;

import React, { useState } from 'react';
import axios from 'axios';

const FetchCrimes = () => {
  const [aadhaarCardId, setAadhaarCardId] = useState('');
  const [crimes, setCrimes] = useState([]);
  const [error, setError] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const fetchCrimes = async () => {
    try {
      // Correct URL and ensure it's accessible from the frontend
      const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
      console.log("Constructed URL", url);
      const response = await axios.get(url);
      console.log('Fetched crimes:', response.data.crimes);
      setCrimes(response.data.crimes);
      setError('');

      // Send crimes data to Botpress after fetching
      await sendCrimesToBot();
    } catch (err) {
      console.error('Error fetching crimes:', err);
      setError('Could not find crimes for the given Aadhaar card ID');
      setCrimes([]);
    }
  };

//   const sendCrimesToBot = async () => {
//     try {
//       console.log('Crimes to send:', crimes);

//       const conversationId = "conv_01J776REXHGKS5DKHQ6XQWDX19";
//       if (!conversationId) {
//         throw new Error('Conversation ID is missing');
//       }

//       const response = await axios.post('http://localhost:4900/proxy-botpress', {
//         type: "webhook:event",
//         payload: {
//           conversationId,
//           text: `Crimes: ${crimes.join(', ')}`
//         }
//       });
// import axios from 'axios';

const sendCrimesToBot = async () => {
    try {
        console.log('Crimes to send:', crimes);

        const conversationId = "conv_01J776REXHGKS5DKHQ6XQWDX19";
        if (!conversationId) {
            throw new Error('Conversation ID is missing');
        }

        const webhookUrl = 'http://localhost:4900/proxy-botpress'; // Update this URL to your actual Botpress webhook URL
        const data = {
            type: "webhook:event",
            payload: {
                conversationId,
                text: `Crimes: ${crimes.join(', ')}`
            }
        };

        const headers = {
            'Content-Type': 'application/json',
            // Uncomment and set the secret if required by Botpress
            // 'x-bp-secret': 'your-secret'
        };

        const response = await axios.post(webhookUrl, data, { headers });

        // Since webhooks might not return data, log the response status
        console.log('Bot response status:', response.status);

        if (response.status === 200) {
            // Check if response data is empty
            if (!response.data) {
                console.warn('Empty response received from Botpress');
                setBotResponse('No response from Botpress');
            } else {
                // Display the raw response data
                console.log('Raw Bot Response:', response.data);
                setBotResponse(response.data);
            }
        } else {
            console.warn('Received non-200 response from Botpress:', response.status);
            setBotResponse('Received non-200 response from Botpress');
        }

    } catch (err) {
        console.error('Error sending data to Botpress:', err);
        setBotResponse('Error sending data to Botpress');
    }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aadhaarCardId) {
      fetchCrimes();
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

      {botResponse && (
        <div>
          <h3>Bot Response:</h3>
          <p>{botResponse}</p>
        </div>
      )}
    </div>
  );
};

export default FetchCrimes;

