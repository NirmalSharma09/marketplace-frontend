import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem('user');
  //   if (auth) {
  //     navigate("/")
  //   }
  // },[])

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //navigate("/dashboard/service-provider");
    // console.log({ email, password })
    // setEmailError('');
    // setPasswordError('');
    // let isValid = true;
    //    // Email validation
    // if (!email) {
    //   setEmailError('Email is required.');
    //   isValid = false;
    // } else if (!isValidEmail(email)) {
    //   setEmailError('Invalid email format.');
    //   isValid = false;
    // }
    // // Password validation
    // if (!password) {
    //   setPasswordError('Password is required.');
    //   isValid = false;
    // } else if (password.length < 6) {
    //   setPasswordError('Password must be at least 6 characters long.');
    //   isValid = false;
    // }
    // if (!isValid) {
    //   return;
    // }
    axios
      .get("/data.json")
      .then((response) => {
        toast.success("Successfully login In!" , {autoClose:1000})
        console.log(response.data);
        let result = response.data.role.find((e) => e.email === email);
        console.log(result);
        if (result.role == "admin") {
          navigate("/dashboard/admin");
        } 
        else if (result.role == "service-provider") 
        {
          navigate("/dashboard/service-provider");
        } 
        else if (result.role == "infra-provider")
        {
          navigate("/dashboard/infra-provider");
        } 
        else if (result.role == "customer")
        {
          navigate("/dashboard/customer");
        }
      })
      .catch((error) => {
        // setEmailError(''); // Clear email error if there was one
        // setPasswordError('');
        // toast.error("login failed");
      });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container-fluid bg-purple-600 vh-100">
      <div className="row justify-content-center">
        <div style={{ width: "400px" }} className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h2 className="text-center">Login</h2>
            </div>
            <div className="card-body">
              <form>
                <div style={{ textAlign: "left" }} className="mb-3">
                  <label
                    htmlFor="emailId"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    Email ID
                  </label>
                  <input
                    onChange={handleEmail}
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Email Id"
                  />
                </div>
                <div style={{ textAlign: "left" }} className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    Password
                  </label>
                  <input
                    onChange={handlePassword}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <a
                    href="./forget-password"
                    className="text-indigo-800 font-semibold"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
