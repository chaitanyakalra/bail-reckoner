import React from 'react';
import './Header.css';

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
          <li><a href="/register">Home</a></li>
          <li><a href="/track">General Info</a></li>
          <li><a href="/suspect">Login</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;