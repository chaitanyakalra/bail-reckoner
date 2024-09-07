import React from 'react';


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>आधुनिक तकनीकियों के इस्तेमाल के कारण साइबर सुरक्षा...</h2>
        <p>साइबर स्वच्छ प्रथाओं का पालन करें और साइबर क्राइम से बचें</p>
        <a href="https://cybercrime.gov.in" className="btn banner-btn">cybercrime.gov.in</a>
        <div className="banner-contact">
          <p>ऑनलाइन वित्तीय धोखाधड़ी की रिपोर्ट करने के लिए 1930 पर कॉल करें</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
