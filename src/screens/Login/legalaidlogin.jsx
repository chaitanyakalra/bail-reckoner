import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios'; // For API requests
import styled from 'styled-components';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

export default function LegalAidLogin() {
  const [credentials, setCredentials] = useState({
    id: '', 
    name: '', // Changed from password to name
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const onChange = async (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));

    // Fetch client's name when Aadhaar number changes
    if (name === 'id' && value) {
      try {
        const response = await axios.get(`http://localhost:4900/api/accused/crimes/${value}`);
        if (response.data) {
          setCredentials(prevState => ({ ...prevState, name: response.data.name }));
          setError(''); // Clear any previous errors
        } else {
          setCredentials(prevState => ({ ...prevState, name: '' }));
          setError('Aadhaar number not found.');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional validation or handling can be done here if needed
    navigate('/legal-aid-home', { state: { clientName: credentials.name, kaidiNo: credentials.id } });
  };

  return (
    <Wrapper>
      <Header/>
      <Content>
        <Container>    
          <Form onSubmit={handleSubmit}>
            <Title>Legal Aid Login</Title>
            <FormGroup>
              <Label htmlFor="id">Aadhaar No.</Label>
              <Input
                type="text"
                id="id"
                name="id"
                value={credentials.id}
                onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Client's Name</Label>
              <Input
                type="text"
                id="name"
                name="name" // Renamed to "name"
                value={credentials.name}
                onChange={onChange} // Optional, if you want to allow editing
                required
                disabled // Disable the field to prevent editing
              />
            </FormGroup>
            <Button type="submit" id="submit">Log in</Button>
            
          </Form>
          <Disclaimer>For Legal Aid access only. Unauthorized access is prohibited.</Disclaimer>
        </Container>
      </Content>
      <Footer/>
    </Wrapper>
  );
}
// Styled components (updated)
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1; /* Ensures that the content expands to fill available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Container = styled.div`
  width: 400px;
  background-color: #3a3a3a;
  border-radius: 10px;
  padding: 40px;
  margin-top:100px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  margin-bottom:100px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #505050;
  border: 1px solid #737373;
  border-radius: 5px;
  margin-top: 8px;
  color: #e0e0e0;
  font-size: 16px;
  padding: 0 10px;

  &:focus {
    outline: none;
    border-color: #1e90ff;
    box-shadow: 0 0 8px rgba(30, 144, 255, 0.6);
  }
`;

const Label = styled.label`
  color: #cccccc;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: #1e90ff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1564c0;
  }
`;

const Disclaimer = styled.p`
  color: #bdbdbd;
  font-size: 12px;
  margin-top: 15px;
  text-align: center;
`;
