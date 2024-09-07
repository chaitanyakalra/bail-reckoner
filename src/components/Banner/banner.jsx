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
      
      <div className="stats-banner">
        <div className="stat-item">
          <div className="stat-icon">📄✅</div>
          <p className="stat-value navy-text">500+</p> {/* Updated to show bail-related data */}
          <p className="stat-label">Bailed Prisoners</p> {/* Custom label for your project */}
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">📄✅</div>
          <p className="stat-value navy-text">200+</p> {/* Example of bail applications */}
          <p className="stat-label">Total Cases Handled</p> {/* Custom label for your project */}
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">⚖️</div>
          <p className="stat-value navy-text">85%</p> {/* Success rate */}
          <p className="stat-label">Successful Bail Grants</p> {/* Custom label for success */}
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">⚖️</div>
          <p className="stat-value navy-text">500</p> {/* Number of pending applications */}
          <p className="stat-label">Pending Bail Applications</p> {/* Custom label */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
