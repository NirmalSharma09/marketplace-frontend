import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { json, useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OTPValidationForm from './OtpFormCheck';
import axios from "axios";
import Resetpassword from './ResetPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {

  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState(true);
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    setStatus(!status);
    console.log("email", email);
    setEmailError('');
    let isValid = true;
       // Email validation
    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format.');
      isValid = false;
    }
    axios.post('http://127.0.0.1:8000/api/password/forgot-password', {
      email: email,
    }).then(result => {
      toast.success("Otp Sent Successfully")
      console.log(result.data)
      // alert('success')
    })
      .catch(error => {
        setEmailError(''); // Clear email error if there was one
        console.log(error)
        toast.error("otp failed")
      })
  }
 
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Modal for OTP 
  const handleDeleteCloseModal = () => {
    setShow(false);
  }

  return (
    <>
 <div className="container-fluid bg-purple-600 vh-100">
    <div className="row justify-content-center">
      <div style={{ "width":"400px"}} className="col-md-6">
        <div className="card mt-5">
          <div className="card-header">
            <h2 className="text-center">Forget Password?</h2>
            <h5 className="mt-3">Enter your email address and we'll send you an email with OTP to reset your password.</h5>
          </div>
          <div className="card-body">
            <form>
              <div style={{ "textAlign":"left"}} className="mb-3" >
                <label htmlFor="emailId" className="form-label" style={{"color":"black"}}>Email ID</label>
                <input onChange={handleEmail} type="text" className="form-control" id="firstName" placeholder="Email Id" />
              </div>
              <button type="submit" disabled = {!status} className="btn btn-primary" onClick={handleSubmit}>Send Otp</button>
            </form>
          </div>
          {(!status) && <OTPValidationForm email={email}/>}
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default ForgetPassword
