

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
//   const [showDownloadBtn, setShowDownloadBtn] = useState(false); // To show the Download PDF button

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
//       setShowDownloadBtn(true); // Show the download button after checking bail eligibility
//     }
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Title
//     doc.setFontSize(20);
//     doc.setFont('helvetica', 'bold');
//     doc.text('Criminal Profile', doc.internal.pageSize.getWidth() / 2, 20, null, null, 'center');

//     // Profile Information
//     doc.setFontSize(12);
//     doc.setFont('helvetica', 'normal');
//     doc.text(`Name: ${criminal.name}`, 10, 40);
//     doc.text(`Aadhaar No: ${criminal.aadhaarCardId}`, 10, 50);
//     doc.text(`Prisoner No: ${criminal.prisonerNo}`, 10, 60);
//     doc.text(`Age: ${criminal.age}`, 10, 70);
//     doc.text(`Jurisdiction: ${criminal.jurisdiction}`, 10, 80);
//     doc.text(`Years of Imprisonment: ${criminal.yearsOfImprisonment}`, 10, 90);

//     // Image (with error handling for URL)
//     const imageUrl = criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg';
//     doc.addImage(imageUrl, 'JPEG', 140, 40, 50, 50); // Positioned more clearly beside text

//     // Line separator
//     doc.setLineWidth(0.5);
//     doc.line(10, 100, 200, 100); // Horizontal line

//     // Crimes Section
//     if (criminal.crimes && criminal.crimes.length > 0) {
//       doc.setFontSize(14);
//       doc.setFont('helvetica', 'bold');
//       doc.text('Crimes Committed:', 10, 110);
  
//       doc.setFontSize(12);
//       doc.setFont('helvetica', 'normal');
  
//       let crimeYPosition = 120; // Starting Y position for crimes
//       criminal.crimes.forEach((crime, index) => {
//           const crimeText = `${index + 1}. ${crime}`;
//           const wrappedCrimeText = doc.splitTextToSize(crimeText, 170); // Wrap text to a max width of 170 units
//           doc.text(wrappedCrimeText, 20, crimeYPosition);
//           crimeYPosition += wrappedCrimeText.length * 10; // Adjust Y position for each line of wrapped text
//       });
//   }
  

//     // IPC Sections
//     if (criminal.ipcSections && criminal.ipcSections.length > 0) {
//         const ipcStartY = 130 + (criminal.crimes ? criminal.crimes.length * 10 : 0); // Adjust based on crime list length
//         doc.setFontSize(14);
//         doc.setFont('helvetica', 'bold');
//         doc.text('IPC Sections:', 10, ipcStartY);

//         doc.setFontSize(12);
//         doc.setFont('helvetica', 'normal');
//         criminal.ipcSections.forEach((section, index) => {
//             doc.text(`${index + 1}. ${section.section} - ${section.description}`, 20, ipcStartY + 10 + index * 10);
//         });
//     }

//     // Bail Eligibility Report
//     if (bailResult) {
//       // Define initial position for the Bail Eligibility section
//       let bailYPosition = 200;
  
//       // Calculate height for the reasoning text
//       const reasoningText = doc.splitTextToSize(`Reasoning: ${bailResult.reasoning}`, 170);
//       const reasoningHeight = reasoningText.length * 10; // Height adjustment per line of wrapped text
  
//       // Calculate total box height dynamically based on content
//       const boxHeight = 60 + reasoningHeight; // 60 for other fixed content + dynamic height for reasoning
  
//       // Add a dynamic rectangle box to fit the content
//       doc.setLineWidth(0.5);
//       doc.rect(10, bailYPosition, 190, boxHeight); // 190 width, dynamically calculated height
  
//       // Add the bail report content inside the box
//       doc.setFontSize(14);
//       doc.setFont('helvetica', 'bold');
//       doc.text('Bail Eligibility Report:', 20, bailYPosition + 10);
  
//       doc.setFontSize(12);
//       doc.setFont('helvetica', 'normal');
//       doc.text(`Status: ${bailResult.status}`, 20, bailYPosition + 20);
//       doc.text(`Score: ${bailResult.score}`, 20, bailYPosition + 30);
  
//       // Add the wrapped reasoning text
//       doc.text(reasoningText, 20, bailYPosition + 40);
//   }  
//     doc.save(`${criminal.name}_Profile.pdf`);
// };

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
//           <div class="imageDiv">
//           <img 
//             src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
//             alt="Profile" 
//             className="profile-img" 
//           />
//           </div>
//            <div className="profile-details">
//           <h2 className="name">{criminal.name}</h2>
//           <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//           <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//           <p><strong>Age:</strong> {criminal.age}</p>
//           <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//           <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//         </div>
//       </div>
//       <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
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
//           <button id="showIPCsbtn" onClick={() => setShowIpcs(true)}>List IPCs</button>
//         )}

//         {showDownloadBtn && (
//           <button id="checkBailBtn" onClick={generatePDF}>Download PDF</button>
//         )}
//       </div>
//       <div className="ActualFooter">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { motion, AnimatePresence } from 'framer-motion';
// import './profile.css';
// import Header from '../Header/header';
// import Footer from '../Footer/footer';
// import LoadingScreen from './LoadingScreen';

// const Profile = () => {
//   const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
//   const [criminal, setCriminal] = useState(null);
//   const [error, setError] = useState(null);
//   const [showIpcs, setShowIpcs] = useState(false); // To show IPC sections
//   const [bailResult, setBailResult] = useState(null); // To store the bail eligibility result
//   const [showDownloadBtn, setShowDownloadBtn] = useState(false); // To show the Download PDF button
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchCriminalDetails = async () => {
//       try {
//         const url = http://localhost:4900/api/accused/crimes/${aadhaarCardId};
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
//         reasoning: The person is considered bailable based on a score of ${totalScore}. Factors like low crime severity and shorter imprisonment term favor bail.,
//       };
//     } else {
//       return {
//         status: 'Not Bailable',
//         score: totalScore,
//         reasoning: The person is not bailable based on a score of ${totalScore}. Factors like high crime severity or long imprisonment term reduce chances of bail.,
//       };
//     }
//   };

//   const handleCheckBailEligibility = async () => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API delay
//     if (criminal) {
//       const bailEligibility = isBailable({
//         ipcSections: criminal.ipcSections,
//         yearsOfImprisonment: criminal.yearsOfImprisonment,
//         fines: criminal.fines,
//         suretyBonds: criminal.suretyBonds,
//         personalBonds: criminal.personalBonds,
//       });
//       setBailResult(bailEligibility);
//       setShowDownloadBtn(true);
//     }
//     setIsLoading(false);
//   };

//   const handleShowIpcs = async () => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay
//     setShowIpcs(true);
//     setIsLoading(false);
//   };

//   const handleGeneratePDF = async () => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating PDF generation delay
//     generatePDF();
//     setIsLoading(false);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text('Criminal Profile', 10, 10);

//     doc.setFontSize(12);
//     doc.text(Name: ${criminal.name}, 10, 30);
//     doc.text(Aadhaar No: ${criminal.aadhaarCardId}, 10, 40);
//     doc.text(Prisoner No: ${criminal.prisonerNo}, 10, 50);
//     doc.text(Age: ${criminal.age}, 10, 60);
//     doc.text(Jurisdiction: ${criminal.jurisdiction}, 10, 70);
//     doc.text(Years of Imprisonment: ${criminal.yearsOfImprisonment}, 10, 80);

//     // Add Image
//     const imageUrl = criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg';
//     doc.addImage(imageUrl, 'JPEG', 140, 30, 50, 50); // Add photo on the right side

//     if (criminal.crimes) {
//       doc.text('Crimes:', 10, 100);
//       criminal.crimes.forEach((crime, index) => {
//         doc.text(${index + 1}. ${crime}, 20, 110 + index * 10);
//       });
//     }

//     if (criminal.ipcSections) {
//       doc.text('IPC Sections:', 10, 140);
//       criminal.ipcSections.forEach((section, index) => {
//         doc.text(${index + 1}. ${section.section} - ${section.description}, 20, 150 + index * 10);
//       });
//     }

//     if (bailResult) {
//       doc.setLineWidth(1.4);
//       doc.rect(10, 180, 190, 40); // Add a border for bail result section

//       doc.text('Bail Eligibility Report:', 20, 190);
//       doc.text(Status: ${bailResult.status}, 20, 200);
//       doc.text(Score: ${bailResult.score}, 20, 210);
//       doc.text(Reasoning: ${bailResult.reasoning}, 20, 220);
//     }

//     doc.save(${criminal.name}_Profile.pdf);
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
//         <AnimatePresence>
//           {isLoading ? (
//             <LoadingScreen />
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="profile-header">
//               <div class="imageDiv">
//           <img 
//             src={criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
//             alt="Profile" 
//             className="profile-img" 
//           />
//           </div>
//            <div className="profile-details">
//           <h2 className="name">{criminal.name}</h2>
//           <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//           <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//           <p><strong>Age:</strong> {criminal.age}</p>
//           <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//           <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//         </div>
//               </div>
//               <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
//               {showIpcs ? (
//                 <div className="ipc-sections">
//                   <h3>IPC Sections</h3>
//                   <ul>
//                     {criminal.ipcSections.map((section, index) => (
//                       <li key={index}><strong>{section.section}:</strong> {section.description}</li>
//                     ))}
//                   </ul>
//                   {bailResult ? (
//                     <div className="bail-result">
//                       <h3>Bail Eligibility</h3>
//                       <p><strong>Status:</strong> {bailResult.status}</p>
//                       <p><strong>Score:</strong> {bailResult.score}</p>
//                       <p><strong>Reasoning:</strong> {bailResult.reasoning}</p>
//                     </div>
//                   ) : (
//                     <button onClick={handleCheckBailEligibility}>Check Bail Eligibility</button>
//                   )}
//                 </div>
//               ) : (
//                 <button id="showIPCsbtn" onClick={handleShowIpcs}>List IPCs</button>
//               )}

//               {showDownloadBtn && (
//                 <button id="checkBailBtn" onClick={handleGeneratePDF}>Download PDF</button>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="ActualFooter">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Profile;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { motion, AnimatePresence } from 'framer-motion';
// import './profile.css';
// import Header from '../Header/header';
// import Footer from '../Footer/footer';
// // import LoadingScreen from '../Profile/LoadingScreen';
// import LoadingScreen from './LoadingScreen';

// const Profile = () => {
//   const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
//   const [criminal, setCriminal] = useState(null);
//   const [error, setError] = useState(null);
//   const [showIpcs, setShowIpcs] = useState(false); // To show IPC sections
//   const [bailResult, setBailResult] = useState(null); // To store the bail eligibility result
//   const [showDownloadBtn, setShowDownloadBtn] = useState(false); // To show the Download PDF button
//   const [isLoading, setIsLoading] = useState(false);

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

//   const handleCheckBailEligibility = async () => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API delay
//     if (criminal) {
//       const bailEligibility = isBailable({
//         ipcSections: criminal.ipcSections,
//         yearsOfImprisonment: criminal.yearsOfImprisonment,
//         fines: criminal.fines,
//         suretyBonds: criminal.suretyBonds,
//         personalBonds: criminal.personalBonds,
//       });
//       setBailResult(bailEligibility);
//       setShowDownloadBtn(true);
//     }
//     setIsLoading(false);
//   };

//   const handleShowIpcs = async () => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay
//     setShowIpcs(true);
//     setIsLoading(false);
//   };

//   const handleGeneratePDF = async () => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating PDF generation delay
//     generatePDF();
//     setIsLoading(false);
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

//     // Add Image
//     const imageUrl = criminal.image || 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg';
//     doc.addImage(imageUrl, 'JPEG', 140, 30, 50, 50); // Add photo on the right side

//     if (criminal.crimes) {
//       doc.text('Crimes:', 10, 100);
//       criminal.crimes.forEach((crime, index) => {
//         doc.text(`${index + 1}. ${crime}`, 20, 110 + index * 10);
//       });
//     }

//     if (criminal.ipcSections) {
//       doc.text('IPC Sections:', 10, 140);
//       criminal.ipcSections.forEach((section, index) => {
//         doc.text(`${index + 1}. ${section.section} - ${section.description}`, 20, 150 + index * 10);
//       });
//     }

//     if (bailResult) {
//       doc.setLineWidth(1.4);
//       doc.rect(10, 180, 190, 40); // Add a border for bail result section

//       doc.text('Bail Eligibility Report:', 20, 190);
//       doc.text(`Status: ${bailResult.status}`, 20, 200);
//       doc.text(`Score: ${bailResult.score}`, 20, 210);
//       doc.text(`Reasoning: ${bailResult.reasoning}`, 20, 220);
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
//         <AnimatePresence>
//           {isLoading ? (
//             <LoadingScreen />
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="profile-header">
//                 <div className="imageDiv">
//                   <img 
//                     src={'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
//                     alt="Profile" 
//                     className="profile-img" 
//                   />
//                 </div>
//                 <div className="profile-details">
//                   <h2 className="name">{criminal.name}</h2>
//                   <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
//                   <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
//                   <p><strong>Age:</strong> {criminal.age}</p>
//                   <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
//                   <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
//                 </div>
//               </div>
//               <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
//               {showIpcs ? (
//                 <div className="ipc-sections">
//                   <h3>IPC Sections</h3>
//                   <ul>
//                     {criminal.ipcSections.map((section, index) => (
//                       <li key={index}><strong>{section.section}:</strong> {section.description}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <button className="ipc-btn" onClick={handleShowIpcs}>Show IPC Sections</button>
//               )}
//               <button className="bail-btn" onClick={handleCheckBailEligibility}>Check Bail Eligibility</button>
//               {bailResult && (
//                 <div className="bail-result">
//                   <h3>Bail Eligibility Report</h3>
//                   <p><strong>Status:</strong> {bailResult.status}</p>
//                   <p><strong>Score:</strong> {bailResult.score}</p>
//                   <p>{bailResult.reasoning}</p>
//                 </div>
//               )}
//               {showDownloadBtn && (
//                 <button className="download-btn" onClick={handleGeneratePDF}>Download PDF</button>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
        
//       </div>
//       <div className="ActualFooter">
//         {/* <Footer /> */}
//       </div>
      
//     </>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { motion, AnimatePresence } from 'framer-motion';
import './profile.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import LoadingScreen from './LoadingScreen';

const Profile = () => {
  const { aadhaarCardId } = useParams(); // Get the Aadhaar ID from the route parameter
  const [criminal, setCriminal] = useState(null);
  const [error, setError] = useState(null);
  const [showIpcs, setShowIpcs] = useState(false); // To show IPC sections
  const [bailResult, setBailResult] = useState(null); // To store the bail eligibility result
  const [showDownloadBtn, setShowDownloadBtn] = useState(false); // To show the Download PDF button
  const [isLoading, setIsLoading] = useState(false);
  const [showBailBtn, setShowBailBtn] = useState(false);

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

  const handleCheckBailEligibility = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API delay
    if (criminal) {
      const bailEligibility = isBailable({
        ipcSections: criminal.ipcSections,
        yearsOfImprisonment: criminal.yearsOfImprisonment,
        fines: criminal.fines,
        suretyBonds: criminal.suretyBonds,
        personalBonds: criminal.personalBonds,
      });
      setBailResult(bailEligibility);
      setShowDownloadBtn(true);
      setShowBailBtn(false);
    }
    setIsLoading(false);
  };

  const handleShowIpcs = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay
    setShowIpcs(true);
    setIsLoading(false);
  };

  const handleGeneratePDF = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating PDF generation delay
    generatePDF();
    setIsLoading(false);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Set document title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Criminal Profile', 105, 20, { align: 'center' }); // Center-aligned title
  
    // Profile details section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const leftMargin = 20; // Common left margin
    let yPos = 40; // Initial Y position for details
    const pageWidth = doc.internal.pageSize.getWidth(); // Get page width
    const textWidth = pageWidth - 40; // Set text area width (considering margins)
    
    doc.text(`Name: ${criminal.name}`, leftMargin, yPos);
    yPos += 10;
    doc.text(`Aadhaar No: ${criminal.aadhaarCardId}`, leftMargin, yPos);
    yPos += 10;
    doc.text(`Prisoner No: ${criminal.prisonerNo}`, leftMargin, yPos);
    yPos += 10;
    doc.text(`Age: ${criminal.age}`, leftMargin, yPos);
    yPos += 10;
    doc.text(`Jurisdiction: ${criminal.jurisdiction}`, leftMargin, yPos);
    yPos += 10;
    doc.text(`Years of Imprisonment: ${criminal.yearsOfImprisonment}`, leftMargin, yPos);
  
    // Add Image
    const imageUrl = 'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg';
    doc.addImage(imageUrl, 'JPEG', 150, 40, 40, 40); // Add profile image aligned to the right
  
    // Add a separator line
    doc.setLineWidth(0.5);
    doc.line(20, 92, 190, 92); // Shifted the horizontal line down by 10 units
    
  
    // Crimes section
    yPos = 100;
    if (criminal.crimes) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Crimes:', leftMargin, yPos);
      yPos += 10;
  
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      criminal.crimes.forEach((crime, index) => {
        const crimeText = `${index + 1}. ${crime}`;
        const wrappedCrime = doc.splitTextToSize(crimeText, textWidth);
        doc.text(wrappedCrime, leftMargin + 10, yPos);
        yPos += wrappedCrime.length * 10;
      });
    }
  
    // IPC Sections
    yPos += 10;
    if (criminal.ipcSections) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('IPC Sections:', leftMargin, yPos);
      yPos += 10;
  
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      criminal.ipcSections.forEach((section, index) => {
        const sectionText = `${index + 1}. ${section.section} - ${section.description}`;
        const wrappedSection = doc.splitTextToSize(sectionText, textWidth);
        doc.text(wrappedSection, leftMargin + 10, yPos);
        yPos += wrappedSection.length * 10;
      });
    }
  
    // Bail Eligibility Section
    yPos += 20; // Shift the box further down (you can adjust this value)
    if (bailResult) {
      // Calculate the height of the reasoning text to adjust the box height
      const wrappedReasoning = doc.splitTextToSize(`Reasoning: ${bailResult.reasoning}`, textWidth);
      const reasoningHeight = wrappedReasoning.length * 10; // Each line of text adds about 10 units in height
      
      const boxHeight = 40 + reasoningHeight; // Adjust the box height dynamically based on text length
    
      doc.setLineWidth(1.0);
      doc.setDrawColor(0, 0, 0); // Black border
      doc.rect(20, yPos, 170, boxHeight); // Dynamic box height
    
      yPos += 10;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Bail Eligibility Report:', leftMargin + 10, yPos);
    
      yPos += 10;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(`Status: ${bailResult.status}`, leftMargin + 10, yPos);
    
      yPos += 10;
      doc.text(`Score: ${bailResult.score}`, leftMargin + 10, yPos);
    
      yPos += 10;
      doc.text(wrappedReasoning, leftMargin + 10, yPos);
      yPos += reasoningHeight; // Add the height of the reasoning text to yPos
    }
    
  
    // Save the PDF
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
        <AnimatePresence>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="profile-header">
                <div className="imageDiv">
                  <img 
                    src={'https://as2.ftcdn.net/v2/jpg/01/75/93/51/1000_F_175935137_aPD2ZOgBiey7Tlqz5PTXPqtmJnX9ZYU0.jpg'} 
                    alt="Profile" 
                    className="profile-img" 
                  />
                </div>
                <div className="profile-details">
                  <h2 className="name">{criminal.name}</h2>
                  <p><strong>Prisoner No.:</strong> {criminal.prisonerNo}</p>
                  <p><strong>Aadhaar No.:</strong> {criminal.aadhaarCardId}</p>
                  <p><strong>Age:</strong> {criminal.age}</p>
                  <p><strong>Year of Imprisonment:</strong> {criminal.yearsOfImprisonment}</p>
                  <p><strong>Jurisdiction:</strong> {criminal.jurisdiction}</p>
                </div>
              </div>
              <p><strong>Crimes Committed:</strong> {criminal.crimes.join(', ')}</p>
              {showIpcs ? (
                <div className="ipc-sections">
                  <h3>IPC Sections</h3>
                  <ul>
                    {criminal.ipcSections.map((section, index) => (
                      <li key={index}><strong>{section.section}:</strong> {section.description}</li>
                    ))}
                  </ul>
                  {/* Show Check Bail Eligibility button only after IPC sections are shown */}
                  <button className="bail-btn" onClick={handleCheckBailEligibility}>Check Bail Eligibility</button>
                </div>
              ) : (
                <button className="ipc-btn" onClick={handleShowIpcs}>Show IPC Sections</button>
              )}
              {bailResult && (
                <div className="bail-eligibility">
                  <h3>Bail Eligibility Result</h3>
                  <p><strong>Status:</strong> {bailResult.status}</p>
                  <p><strong>Score:</strong> {bailResult.score}</p>
                  <p><strong>Reasoning:</strong> {bailResult.reasoning}</p>
                </div>
              )}
              {showDownloadBtn && (
                <button className="pdf-btn" onClick={handleGeneratePDF}>Download PDF</button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="ActualFooter1">
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Profile;


