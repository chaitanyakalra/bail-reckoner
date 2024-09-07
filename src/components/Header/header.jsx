import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-section">
          <img src="/assets/gov-logo.png" alt="Government of India" className="gov-logo" />
          <div className="ministry-text">
            <p>भारत सरकार</p>
            <p>GOVERNMENT OF INDIA</p>
            <p>गृह मंत्रालय</p>
            <p>MINISTRY OF HOME AFFAIRS</p>
          </div>
        </div>
        <div className="center-section">
          <img src="/assets/cyber-logo.png" alt="Indian Cyber Crime Coordination" className="cyber-logo" />
          <div className="portal-title">
            <p className="hindi-title">राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल</p>
            <p className="english-title">National Cyber Crime Reporting Portal</p>
          </div>
        </div>
        <div className="right-section">
          <img src="/assets/azadi-logo.png" alt="Azadi Ka Amrit Mahotsav" className="azadi-logo" />
        </div>
      </div>
      <nav className="nav-section">
        <ul className="nav-links">
          <li><a href="/register">REGISTER A COMPLAINT</a></li>
          <li><a href="/track">TRACK YOUR COMPLAINT</a></li>
          <li><a href="/suspect">SUSPECT DATA</a></li>
          <li><a href="/cyber-volunteers">CYBER VOLUNTEERS</a></li>
          <li><a href="/learning-corner">LEARNING CORNER</a></li>
          <li><a href="/survey">CITIZEN SURVEY</a></li>
          <li><a href="/contact">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
