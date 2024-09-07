import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          {/* Government and Cyber Crime logos */}
          <img src="/assets/gov-logo.png" alt="Government of India" className="gov-logo" />
          <img src="/assets/cyber-logo.png" alt="Cyber Crime" className="cyber-logo" />
        </div>
        <nav className="nav-section">
          {/* Navigation links */}
          <ul className="nav-links">
            <li><a href="/register">Register a Complaint</a></li>
            <li><a href="/track">Track Your Complaint</a></li>
            <li><a href="/suspect">Suspect Data</a></li>
            <li><a href="/cyber-volunteers">Cyber Volunteers</a></li>
            <li><a href="/learning-corner">Learning Corner</a></li>
            <li><a href="/survey">Citizen Survey</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
