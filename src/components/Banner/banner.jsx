import React from 'react';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
      <h2>Crime: A Stain on Society</h2>
      <p>"Crime is not merely a violation of the law; it represents a deeper assault on the moral fabric and safety of society."</p>
      </div>
        <div className="banner-contact">
          {/* <p>ऑनलाइन वित्तीय धोखाधड़ी की रिपोर्ट करने के लिए 1930 पर कॉल करें</p> */}
        </div>
        <div class="stats-banner">
        <div class="stat-item">
            <div class="stat-icon">📄✅</div>
            <p class="stat-value">1700+</p>
            <p class="stat-label">Trusted Clients</p>
        </div>
        <div class="stat-item">
            <div class="stat-icon">📄✅</div>
            <p class="stat-value navy-text">$180 M</p>
            <p class="stat-label">Recovered</p>
        </div>
        <div class="stat-item">
            <div class="stat-icon">⚖️</div>
            <p class="stat-value">98%</p>
            <p class="stat-label">Successful Cases</p>
        </div>
        <div class="stat-item">
            <div class="stat-icon">⚖️</div>
            <p class="stat-value">10,6</p>
            <p class="stat-label">Injury Cases</p>
        </div>
    </div>
    </div>
  );
};

export default Banner;
