// RegistrationPage.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userType } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

  const userTypeMapping = {
    "Customer": "0",
    "Admin": "1",
    "Service-Provider": "2",
    "Infra-Provider": "3",
  };

  const userTypeId = userTypeMapping[userType];
 
  const handleRegistration = async (e) => {
    e.preventDefault();
    // navigate("/login");
    await axios
      .post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        type: userTypeId,
      })
      .then((result) => {
        toast.success("Successfully registered!", {autoClose:1000})
        console.log(result.data);
        const token = result.data.access_token;
        localStorage.setItem("token", token);
        // alert('success')
       
        navigate("/login");
      })
      .catch((error) => {
        // setEmailError(''); // Clear email error if there was one
        // setPasswordError('');
        toast.error("registration Failed!")
      });
  };

  return (
    <div className="container-fluid vh-100 bg-purple-600">
      <div className="row justify-content-center">
        <div style={{ width: "400px" }} className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h2 className="text-center">Registration</h2>
            </div>
            <div className="card-body">
              <form>
                <div style={{ "textAlign": "left" }} className="mb-3">
                  <label
                    htmlFor="Name"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div style={{ "textAlign": "left" }} className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div style={{ "textAlign": "left" }} className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div style={{ "textAlign": "left" }} className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="confirmPassword"
                    className="form-control"
                    id="confirmPassword"
                    placeholder=" Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div style={{ "textAlign": "left" }} className="mb-3">
                  <label
                    htmlFor="userType"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    User Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={id}
                    value={userType}
                    readOnly
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={(e) =>handleRegistration(e)}
                >
                  Register
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
