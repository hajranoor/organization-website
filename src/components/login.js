import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  async function loginUser(event) {
    event.preventDefault();
    console.log('Form Data:', formData);
    console.log("This is data sent to backend");
    console.log(JSON.stringify(formData));

    const response = await fetch('http://localhost:3001/register/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });


  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            Welcome Back!<br />
            {/* <span style={{color: 'hsl(218, 81%, 75%)'}}>Sign in to your account</span> */}
          </h1>
          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Please sign in with your Gmail account to continue.
          </p>
        </MDBCol>

        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass' style = {{width: "fit-content"}}>
            <MDBCardBody className='p-5'>

              <MDBInput wrapperClass='mb-4' label='Gmail' id='form1' type='email' name='email' value={formData.email} onChange={handleChange} required />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' value={formData.password} onChange={handleChange} required />

              <div className='text-center'>
                <MDBBtn className='w-80 mb-4 mt-5 rounded-pill btn-lg' size='md' onClick={loginUser} style={{ backgroundColor: '#14222d', outline: 'none', border: 'none' }}>Login</MDBBtn>
              </div>

              {/* <div className='text-center mt-4'>
                <p>Don't have an account? <a href="/signup" style={{ color: '#1266f1' }}>Sign Up Now!</a></p>
              </div> */}

              <div className='text-center'>
                <p style={{ color: "black" }}>Don't have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'underline' }}>Sign Up Now!</Link>.</p>
              </div>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
