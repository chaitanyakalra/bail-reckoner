// import navigate from 'navigate';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function Login() {
//   const [credentials, setCredentials] = useState({
//     id: '', // Updated to 'id' instead of 'email'
//     password: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:4900/api/admin-enter', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: credentials.id, // Sending 'id' instead of 'email'
//           password: credentials.password,
//         }),
//       });

//       console.log("Fetch working");

//       const json = await response.json();
//       console.log("json", json);

//       if (!json.success) {
//         alert('Enter Valid Credentials');
//       } else {
//         localStorage.setItem("adminId", credentials.id);
//         localStorage.setItem("authToken", json.authToken);
//         console.log(localStorage.getItem("authToken"));
//         console.log(localStorage.getItem("adminId"));

//         navigate('/');
//       }

//       console.log('Response:', response);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Title>Admin Login</Title>
//         <FormGroup>
//           <Label htmlFor="id">Admin ID</Label>
//           <Input
//             type="text"
//             id="id"
//             name="id" // Updated to 'id' instead of 'email'
//             value={credentials.id}
//             onChange={onChange}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="password">Password</Label>
//           <Input
//             type="password"
//             id="password"
//             name="password"
//             value={credentials.password}
//             onChange={onChange}
//             required
//           />
//         </FormGroup>
//         <Button type="submit" id="submit">Log in</Button>
//       </Form>
//       <Disclaimer>For official use only. Unauthorized access is prohibited.</Disclaimer>
//     </Container>
//   );
// }

// // Styled components (same as before)
// const Container = styled.div`
//   width: 400px;
//   min-height: 400px;
//   background-color: #3a3a3a;
//   border-radius: 10px;
//   padding: 40px;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
//   margin: 0 auto;
// `;

// const Form = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
// `;

// const Title = styled.h2`
//   color: #ffffff;
//   font-size: 32px;
//   margin-bottom: 20px;
// `;

// const FormGroup = styled.div`
//   width: 100%;
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   width: 100%;
//   height: 40px;
//   background-color: #505050;
//   border: 1px solid #737373;
//   border-radius: 5px;
//   margin-top: 8px;
//   color: #e0e0e0;
//   font-size: 16px;
//   padding: 0 10px;

//   &:focus {
//     outline: none;
//     border-color: #1e90ff;
//     box-shadow: 0 0 8px rgba(30, 144, 255, 0.6);
//   }
// `;

// const Label = styled.label`
//   color: #cccccc;
//   font-size: 14px;
// `;

// const Button = styled.button`
//   width: 100%;
//   height: 45px;
//   background-color: #1e90ff;
//   border: none;
//   border-radius: 5px;
//   color: white;
//   font-size: 18px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1564c0;
//     `;

import React, { useState } from 'react';
import styled from 'styled-components';

export default function Login() {
  const [credentials, setCredentials] = useState({
    id: '', 
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4900/api/admin-enter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: credentials.id, // Sending 'id'
          password: credentials.password,
        }),
      });

      console.log("Fetch working");

      const json = await response.json();
      console.log("json", json);

      if (!json.success) {
        alert('Enter Valid Credentials');
      } else {
        localStorage.setItem("adminId", credentials.id);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        console.log(localStorage.getItem("adminId"));

        // Replace this with your navigation logic
        // navigate('/');
      }

      console.log('Response:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Admin Login</Title>
        <FormGroup>
          <Label htmlFor="id">Admin ID</Label>
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </FormGroup>
        <Button type="submit" id="submit">Log in</Button>
      </Form>
      <Disclaimer>For official use only. Unauthorized access is prohibited.</Disclaimer>
    </Container>
  );
}

// Styled components (now correctly ordered)
const Container = styled.div`
  width: 400px;
  min-height: 400px;
  background-color: #3a3a3a;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
