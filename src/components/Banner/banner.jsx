import React from 'react';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
      <h2>अपराध एक समाज का काला धब्बा है</h2>
      <p>"अपराध केवल कानून का उल्लंघन नहीं, बल्कि समाज के नैतिकता और सुरक्षा का भी उल्लंघन है।</p>
      {/* <p> एक सुरक्षित और स्वस्थ समाज के लिए हमें सभी मिलकर अपराधों को रोकने के प्रयास करने चाहिए।"</p> */}
        <div className="banner-contact">
          {/* <p>ऑनलाइन वित्तीय धोखाधड़ी की रिपोर्ट करने के लिए 1930 पर कॉल करें</p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
