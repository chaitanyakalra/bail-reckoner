import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-section">
          <img src="https://tse2.mm.bing.net/th?id=OIP.H7taM0mDf-Pb5mAm5qsSOwHaHa&pid=Api&P=0&h=180" alt="Government of India" className="gov-logo" />
          <div className="ministry-text">
            <p>भारत सरकार</p>
            <p>GOVERNMENT OF INDIA</p>
            <p>गृह मंत्रालय</p>
            <p>MINISTRY OF HOME AFFAIRS</p>
          </div>
        </div>
        <div className="center-section">
  <div className="portal-title">
    <p className="hindi-title"></p>
    <p className="english-title">Official Bail Reckoner:</p>
    <p className="english-title">Your Guide to Bail Procedures and Regulations</p>
  </div>
</div>

        <div className="right-section">
          <img src="https://tse4.mm.bing.net/th?id=OIP.qmFuZ_CsgS4Pb-cLkt7X4QHaHa&pid=Api&P=0&h=180" alt="Azadi Ka Amrit Mahotsav" className="azadi-logo" />
        </div>
      </div>
      <nav className="nav-section">
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutUs">General Info</Link></li>
          <li><Link to="/login">Login As Admin</Link></li>
          <li><Link to="/legal-aid-login">Login As Legal Aid Provider</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;