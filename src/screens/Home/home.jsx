import React from 'react';
import './home.css'
import Header from '../../components/Header/header.jsx'
import Banner from '../../components/Banner/banner.jsx'
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* You can add more sections or content here */}

      {/* Card Section */}
      <div className="cards-container">
        <div className="card">
          <img src="/path-to-your-image/women-crime.png" alt="Women/Children Crime" className="card-image" />
          <h3>WOMEN/CHILDREN RELATED CRIME</h3>
          <div className="card-buttons">
            <button className="btn">Register Anonymously</button>
          </div>
        </div>

        <div className="card">
          <img src="/path-to-your-image/financial-fraud.png" alt="Financial Fraud" className="card-image" />
          <h3>FINANCIAL FRAUD</h3>
          <div className="card-buttons">
            <button className="btn">Register a Complaint</button>
          </div>
        </div>

        <div className="card">
          <img src="/path-to-your-image/other-cyber-crime.png" alt="Other Cyber Crime" className="card-image" />
          <h3>OTHER CYBER CRIME</h3>
          <div className="card-buttons">
            <button className="btn">Register a Complaint</button>
          </div>
        </div>

        <div className="card whats-new">
          <h3>What's New</h3>
          <p>I4C, Intelligence Bureau, and Delhi Police. The claim is FAKE.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
