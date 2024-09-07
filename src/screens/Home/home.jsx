import React from 'react';
import './home.css'
import Header from '../../components/Header/header.jsx'
import Banner from '../../components/Banner/banner.jsx'
import navigate from 'navigate';
const Home = () => {

  

  // Handle button click to redirect to login page
  const handleAnonymousRegister = () => {
    navigate('/login'); // This will navigate to the login page
  };
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
            <button className="btn">Login As Admin</button>
          </div>
        </div>

        <div className="card">
          <img src="/path-to-your-image/financial-fraud.png" alt="Financial Fraud" className="card-image" />
          <h3>FINANCIAL FRAUD</h3>
          <div className="card-buttons">
            <button className="btn">Login as Legal Aid Provider</button>
          </div>
        </div>

        <div className="card">
          <img src="/path-to-your-image/other-cyber-crime.png" alt="Other Cyber Crime" className="card-image" />
          <h3>OTHER CYBER CRIME</h3>
          <div className="card-buttons">
            <button className="btn">Login as User</button>
          </div>
        </div>

        <div className="card whats-new">
          <h3>What's New</h3>
          <p>I4C, Intelligence Bureau, and Delhi Police. The claim is FAKE.</p>
        </div>
      </div>

    {/* Learning Corner Section */}
    <div className="learning-corner">
        <h2 className="section-title">Learning Corner</h2>
        <div className="learning-cards">
          
          <div className="learning-card">
            <img src="/path-to-your-image/citizen-manual.png" alt="Citizen Manual" className="learning-image" />
            <h3>CITIZEN MANUAL</h3>
            <p>It is a document to describe the functionalities and workflow that is provided to citizens on the cybercrime portal for reporting cybercrimes.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="learning-card">
            <img src="/path-to-your-image/cyber-safety-tips.png" alt="Cyber Safety Tips" className="learning-image" />
            <h3>CYBER SAFETY TIPS</h3>
            <p>To stay safe in the online world, it is important to follow important cyber safety practices which may help in protecting ourselves and our families from imminent threats.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="learning-card">
            <img src="/path-to-your-image/cyber-awareness.png" alt="Cyber Awareness" className="learning-image" />
            <h3>CYBER AWARENESS</h3>
            <p>Cyber awareness is an ongoing process of educating employees and citizens about the threats in cyberspace and how to act responsibly.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="learning-card">
            <img src="/path-to-your-image/daily-digest.png" alt="Daily Digest" className="learning-image" />
            <h3>DAILY DIGEST</h3>
            <p>Comprehensive document prepared by the Indian Cybercrime Coordination Centre (I4C) to educate about cyber fraud modus operandi.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Home;
