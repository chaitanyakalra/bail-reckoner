// import React from 'react';
// import './profile.css'; // Assuming you are using a separate CSS file for styling

// const Profile = ({ criminal }) => {
//   return (
//     <div className="profile-box">
//       <div className="profile-header">
//         <img 
//           src=""
//           alt="Accused" 
//           className="profile-img" 
//         />
//         <h2 className="name"></h2>
//       </div>
//       <div className="profile-details">
//         <p><strong>Kaidi No.:</strong></p>
//         <p><strong>Aadhar No.:</strong> </p>
//         <p><strong>Age:</strong> </p>
//         <p><strong>Year of Imprisonment:</strong> </p>
//         <p><strong>Jurisdiction:</strong> </p>
//         <p><strong>Crimes Committed:</strong></p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './profile.css'; // Assuming you are using a separate CSS file for styling
// import Header from '../Header/header';
// import Footer from '../Footer/footer';

// const Profile = () => {
//   const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
//   const [criminal, setCriminal] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCriminalDetails = async () => {
//       try {
//       const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
//       console.log("Constructed URL", url);
//       const response = await axios.get(url);
//         setCriminal(response.data);
//       } catch (err) {
//         setError('Failed to fetch criminal details');
//       }
//     };

//     if (aadhaarCardId) {
//       fetchCriminalDetails();
//     }
//   }, [aadhaarCardId]);

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   if (!criminal) {
//     return <div>Loading loading...</div>;
//   }

//   return (
//     <>
//     <div className="ActualHeader">
//     <Header/>
//     </div>
//     <div className="profile-box">
      
//       <div className="profile-header">
//         <img 
//           src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
          
//           className="profile-img" 
//         />
//         <h2 className="name">{criminal.name}</h2>
        
//       </div>
//       <div className="profile-details">
//       <br />  
        
        
//         <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//         <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//         <p><strong>Age:</strong> {criminal.age}</p>
//         <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//         <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//         <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './profile.css'; // Assuming you are using a separate CSS file for styling
// import Header from '../Header/header';
// import Footer from '../Footer/footer';

// const Profile = () => {
//   const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
//   const [criminal, setCriminal] = useState(null);
//   const [error, setError] = useState(null);
//   const [showIPCs, setShowIPCs] = useState(false); // State to control the IPCs section
//   const [showBailButton, setShowBailButton] = useState(false); // State to control the bail button
//   const [bailEligibility, setBailEligibility] = useState(null); // State to hold bail eligibility

//   useEffect(() => {
//     const fetchCriminalDetails = async () => {
//       try {
//         const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
//         console.log("Constructed URL", url);
//         const response = await axios.get(url);
//         setCriminal(response.data);
//       } catch (err) {
//         setError('Failed to fetch criminal details');
//       }
//     };

//     if (aadhaarCardId) {
//       fetchCriminalDetails();
//     }
//   }, [aadhaarCardId]);

//   const handleShowIPCs = () => {
//     setShowIPCs(true); // Show IPC sections
//     setShowBailButton(true); // Show "Check Bail Eligibility" button after IPCs are shown
//   };

//   const checkBailEligibility = () => {
//     // Here you would implement the logic to check bail eligibility.
//     // This is a simple placeholder logic based on the years of imprisonment.
//     if (criminal.yearsOfImprisonment < 7) {
//       setBailEligibility('Eligible for Bail');
//     } else {
//       setBailEligibility('Not Eligible for Bail');
//     }
//   };

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   if (!criminal) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="ActualHeader">
//         <Header />
//       </div>
//       <div className="profile-box">
//         <div className="profile-header">
//           <img
//             src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'}
//             className="profile-img"
//             alt="Criminal"
//           />
//           <h2 className="name">{criminal.name}</h2>
//         </div>
//         <div className="profile-details">
//           <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//           <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//           <p><strong>Age:</strong> {criminal.age}</p>
//           <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//           <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//           <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>

//           {/* Add button to show IPCs */}
//           {!showIPCs && (
//             <button onClick={handleShowIPCs} className="list-ipcs-btn">
//               List IPCs
//             </button>
//           )}

//           {/* Display IPCs if button is clicked */}
//           {showIPCs && (
//             <div className="ipc-section">
//               <h3>IPC Sections</h3>
//               {criminal.ipcSections && criminal.ipcSections.length > 0 ? (
//                 <ul>
//                   {criminal.ipcSections.map((ipc, index) => (
//                     <li key={index}>
//                       <strong>{ipc.section}:</strong> {ipc.description}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No IPC sections available.</p>
//               )}
//             </div>
//           )}

//           {/* Show "Check Bail Eligibility" button after IPCs are listed */}
//           {showBailButton && !bailEligibility && (
//             <button onClick={checkBailEligibility} className="check-bail-btn">
//               Check Bail Eligibility
//             </button>
//           )}

//           {/* Show bail eligibility result */}
//           {bailEligibility && (
//             <div className="bail-eligibility">
//               <h4>Bail Eligibility Status: {bailEligibility}</h4>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './profile.css'; // Assuming you are using a separate CSS file for styling
// import Header from '../Header/header';
// import Footer from '../Footer/footer';

// const Profile = () => {
//   const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
//   const [criminal, setCriminal] = useState(null);
//   const [error, setError] = useState(null);
//   const [showIpcs, setShowIpcs] = useState(false); // To show IPC sections
//   const [bailResult, setBailResult] = useState(null); // To store the bail eligibility result

//   useEffect(() => {
//     const fetchCriminalDetails = async () => {
//       try {
//         const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
//         const response = await axios.get(url);
//         setCriminal(response.data);
//       } catch (err) {
//         setError('Failed to fetch criminal details');
//       }
//     };

//     if (aadhaarCardId) {
//       fetchCriminalDetails();
//     }
//   }, [aadhaarCardId]);

//   // Bail eligibility logic based on the new schema
//   const isBailable = (data) => {
//     // Weights for each factor
//     const weights = {
//       ipcSeverity: 60,         // IPC section severity (higher weight)
//       yearsOfImprisonment: 30, // Number of years sentenced
//       finesBonds: 10           // Surety bonds, personal bonds, and fines
//     };

//     // IPC Severity Mapping: Each IPC section is assigned a severity score (1 to 5)
//     const ipcSeverityMap = {
//       '302': 5, // Murder (Section 302 IPC)
//       '379': 2, // Theft (Section 379 IPC)
//       '324': 3, // Assault (Section 324 IPC)
//       '420': 3, // Fraud (Section 420 IPC)
//       '323': 1  // Minor Offense (Section 323 IPC)
//       // Add more mappings as needed based on the IPC sections
//     };

//     // Calculate total IPC severity by aggregating the severities of all IPCs
//     let ipcSeverityTotal = 0;
//     data.ipcSections.forEach(ipc => {
//       ipcSeverityTotal += ipcSeverityMap[ipc.section] || 0;  // Default 0 if IPC section not found in the map
//     });

//     // Normalize the severity to fit in a 5-point scale
//     let ipcSeverity = ipcSeverityTotal / data.ipcSections.length;

//     // Years of Imprisonment: High severity for longer imprisonment terms
//     let imprisonmentRisk = data.yearsOfImprisonment > 10 ? 5 : (data.yearsOfImprisonment > 5 ? 3 : 1);

//     // Fines and Bonds: Higher fines or bonds reduce bail chances (inverse logic)
//     let finesBondsRisk = (data.fines > 0 || data.suretyBonds > 0 || data.personalBonds > 0) ? 3 : 1;

//     // Calculate total score (out of 100) using weighted average
//     let totalScore = (
//       (weights.ipcSeverity * ipcSeverity) / 5 +
//       (weights.yearsOfImprisonment * imprisonmentRisk) / 5 +
//       (weights.finesBonds * finesBondsRisk) / 5
//     );

//     // Decision based on the calculated total score
//     if (totalScore < 50) {
//       return {
//         status: 'Bailable',
//         score: totalScore,
//         reasoning: `The person is considered bailable based on a score of ${totalScore}. Factors like low crime severity and shorter imprisonment term favor bail.`
//       };
//     } else {
//       return {
//         status: 'Not Bailable',
//         score: totalScore,
//         reasoning: `The person is not bailable based on a score of ${totalScore}. Factors like high crime severity or long imprisonment term reduce chances of bail.`
//       };
//     }
//   };

//   // Function to handle the IPC listing and bail eligibility check
//   const handleCheckBailEligibility = () => {
//     if (criminal) {
//       const bailEligibility = isBailable({
//         ipcSections: criminal.ipcSections, // Use ipcSections from the criminal object
//         yearsOfImprisonment: criminal.yearsOfImprisonment,
//         fines: criminal.fines,
//         suretyBonds: criminal.suretyBonds,
//         personalBonds: criminal.personalBonds
//       });
//       setBailResult(bailEligibility);
//     }
//   };

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   if (!criminal) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="ActualHeader">
//         <Header />
//       </div>
//       <div className="profile-box">
//         <div className="profile-header">
//           <img 
//             src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
//             alt="Profile" 
//             className="profile-img" 
//           />
//           <h2 className="name">{criminal.name}</h2>
//         </div>
//         <div className="profile-details">
//           <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//           <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//           <p><strong>Age:</strong> {criminal.age}</p>
//           <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//           <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//           <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
//         </div>
        
//         {showIpcs ? (
//           <div className="ipc-sections">
//             <h3>IPC Sections</h3>
//             <ul>
//               {criminal.ipcSections.map((section, index) => (
//                 <li key={index}><strong>{section.section}:</strong> {section.description}</li>
//               ))}
//             </ul>
//             {bailResult ? (
//               <div className="bail-result">
//                 <h3>Bail Eligibility</h3>
//                 <p><strong>Status:</strong> {bailResult.status}</p>
//                 <p><strong>Score:</strong> {bailResult.score}</p>
//                 <p><strong>Reasoning:</strong> {bailResult.reasoning}</p>
//               </div>
//             ) : (
//               <button onClick={handleCheckBailEligibility}>Check Bail Eligibility</button>
//             )}
//           </div>
//         ) : (
//           <button onClick={() => setShowIpcs(true)}>List IPCs</button>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './profile.css'; // Assuming you are using a separate CSS file for styling
// import Header from '../Header/header';
// import Footer from '../Footer/footer';

// const Profile = () => {
//   const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
//   const [criminal, setCriminal] = useState(null);
//   const [error, setError] = useState(null);
//   const [showIpcs, setShowIpcs] = useState(false); // To show IPC sections
//   const [bailResult, setBailResult] = useState(null); // To store the bail eligibility result

//   useEffect(() => {
//     const fetchCriminalDetails = async () => {
//       try {
//         const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
//         const response = await axios.get(url);
//         setCriminal(response.data);
//       } catch (err) {
//         setError('Failed to fetch criminal details');
//       }
//     };

//     if (aadhaarCardId) {
//       fetchCriminalDetails();
//     }
//   }, [aadhaarCardId]);

//   // Bail eligibility logic based on the new schema
//   const isBailable = (data) => {
//     // Weights for each factor
//     const weights = {
//       ipcSeverity: 60,         // IPC section severity (higher weight)
//       yearsOfImprisonment: 30, // Number of years sentenced
//       finesBonds: 10           // Surety bonds, personal bonds, and fines
//     };

//     // IPC Severity Mapping: Each IPC section is assigned a severity score (1 to 5)
//     const ipcSeverityMap = {
//       '302': 5, // Murder (Section 302 IPC)
//       '379': 2, // Theft (Section 379 IPC)
//       '324': 3, // Assault (Section 324 IPC)
//       '420': 3, // Fraud (Section 420 IPC)
//       '323': 1  // Minor Offense (Section 323 IPC)
//       // Add more mappings as needed based on the IPC sections
//     };

//     // Calculate total IPC severity by aggregating the severities of all IPCs
//     let ipcSeverityTotal = 0;
//     data.ipcSections.forEach(ipc => {
//       ipcSeverityTotal += ipcSeverityMap[ipc.section] || 0;  // Default 0 if IPC section not found in the map
//     });

//     // Normalize the severity to fit in a 5-point scale
//     let ipcSeverity = ipcSeverityTotal / data.ipcSections.length;

//     // Years of Imprisonment: High severity for longer imprisonment terms
//     let imprisonmentRisk = data.yearsOfImprisonment > 10 ? 5 : (data.yearsOfImprisonment > 5 ? 3 : 1);

//     // Fines and Bonds: Higher fines or bonds reduce bail chances (inverse logic)
//     let finesBondsRisk = (data.fines > 0 || data.suretyBonds > 0 || data.personalBonds > 0) ? 3 : 1;

//     // Calculate total score (out of 100) using weighted average
//     let totalScore = (
//       (weights.ipcSeverity * ipcSeverity) / 5 +
//       (weights.yearsOfImprisonment * imprisonmentRisk) / 5 +
//       (weights.finesBonds * finesBondsRisk) / 5
//     );

//     // Decision based on the calculated total score
//     if (totalScore < 50) {
//       return {
//         status: 'Bailable',
//         score: totalScore,
//         reasoning: `The person is considered bailable based on a score of ${totalScore}. Factors like low crime severity and shorter imprisonment term favor bail.`
//       };
//     } else {
//       return {
//         status: 'Not Bailable',
//         score: totalScore,
//         reasoning: `The person is not bailable based on a score of ${totalScore}. Factors like high crime severity or long imprisonment term reduce chances of bail.`
//       };
//     }
//   };

//   // Function to handle the IPC listing and bail eligibility check
//   const handleCheckBailEligibility = () => {
//     if (criminal) {
//       const bailEligibility = isBailable({
//         ipcSections: criminal.ipcSections, // Use ipcSections from the criminal object
//         yearsOfImprisonment: criminal.yearsOfImprisonment,
//         fines: criminal.fines,
//         suretyBonds: criminal.suretyBonds,
//         personalBonds: criminal.personalBonds
//       });
//       setBailResult(bailEligibility);
//     }
//   };

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   if (!criminal) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="ActualHeader">
//         <Header />
//       </div>
//       <div className="profile-box">
//         <div className="profile-header">
//           <img 
//             src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
//             alt="Profile" 
//             className="profile-img" 
//           />
//           <h2 className="name">{criminal.name}</h2>
//         </div>
//         <div className="profile-details">
//           <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//           <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//           <p><strong>Age:</strong> {criminal.age}</p>
//           <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//           <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//           <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
//         </div>
        
//         {showIpcs ? (
//           <div className="ipc-sections">
//             <h3>IPC Sections</h3>
//             <ul>
//               {criminal.ipcSections.map((section, index) => (
//                 <li key={index}><strong>{section.section}:</strong> {section.description}</li>
//               ))}
//             </ul>
//             {bailResult ? (
//               <div className="bail-result">
//                 <h3>Bail Eligibility</h3>
//                 <p><strong>Status:</strong> {bailResult.status}</p>
//                 <p><strong>Score:</strong> {bailResult.score}</p>
//                 <p><strong>Reasoning:</strong> {bailResult.reasoning}</p>
//               </div>
//             ) : (
//               <button onClick={handleCheckBailEligibility}>Check Bail Eligibility</button>
//             )}
//           </div>
//         ) : (
//           <button onClick={() => setShowIpcs(true)}>List IPCs</button>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // Optional for table formatting
// import './profile.css'; // Assuming you are using a separate CSS file for styling
// import Header from '../Header/header';
// import Footer from '../Footer/footer';

// const Profile = () => {
//   const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
//   const [criminal, setCriminal] = useState(null);
//   const [error, setError] = useState(null);
//   const [showIpcs, setShowIpcs] = useState(false); // To show IPC sections
//   const [bailResult, setBailResult] = useState(null); // To store the bail eligibility result

//   useEffect(() => {
//     const fetchCriminalDetails = async () => {
//       try {
//         const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
//         const response = await axios.get(url);
//         setCriminal(response.data);
//       } catch (err) {
//         setError('Failed to fetch criminal details');
//       }
//     };

//     if (aadhaarCardId) {
//       fetchCriminalDetails();
//     }
//   }, [aadhaarCardId]);

//   // Bail eligibility logic based on the new schema
//   const isBailable = (data) => {
//     const weights = {
//       ipcSeverity: 60,
//       yearsOfImprisonment: 30,
//       finesBonds: 10,
//     };

//     const ipcSeverityMap = {
//       '302': 5,
//       '379': 2,
//       '324': 3,
//       '420': 3,
//       '323': 1,
//     };

//     let ipcSeverityTotal = 0;
//     data.ipcSections.forEach((ipc) => {
//       ipcSeverityTotal += ipcSeverityMap[ipc.section] || 0;
//     });

//     let ipcSeverity = ipcSeverityTotal / data.ipcSections.length;
//     let imprisonmentRisk = data.yearsOfImprisonment > 10 ? 5 : (data.yearsOfImprisonment > 5 ? 3 : 1);
//     let finesBondsRisk = (data.fines > 0 || data.suretyBonds > 0 || data.personalBonds > 0) ? 3 : 1;

//     let totalScore = (
//       (weights.ipcSeverity * ipcSeverity) / 5 +
//       (weights.yearsOfImprisonment * imprisonmentRisk) / 5 +
//       (weights.finesBonds * finesBondsRisk) / 5
//     );

//     if (totalScore < 50) {
//       return {
//         status: 'Bailable',
//         score: totalScore,
//         reasoning: `The person is considered bailable based on a score of ${totalScore}. Factors like low crime severity and shorter imprisonment term favor bail.`,
//       };
//     } else {
//       return {
//         status: 'Not Bailable',
//         score: totalScore,
//         reasoning: `The person is not bailable based on a score of ${totalScore}. Factors like high crime severity or long imprisonment term reduce chances of bail.`,
//       };
//     }
//   };

//   const handleCheckBailEligibility = () => {
//     if (criminal) {
//       const bailEligibility = isBailable({
//         ipcSections: criminal.ipcSections,
//         yearsOfImprisonment: criminal.yearsOfImprisonment,
//         fines: criminal.fines,
//         suretyBonds: criminal.suretyBonds,
//         personalBonds: criminal.personalBonds,
//       });
//       setBailResult(bailEligibility);
//     }
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text('Criminal Profile', 10, 10);

//     doc.setFontSize(12);
//     doc.text(`Name: ${criminal.name}`, 10, 30);
//     doc.text(`Aadhaar No: ${criminal.aadhaarCardId}`, 10, 40);
//     doc.text(`Prisoner No: ${criminal.prisonerNo}`, 10, 50);
//     doc.text(`Age: ${criminal.age}`, 10, 60);
//     doc.text(`Jurisdiction: ${criminal.jurisdiction}`, 10, 70);
//     doc.text(`Years of Imprisonment: ${criminal.yearsOfImprisonment}`, 10, 80);

//     if (criminal.crimes) {
//       doc.text('Crimes:', 10, 90);
//       criminal.crimes.forEach((crime, index) => {
//         doc.text(`${index + 1}. ${crime}`, 20, 100 + index * 10);
//       });
//     }

//     if (criminal.ipcSections && showIpcs) {
//       doc.text('IPC Sections:', 10, 150);
//       criminal.ipcSections.forEach((section, index) => {
//         doc.text(`${index + 1}. ${section.section} - ${section.description}`, 20, 160 + index * 10);
//       });
//     }

//     if (bailResult) {
//       doc.text('Bail Eligibility:', 10, 200);
//       doc.text(`Status: ${bailResult.status}`, 20, 210);
//       doc.text(`Score: ${bailResult.score}`, 20, 220);
//       doc.text(`Reasoning: ${bailResult.reasoning}`, 20, 230);
//     }

//     doc.save(`${criminal.name}_Profile.pdf`);
//   };

//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   if (!criminal) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="ActualHeader">
//         <Header />
//       </div>
//       <div className="profile-box">
//         <div className="profile-header">
//           <img 
//             src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
//             alt="Profile" 
//             className="profile-img" 
//           />
//           <h2 className="name">{criminal.name}</h2>
//         </div>
//         <div className="profile-details">
//           <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//           <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//           <p><strong>Age:</strong> {criminal.age}</p>
//           <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//           <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//           <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
//         </div>

//         {showIpcs ? (
//           <div className="ipc-sections">
//             <h3>IPC Sections</h3>
//             <ul>
//               {criminal.ipcSections.map((section, index) => (
//                 <li key={index}><strong>{section.section}:</strong> {section.description}</li>
//               ))}
//             </ul>
//             {bailResult ? (
//               <div className="bail-result">
//                 <h3>Bail Eligibility</h3>
//                 <p><strong>Status:</strong> {bailResult.status}</p>
//                 <p><strong>Score:</strong> {bailResult.score}</p>
//                 <p><strong>Reasoning:</strong> {bailResult.reasoning}</p>
//               </div>
//             ) : (
//               <button onClick={handleCheckBailEligibility}>Check Bail Eligibility</button>
//             )}
//           </div>
//         ) : (
//           <button onClick={() => setShowIpcs(true)}>List IPCs</button>
//         )}

//         <button onClick={generatePDF}>Download PDF</button>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Optional for table formatting
import './profile.css'; // Assuming you are using a separate CSS file for styling
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Profile = () => {
  const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
  const [criminal, setCriminal] = useState(null);
  const [error, setError] = useState(null);
  const [showIpcs, setShowIpcs] = useState(false); // To show IPC sections
  const [bailResult, setBailResult] = useState(null); // To store the bail eligibility result
  const [showDownloadBtn, setShowDownloadBtn] = useState(false); // To show the Download PDF button

  useEffect(() => {
    const fetchCriminalDetails = async () => {
      try {
        const url = `http://localhost:4900/api/accused/crimes/${aadhaarCardId}`;
        const response = await axios.get(url);
        setCriminal(response.data);
      } catch (err) {
        setError('Failed to fetch criminal details');
      }
    };

    if (aadhaarCardId) {
      fetchCriminalDetails();
    }
  }, [aadhaarCardId]);

  // Bail eligibility logic based on the new schema
  const isBailable = (data) => {
    const weights = {
      ipcSeverity: 60,
      yearsOfImprisonment: 30,
      finesBonds: 10,
    };

    const ipcSeverityMap = {
      '302': 5,
      '379': 2,
      '324': 3,
      '420': 3,
      '323': 1,
    };

    let ipcSeverityTotal = 0;
    data.ipcSections.forEach((ipc) => {
      ipcSeverityTotal += ipcSeverityMap[ipc.section] || 0;
    });

    let ipcSeverity = ipcSeverityTotal / data.ipcSections.length;
    let imprisonmentRisk = data.yearsOfImprisonment > 10 ? 5 : (data.yearsOfImprisonment > 5 ? 3 : 1);
    let finesBondsRisk = (data.fines > 0 || data.suretyBonds > 0 || data.personalBonds > 0) ? 3 : 1;

    let totalScore = (
      (weights.ipcSeverity * ipcSeverity) / 5 +
      (weights.yearsOfImprisonment * imprisonmentRisk) / 5 +
      (weights.finesBonds * finesBondsRisk) / 5
    );

    if (totalScore < 50) {
      return {
        status: 'Bailable',
        score: totalScore,
        reasoning: `The person is considered bailable based on a score of ${totalScore}. Factors like low crime severity and shorter imprisonment term favor bail.`,
      };
    } else {
      return {
        status: 'Not Bailable',
        score: totalScore,
        reasoning: `The person is not bailable based on a score of ${totalScore}. Factors like high crime severity or long imprisonment term reduce chances of bail.`,
      };
    }
  };

  const handleCheckBailEligibility = () => {
    if (criminal) {
      const bailEligibility = isBailable({
        ipcSections: criminal.ipcSections,
        yearsOfImprisonment: criminal.yearsOfImprisonment,
        fines: criminal.fines,
        suretyBonds: criminal.suretyBonds,
        personalBonds: criminal.personalBonds,
      });
      setBailResult(bailEligibility);
      setShowDownloadBtn(true); // Show the download button after checking bail eligibility
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Criminal Profile', 10, 10);

    doc.setFontSize(12);
    doc.text(`Name: ${criminal.name}`, 10, 30);
    doc.text(`Aadhaar No: ${criminal.aadhaarCardId}`, 10, 40);
    doc.text(`Prisoner No: ${criminal.prisonerNo}`, 10, 50);
    doc.text(`Age: ${criminal.age}`, 10, 60);
    doc.text(`Jurisdiction: ${criminal.jurisdiction}`, 10, 70);
    doc.text(`Years of Imprisonment: ${criminal.yearsOfImprisonment}`, 10, 80);

    // Add Image
    const imageUrl = criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg';
    doc.addImage(imageUrl, 'JPEG', 140, 30, 50, 50); // Add photo on the right side

    if (criminal.crimes) {
      doc.text('Crimes:', 10, 100);
      criminal.crimes.forEach((crime, index) => {
        doc.text(`${index + 1}. ${crime}`, 20, 110 + index * 10);
      });
    }

    if (criminal.ipcSections) {
      doc.text('IPC Sections:', 10, 140);
      criminal.ipcSections.forEach((section, index) => {
        doc.text(`${index + 1}. ${section.section} - ${section.description}`, 20, 150 + index * 10);
      });
    }

    if (bailResult) {
      doc.setLineWidth(0.5);
      doc.rect(10, 180, 190, 40); // Add a border for bail result section

      doc.text('Bail Eligibility Report:', 20, 190);
      doc.text(`Status: ${bailResult.status}`, 20, 200);
      doc.text(`Score: ${bailResult.score}`, 20, 210);
      doc.text(`Reasoning: ${bailResult.reasoning}`, 20, 220);
    }

    doc.save(`${criminal.name}_Profile.pdf`);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!criminal) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="ActualHeader">
        <Header />
      </div>
      <div className="profile-box">
        <div className="profile-header">
          <img 
            src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
            alt="Profile" 
            className="profile-img" 
          />
          <h2 className="name">{criminal.name}</h2>
        </div>
        <div className="profile-details">
          <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
          <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
          <p><strong>Age:</strong> {criminal.age}</p>
          <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
          <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
          <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
        </div>

        {showIpcs ? (
          <div className="ipc-sections">
            <h3>IPC Sections</h3>
            <ul>
              {criminal.ipcSections.map((section, index) => (
                <li key={index}><strong>{section.section}:</strong> {section.description}</li>
              ))}
            </ul>
            {bailResult ? (
              <div className="bail-result">
                <h3>Bail Eligibility</h3>
                <p><strong>Status:</strong> {bailResult.status}</p>
                <p><strong>Score:</strong> {bailResult.score}</p>
                <p><strong>Reasoning:</strong> {bailResult.reasoning}</p>
              </div>
            ) : (
              <button onClick={handleCheckBailEligibility}>Check Bail Eligibility</button>
            )}
          </div>
        ) : (
          <button onClick={() => setShowIpcs(true)}>List IPCs</button>
        )}

        {showDownloadBtn && (
          <button onClick={generatePDF}>Download PDF</button>
        )}
      </div>
      <div className="ActualFooter">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
