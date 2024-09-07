import React from 'react';
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/footer';
import styled from 'styled-components';

const LegalAidHome = () => {
    return (
        <Wrapper>
            <Header />
            <Content>
                <IntroLine>
                    <strong>"You will be representing <div className='client-name'><p>[Client's Name]</p></div><div className='kaidino'><p>[Kaidi_No]</p></div> in this matter, advocating on their behalf in all legal proceedings and ensuring their rights and interests are fully protected under the law."</strong>
                </IntroLine>
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
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom:170px;
`;

const IntroLine = styled.div`
  font-size: 18px;
  color: #333;
  text-align: center;
  padding: 20px;
  max-width: 800px;
  line-height: 1.6;
`;
