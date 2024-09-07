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
          <img src="https://tse1.mm.bing.net/th?id=OIP.S3cM8ki8_erjYCaeT3CTYAHaHa&pid=Api&P=0&h=180" alt="Women/Children Crime" className="card-image"  />
          <h3>Admin/Judicial Authority</h3>
          <div className="card-buttons">
            <button className="btn">Login As Admin</button>
          </div>
        </div>

        <div className="card">
          <img src="https://tse1.mm.bing.net/th?id=OIP.pCkFq-7tno2hej8WnRHSbwHaEn&pid=Api&P=0&h=180" alt="Financial Fraud" className="card-image" />
          <h3>LEGAL ADVISOR</h3>
          <div className="card-buttons">
            <button className="btn">Login as Legal Aid Provider</button>
          </div>
        </div>

        <div className="card">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Pxni4BJqrpgeMw-ARP-FBwHaGL&pid=Api&P=0&h=180" alt="Other Cyber Crime" className="card-image" style={{ width: '300px' }}/>
          <h3>Learning</h3>
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
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*Ds7ioBnqnM3raNyAsm0Bag.jpeg" alt="Citizen Manual" className="learning-image"  style={{ height: '200px' }}/>
            <h3>Understanding the Bail Process</h3>
            <p>A comprehensive guide on the bail process, including eligibility criteria, legal rights, and step-by-step instructions for undertrial prisoners and legal aid providers</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="learning-card">
            <img src="https://img.indiafilings.com/learn/wp-content/uploads/2016/10/12010607/free-legal-service.jpg" alt="Cyber Safety Tips" className="learning-image" style={{ height: '200px' }} />
            <h3>Legal Aid Resources</h3>
            <p>Discover the various legal aid resources available to undertrial prisoners, including how to apply for legal assistance and the role of legal aid providers in bail applications.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="learning-card">
            <img src="https://blog.delhibarassociation.in/wp-content/uploads/2023/04/undertrials-in-india.jpg" alt="Cyber Awareness" className="learning-image" style={{ height: '200px' }} />
            <h3>Rights of Undertrial Prisoners</h3>
            <p>An overview of the fundamental rights of undertrial prisoners, including the right to fair bail, timely hearings, and legal representation in court.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>

          <div className="learning-card">
            <img src="https://www.lingayasvidyapeeth.edu.in/sanmax/wp-content/uploads/2023/06/INDIAN-LEGAL-SYSTEM.jpg" alt="Daily Digest" className="learning-image" style={{ height: '200px' }} />
            <h3>Key Judicial Decisions</h3>
            <p>Explore landmark judicial decisions that have shaped bail laws in India. Learn how these rulings influence bail eligibility and the judicial discretion exercised in bail applications.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Home;
