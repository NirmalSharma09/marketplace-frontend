import React, { useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import axios from "axios";
import OtpInput from "react-otp-input";
import Resetpassword from './ResetPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OTPValidationForm(props) {
  const [code, setCode] = useState("");
  const [counter, setCounter] = useState(10);
  const [otp, setOtp] = useState("");
  const { email } = props;

  const navigate = useNavigate();

  const handleOtp = (e) => {
    setOtp(e.target.value)
  }

   const handleChange = (code) => setCode(code);

  const handleSendOtp = () => {
    navigate("/reset-password");
    console.log("otp","email" ,otp , props.email);
    axios.post('http://127.0.0.1:8000/api/password/otp-verify', {
      otp: otp,
      email: props.email
    }).then(result => {
      toast.success("otp send to your Email Id")
      console.log(result.data)
      // alert('success')
      navigate("/reset-password");
    })
      .catch(error => {
        // alert('service error')
        console.log(error)
        toast.error("otp verification Failed, please resend the OTP")
      })
  }

  React.useEffect(() => {
    const timer =
    counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
}, [counter]);


  const handleResendOTP = () => {
    // Add logic to resend OTP here (e.g., make an API call to send a new OTP)
    // For the demo, we'll simply reset the countdown timer
    // setSecondsLeft(60);
    // setIsResending(true);
  };

  return (
    <div className="flex flex-col items-center mt-8">
    <h2 className="text-2xl font-semibold mb-2">OTP Validation</h2>
    <h5 style={{"color":"red"}} className="mt-3">Otp sent to your registered Email ID.</h5>
            <div className="mt-3 form-group">
              <label htmlFor="username" className="block text-base mb-5">Enter Your OTP</label>
              <input onChange={handleOtp} type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter OTP..." />
           
            <button type="resendOtp" style={{"margin-right":"10px" ,"color":"black"}} className="btn btn-primary" onClick={handleSendOtp}> Verify OTP  </button>    
      <button type="resendOtp" className="btn btn-primary" style={{"color":"black"}}> Resend OTP  </button>  
      </div>     
    00:{counter}
  </div>  
  );
}

export default OTPValidationForm;
