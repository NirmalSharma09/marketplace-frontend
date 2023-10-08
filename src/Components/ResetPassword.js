import React, { useState }  from 'react';
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Resetpassword = (props) => {
  console.log(props);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email } = props;

  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem('user');
  //   if (auth) {
  //     navigate("/")
  //   }
  // },[])

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log("password , confirmPassword", "email", password, confirmPassword , props.email);
    axios.post('http://127.0.0.1:8000/api/password/reset-password', {
      password: password,
      password_confirmation: confirmPassword,
      email:"invezza2023@gmail.com"
    }).then(result => {
      toast.success("Password Successfully reset!" , {autoClose:1000})
      console.log(result.data)
      navigate("/login");
    })
      .catch(error => {
        alert('service error')
        console.log(error)
        toast.error("Reset Password Failed")
      })
  }

  return (    
    <div className="container-fluid bg-purple-600 vh-100">
    <div className="row justify-content-center">
      <div style={{ "width":"400px"}} className="col-md-6">
        <div className="card mt-5">
          <div className="card-header">
            <h2 className="text-center">Reset Password</h2>
          </div>
          <div className="card-body">
            <form>
              <div style={{ "textAlign":"left"}} className="mb-3" >
                <label htmlFor="password" className="form-label" style={{"color":"black"}}>Password</label>
                <input onChange={handlePassword} type="password" className="form-control" id="password" placeholder="Password" />
              </div>         
              <div style={{ "textAlign":"left"}} className="mb-3">
                <label htmlFor="confirmPassword" style={{"color":"black"}} className="form-label">Confirm Password</label>
                <input onChange={handleConfirmPassword} type="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={(e) =>handleResetPassword(e)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Resetpassword
