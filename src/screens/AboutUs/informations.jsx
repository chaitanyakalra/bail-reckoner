import React, { useState, useEffect } from 'react';
import { AlertCircle, Book, ArrowRight, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './information.css';
import Header from '../../components/Header/header';
import { div } from 'framer-motion/client';
import Footer from '../../components/Footer/footer';

const BailInIndia = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const sections = [
    {
      id: 'what-is-bail',
      title: 'What is Bail?',
      content: `Bail is a legal procedure that permits a person who has been arrested to be released from custody, subject to certain conditions, while awaiting trial or further court proceedings. This concept serves to uphold the principle that individuals should not be held in detention without a fair trial or due process.

      In the Indian legal system, bail is rooted in the fundamental right to liberty enshrined in Article 21 of the Constitution. It operates on the presumption of innocence, allowing accused persons to maintain their freedom while ensuring their presence for legal proceedings.

      The concept of bail balances two crucial aspects of the justice system:
      1. The right of the accused to personal liberty
      2. The need to maintain law and order in society

      Bail can be granted by various authorities, including the police (in some cases) and the courts, depending on the nature and severity of the alleged offense.`
    },
    {
      id: 'purpose-of-bail',
      title: 'Purpose of Bail',
      content: `The primary purpose of bail is to ensure that an accused person is not unjustly detained before their trial. It allows individuals to continue with their daily lives, work, and prepare their defense while awaiting the court's decision. Bail is a fundamental part of the legal system that upholds personal liberty and the presumption of innocence until proven guilty.

      Key purposes of bail include:
      1. Preserving the presumption of innocence
      2. Preventing punitive pre-trial detention
      3. Ensuring the accused appears for trial
      4. Maintaining public safety
      5. Protecting the rights of the accused
      6. Reducing overcrowding in jails
      7. Allowing the accused to prepare their defense effectively

      Bail also serves as a mechanism to prevent the abuse of the arrest powers by law enforcement agencies. It acts as a safeguard against arbitrary detention and helps maintain the balance between individual rights and societal interests.`
    },
    {
      id: 'types-of-bail',
      title: 'Types of Bail in India',
      content: [
        {
          subtitle: 'Anticipatory Bail',
          details: `Anticipatory bail is a provision under Section 438 of the Code of Criminal Procedure (CrPC) that allows an individual to seek bail in anticipation of being arrested for a non-bailable offense. This type of bail is sought when there is a reasonable apprehension of arrest.

          Key points about anticipatory bail:
          - It can be granted by the High Court or the Court of Session
          - The court may impose conditions to ensure cooperation with the investigation
          - It remains in force for a specific period or until the court orders otherwise
          - It's particularly useful for individuals facing potential false accusations or politically motivated charges`
        },
        {
          subtitle: 'Regular Bail',
          details: `Regular bail is requested after an individual has been arrested. This type of bail allows the accused to be released from custody while the legal proceedings continue.

          Characteristics of regular bail:
          - It's governed by Sections 436 and 437 of the CrPC
          - Can be granted by the police station or the court, depending on the nature of the offense
          - The court considers factors like the nature of accusations, severity of punishment, and the likelihood of the accused fleeing justice
          - Conditions may be imposed to ensure the accused's appearance in court and non-interference with the investigation`
        },
        {
          subtitle: 'Bail in Bailable Offenses',
          details: `Bailable offenses are those for which bail is a matter of right. The accused has an automatic entitlement to bail when arrested.

          Features of bail in bailable offenses:
          - Listed in the First Schedule of the CrPC
          - Generally less serious offenses
          - The officer in charge of the police station must release the accused on bail
          - The accused may be required to provide a personal bond with or without sureties`
        },
        {
          subtitle: 'Bail in Non-Bailable Offenses',
          details: `Non-bailable offenses are more serious crimes for which bail is not a right and is subject to the discretion of the court.

          Aspects of bail in non-bailable offenses:
          - Governed by Section 437 of the CrPC
          - The court has the discretion to grant or deny bail
          - Factors considered include the nature of evidence, possibility of fleeing, and potential for tampering with evidence
          - Special provisions exist for certain categories like juveniles, women, and sick or infirm persons`
        }
      ]
    },
    {
      id: 'bail-process',
      title: 'The Bail Process',
      content: [
        {
          subtitle: 'Filing for Bail',
          details: `The bail process begins with filing an application, which can be done in various ways:
          - For anticipatory bail: File an application under Section 438 CrPC in the appropriate court
          - For regular bail: Apply at the police station for bailable offenses or file an application in court for non-bailable offenses
          - The application should include details of the case, grounds for seeking bail, and any supporting documents`
        },
        {
          subtitle: 'Court Hearing',
          details: `During the court hearing:
          - The prosecution presents arguments against granting bail
          - The defense lawyer argues in favor of bail
          - The court considers various factors such as the nature of the accusation, the severity of punishment, and the likelihood of the accused absconding
          - Witnesses or additional evidence may be presented if necessary`
        },
        {
          subtitle: 'Granting Bail',
          details: `If bail is granted:
          - The court issues a bail order specifying the conditions for release
          - Common conditions include surrendering the passport, reporting to the police station regularly, and not leaving the city without permission
          - The accused or their representatives must furnish the required bond and sureties
          - Once conditions are met, a release order is issued to the jail authorities`
        },
        {
          subtitle: 'Revocation of Bail',
          details: `Bail can be revoked if:
          - The accused violates any conditions set by the court
          - New evidence emerges that strengthens the case against the accused
          - There's a likelihood of the accused influencing witnesses or tampering with evidence
          - The prosecution can file an application for cancellation of bail, which will be heard by the court`
        }
      ]
    },
    {
      id: 'rights-responsibilities',
      title: 'Rights and Responsibilities',
      content: [
        {
          subtitle: 'Rights',
          details: `An accused person has several rights related to bail:
          - Right to bail in bailable offenses
          - Right to apply for bail in non-bailable offenses
          - Right to be informed of the grounds of arrest
          - Right to be produced before a magistrate within 24 hours of arrest
          - Right to consult a lawyer of choice
          - Right to a fair and speedy trial`
        },
        {
          subtitle: 'Responsibilities',
          details: `When granted bail, the accused has certain responsibilities:
          - Compliance with all bail conditions set by the court
          - Appearing in court on all specified dates
          - Not attempting to influence witnesses or tamper with evidence
          - Informing the court of any change in address or contact details
          - Surrendering passport if required
          - Cooperating with the investigation process`
        }
      ]
    },
    {
      id: 'factors-considered',
      title: 'Factors Considered by Courts',
      content: [
        'Nature and Gravity of the Offense: Courts assess the seriousness of the alleged crime and its impact on society.',
        'Previous Criminal Record: A history of prior offenses may influence the court\'s decision.',
        'Likelihood of Fleeing: The court evaluates whether the accused is likely to abscond if granted bail.',
        'Risk of Tampering with Evidence: Any possibility of the accused interfering with the investigation is considered.',
        'Strength of the Evidence: The court examines the prima facie case against the accused.',
        'Public Safety: The potential threat to society if the accused is released is taken into account.',
        'Health and Age of the Accused: Special considerations may be given to elderly, ill, or juvenile accused.',
        'Cooperation with Investigation: The accused\'s willingness to assist with the investigation is evaluated.',
        'Victim\'s Safety: In cases involving violence, the court considers the victim\'s security.'
      ]
    },
    {
      id: 'legal-provisions',
      title: 'Key Legal Provisions',
      content: [
        {
          subtitle: 'Code of Criminal Procedure (CrPC)',
          details: `The CrPC provides the procedural framework for bail:
          - Section 436: Deals with bail in bailable offenses
          - Section 437: Covers bail in non-bailable offenses
          - Section 438: Provides for anticipatory bail
          - Section 439: Gives special powers to the High Court and Court of Session regarding bail
          - Section 441: Outlines the bond amount and conditions for bail`
        },
        {
          subtitle: 'Indian Penal Code (IPC)',
          details: `The IPC classifies offenses into bailable and non-bailable categories:
          - Bailable offenses are generally those punishable with imprisonment for less than three years
          - Non-bailable offenses are typically more serious crimes with longer potential sentences
          - The classification guides the initial approach to bail, but courts have discretion in many cases`
        },
        {
          subtitle: 'Constitution of India',
          details: `Constitutional provisions relevant to bail:
          - Article 21: Right to life and personal liberty
          - Article 22: Protection against arrest and detention in certain cases
          - These articles form the basis for the bail jurisprudence in India`
        }
      ]
    },
    {
      id: 'recent-developments',
      title: 'Recent Developments',
      content: `Stay updated with recent amendments and landmark judgments affecting bail laws and practices:

      1. Guidelines on Bail (2022): The Supreme Court issued comprehensive guidelines on bail, emphasizing the need for speedy hearings and the principle of 'bail, not jail'.

      2. COVID-19 Impact: The pandemic led to emergency bail provisions to decongest prisons, influencing bail jurisprudence.

      3. UAPA and Bail: Recent judgments have clarified the approach to bail under the Unlawful Activities (Prevention) Act, balancing national security concerns with personal liberty.

      4. Digital Initiatives: Many courts now allow online filing of bail applications, expediting the process.

      5. Bail Reforms: There are ongoing discussions about comprehensive bail reforms to address issues like overcrowding in prisons and ensuring equitable access to bail.

      It's crucial to consult recent case law and amendments for the most up-to-date understanding of bail laws in India.`
    },
    {
      id: 'legal-assistance',
      title: 'Legal Assistance',
      content: `Navigating the complexities of bail requires professional legal guidance. Consulting a qualified attorney is recommended.

      When seeking legal assistance for bail matters:
      1. Look for lawyers specializing in criminal law and bail applications
      2. Consult with legal aid services if you cannot afford private representation
      3. Provide all relevant documents and information to your lawyer
      4. Understand the bail process and your rights before proceeding
      5. Be prepared for potential outcomes and follow your lawyer's advice

      Remember, effective legal representation can significantly impact the outcome of a bail application and the subsequent legal proceedings.`
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div>
        <Header/>
    <motion.div 
      className="bail-in-india"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {isLoading ? (
        <motion.div 
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Scale size={48} className="animate-pulse" />
          <p>Loading Guide...</p>
        </motion.div>
      ) : (
        <>
          <motion.header variants={slideIn}>
            <h1>Comprehensive Guide to Bail in the Indian Judiciary</h1>
            <motion.div 
              className="header-decoration"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.header>
          <main>
            <div className="content-wrapper">
              <motion.nav 
                className="table-of-contents"
                variants={slideIn}
              >
                <h2><Book size={24} /> Table of Contents</h2>
                <ul>
                  {sections.map((section) => (
                    <motion.li 
                      key={section.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)}>
                        <ArrowRight size={16} />
                        {section.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
              <motion.div 
                className="main-content"
                variants={fadeIn}
              >
                <AnimatePresence mode="wait">
                  {sections.map((section) => (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      className={activeSection === section.id ? 'active' : ''}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                    >
                      <motion.h2 variants={slideIn}>{section.title}</motion.h2>
                      {Array.isArray(section.content) ? (
                        <div className="section-content">
                          {section.content.map((item, index) => (
                            <motion.div 
                              key={index} 
                              className="content-item"
                              variants={slideIn}
                            >
                              <h3>{item.subtitle || `Point ${index + 1}`}</h3>
                              <p>{item.details || item}</p>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <motion.p variants={slideIn}>{section.content}</motion.p>
                      )}
                    </motion.section>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </main>
          <motion.aside 
            className="important-notice"
            variants={fadeIn}
          >
            <AlertCircle size={24} />
            <p>This guide is for informational purposes only and does not constitute legal advice. Always consult with a qualified legal professional for specific legal matters.</p>
          </motion.aside>
        </>
      )}
    </motion.div>
    <Footer/>
    </div>
  );
};

export default BailInIndia;