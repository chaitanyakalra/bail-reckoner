import React, { useState } from 'react';
import './convictdetails.css'; // Importing regular global CSS
import Header from '../../components/Header/header.jsx';
import Banner from '../../components/Banner/banner.jsx';

const ConvictDetailsForm = () => {
  const [adhar, setAdhar] = useState('');
  const [prisoner, setPrisoner] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateAadhaar(adhar)) {
      // Add your form submission logic here
    } else {
      alert('Invalid Aadhaar number');
    }
  };

  const validateAadhaar = (number) => {
    return /^\d{12}$/.test(number); // Simple validation for Aadhaar (12 digits)
  };

  return (
    <div>
    <Header/>
    <div className="container"> {/* Using regular className from App.css */}
      <h1>Convict Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup"> {/* Using regular className */}
          <label htmlFor="adhar">Aadhaar Card Number:</label>
          <input
            type="text"
            id="adhar"
            name="adhar"
            placeholder="Enter Aadhaar number"
            value={adhar}
            onChange={(e) => setAdhar(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="prisoner">Prisoner Number:</label>
          <input
            type="text"
            id="prisoner"
            name="prisoner"
            placeholder="Enter prisoner number"
            value={prisoner}
            onChange={(e) => setPrisoner(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="state">Jurisdiction:</label>
          <select
            name="state"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="" disabled>Select your state</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CG">Chhattisgarh</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MH">Maharashtra</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OD">Odisha</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TR">Tripura</option>
            <option value="TG">Telangana</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option>
            <option value="AN">Andaman & Nicobar Islands (UT)</option>
            <option value="CH">Chandigarh (UT)</option>
            <option value="DN">Dadra & Nagar Haveli and Daman & Diu (UT)</option>
            <option value="DL">Delhi [National Capital Territory (NCT)]</option>
            <option value="JK">Jammu & Kashmir (UT)</option>
            <option value="LA">Ladakh (UT)</option>
            <option value="LD">Lakshadweep (UT)</option>
            <option value="PY">Puducherry (UT)</option>
          </select>
        </div>
        <button type="submit" disabled={!adhar || !prisoner || !state}>Get Details</button>
      </form>
    </div>
    </div>
  );
};

export default ConvictDetailsForm;