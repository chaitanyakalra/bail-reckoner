# Bail Reckoner

The **Bail Reckoner** is a digital solution designed to assist legal administrators, undertrial prisoners, legal aid providers, and judicial authorities in managing and evaluating bail eligibility. This tool streamlines the bail application and evaluation process by considering various legal and procedural parameters, making the bail process more transparent, efficient, and just.

## Features

- **Case Management**: Allows the admin to input, verify, and update case details, including offenses, court jurisdiction, and duration of imprisonment.
- **Bail Eligibility Check**: Automatically assesses the eligibility of undertrial prisoners for bail based on factors like offense type, time served, and judicial discretion.
- **Guidance on Procedural Steps**: Provides a clear procedural guide for admins on necessary documentation and steps for submitting bail applications.
- **Legal Database**: Integrates data from the IPC, CrPC, and relevant Indian legal codes for accurate and up-to-date bail assessments.
- **Integration with Government Database (Optional)**: If available, the system can fetch relevant case details from judicial databases.

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/chaitanyakalra/bail_reckoner.git
    cd bail_reckoner


3. **Install Dependencies**  
Ensure you have `npm` installed, then run:
    ```bash
    npm install

5. **Run the Application**  
Start the application by running:
    ```bash
    npm start

7. **Access the Application**  
Open your web browser and go to `http://localhost:3000` to start using the Bail Reckoner.

## Workflow

### Step 1: Admin Login
- The admin logs in to access the case management dashboard.

### Step 2: Input Case Information (for User or Manual Entry)
- The admin may either input case information manually for a specific prisoner or verify/update existing case data.

- **Manual Input**: The admin enters or updates:
   - Case number
   - Charges/offenses listed
   - Court name and jurisdiction
   - Duration of imprisonment already served
   
- **Automatic Integration**: If integrated with a government/judicial database, the system may automatically fetch relevant case data, which the admin can review.

## Resources

- [Bail Reckoner Presentation (PDF)](https://github.com/user-attachments/files/17686799/Bail_Recknoer_ppt.pdf)

### Demo Video on YouTube
[![Watch the video](https://img.youtube.com/vi/_A2uPc0SlwM/0.jpg)](https://www.youtube.com/watch?v=_A2uPc0SlwM)
