import React from 'react';
import { useLocation } from 'react-router-dom'; // To access passed state
import styled from 'styled-components';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const LegalAidHome = () => {
  const location = useLocation(); // To get state from the redirect
  const { clientName, kaidiNo } = location.state || {}; // Destructure state

  const openPdf = () => {
    // Replace 'path/to/your/local/pdf' with the actual path to your local PDF file
    window.open('/Procedure for e-Filing of Bail.pdf', '_blank');
  };

  return (
    <Wrapper>
      <Header />
      <Content>
        <IntroLine>
          <strong>
            "You will be representing 
            <Details>
              <Label>Name:</Label>
              <Value>{clientName || '[Client\'s Name]'}</Value>
            </Details>
            <Details>
              <Label>Aadhaar ID:</Label>
              <Value>{kaidiNo || '[Aadhaar ID]'}</Value>
            </Details>
            in this matter, advocating on their behalf in all legal proceedings and ensuring their rights and interests are fully protected under the law."
          </strong>
        </IntroLine>
        <Button onClick={openPdf}>Procedure for e-Filing of Bail</Button>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default LegalAidHome;

// Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;  // This makes the content take the remaining space and pushes the footer down
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center;
  padding: 20px;
  margin-bottom: 170px;
`;

const IntroLine = styled.div`
  font-size: 18px;
  color: #333;
  text-align: center;
  padding: 20px;
  max-width: 800px;
  line-height: 1.6;
`;

const Details = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.span`
  font-weight: bold;
  color: #1e90ff; /* Adjust color to your preference */
  margin-right: 5px;
`;

const Value = styled.span`
  color: #333;
  font-weight: normal;
  margin-right: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1e90ff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1564c0;
  }
`;
