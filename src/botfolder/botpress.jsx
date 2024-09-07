import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Botpress() {
  const [aadhaarCardId, setAadhaarCardId] = useState(''); // State to store Aadhaar card ID
  const [crimes, setCrimes] = useState([]);
  const [error, setError] = useState(null);

  const fetchCrimes = async (id) => {
    try {
      const response = await axios.get('/api/accused', {
        params: { aadhaarCardId: id } // Fetch crimes based on Aadhaar card ID
      });
      setCrimes(response.data.data.crimes);
      setError(null); // Clear any previous errors
    } catch (err) {
      setCrimes([]); // Clear crimes if there's an error
      setError('Error fetching crimes data.');
      console.error('Error fetching crimes data:', err);
    }
  };

  const handleInputChange = (event) => {
    setAadhaarCardId(event.target.value);
  };

  const handleFetchCrimes = (event) => {
    event.preventDefault(); // Prevent form submission
    fetchCrimes(aadhaarCardId); // Fetch crimes based on the input Aadhaar card ID
  };

  const sendCrimesToBot = async () => {
    try {
      const botResponse = await axios.post('/your-bot-endpoint', {
        text: `Crimes: ${crimes.join(', ')}`,
      });
      console.log('Bot response:', botResponse.data);
    } catch (err) {
      console.error('Error sending data to bot:', err);
    }
  };

  return (
    <div>
      <h2>Crimes of the Accused</h2>
      <form onSubmit={handleFetchCrimes}>
        <input
          type="text"
          value={aadhaarCardId}
          onChange={handleInputChange}
          placeholder="Enter Aadhaar Card ID"
          required
        />
        <button type="submit">Fetch Crimes</button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {crimes.length > 0 ? (
          crimes.map((crime, index) => <li key={index}>{crime}</li>)
        ) : (
          <p>No crimes found.</p>
        )}
      </ul>
      {crimes.length > 0 && (
        <button onClick={sendCrimesToBot}>Send Crimes to Bot</button>
      )}
    </div>
  );
}
