import React from "react";
import "../style/LandingPage.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import Admin from '../Images/Admin.jpg';
import ServiceProvider from '../Images/ServiceProvider.jpg';
import Infraprovider from '../Images/Infraprovider.jpg';
import UserImage from '../Images/UserImage.jpg';


const LandingPage = () => { 
  return (
    <div className="container-fluid vh-100 bg-purple-600">
      <div className="landing-page">
        <h1 className="text-white">Welcome to Our Landing Page</h1>
        <div className="button-container">
          {/* Link to Registration Page with User Type */}
          <Link to="/registration/Service-Provider">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={ServiceProvider} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Service Provider
                </a>
              </div>
            </div>
          </Link>
          <Link to="/registration/Infra-Provider">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={Infraprovider} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Infra Provider
                </a>
              </div>
            </div>
          </Link>
          <Link to="/registration/Customer">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={UserImage} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  User
                </a>
              </div>
            </div>
          </Link>
          <Link to="/login">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={Admin} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Admin Login
                </a>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/login">
          <div className="p-4">
            <button className="btn btn-lg btn-primary">
              <span style={{ 'marginRight': '5px' }}>login</span>
              <i className="fa fa-sign-in-alt"></i>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
