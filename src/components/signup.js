import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import './signup.css';

import { Link } from 'react-router-dom'; 


function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    role: 'Instructor'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function registerUser(event) {
    event.preventDefault();
    console.log('form Data', formData);
    console.log("this is data sent to backend");
    console.log(JSON.stringify(formData));

    const response = await fetch('http://localhost:3001/register/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'  >
      <MDBRow className='justify-content-center' style = {{backgroundColor: "#46525e"}}>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            Join Our Team Now!
          </h1>
          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </MDBCol>
        <MDBCol md='6'>
        {/* <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6"> */}

          <MDBCard className='my-5 bg-glass' style = {{width: "fit-content"}}>
            <MDBCardBody className='p-5'>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' name='firstName' value={formData.firstName} onChange={handleChange} required />
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' name='lastName' value={formData.lastName} onChange={handleChange} required />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' name='email' value={formData.email} onChange={handleChange} required />
              <MDBInput wrapperClass='mb-4' label='Contact' id='form4' type='text' name='contact' value={formData.contact} onChange={handleChange} required />
              <MDBInput wrapperClass='mb-4' label='Password' id='form5' type='password' name='password' value={formData.password} onChange={handleChange} required />
              <div className='mb-4'>
                {/* <label htmlFor='role-dropdown' className='form-label'>Role</label> */}
                <select className='form-select' id='role-dropdown' name='role' value={formData.role} onChange={handleChange} >
                  <option value='Instructor'>Instructor</option>
                  <option value='Student'>Student</option>
                </select>
                <label htmlFor='role-dropdown' className='form-label'>Role</label>

              </div>
              <div className='text-center'>
                <MDBBtn className='w-100 mb-4 rounded-pill btn-lg' size='md' onClick={registerUser} style={{ backgroundColor: '#14222d', outline: 'none', border: 'none' }}>Sign Up</MDBBtn>
              </div>
              <div className='text-center'>
                <p style={{ color: "black" }}>Already have an account? <Link to="/signin" style={{ color: '#007bff', textDecoration: 'underline' }}>Sign in</Link>.</p>
              </div>

            </MDBCardBody>
          </MDBCard>
          {/* </div>
          </div> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
