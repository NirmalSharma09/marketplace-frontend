// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Landingpage';
import RegistrationPage from './Components/RegistrationPage'; // Create a RegistrationPage component
import Login from './Components/Login';
import ServiceProviderDashboard from './Components/Service-Provider/ServiceProviderDashboard';
import AdminDashboard from './Components/Admin/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ForgetPassword from './Components/ForgetPassword';
import Resetpassword from './Components/ResetPassword';
import AdminHome from './Components/Admin/AdminHome';
import Customers from './Components/Admin/Customers';
import Categorylist from './Components/Admin/Categorylist';
import ServiceProviderHome from './Components/Service-Provider/ServiceProviderHome';
import Catergory from './Components/Admin/Categary';
import InfraProviderDashboard from './Components/Infra-Provider/InfraProviderDashboard';
import InfraProviderHome from './Components/Infra-Provider/InfraProviderHome'
import CustomerDashboard from './Components/Customer/CustomerDashboard';
import CustomerHome from './Components/Customer/CustomerHome';
import BookingForm from './Components/Customer/BookingForm';
import BookingList from './Components/Customer/BookingList';
import SportsItem from './Components/Customer/SportsItem';
import SportsSearch from './Components/Customer/SportsSearch';
import Categary from './Components/Admin/Categary';
import Coachesregistered from './Components/Admin/CoachesRegistered';
import PlaygroundRegistered from './Components/Admin/PlaygroundRegistered';
import CoachingSessionForm from './Components/Service-Provider/CoachingSessionForm';
import CoachingSessionItem from './Components/Service-Provider/CoachingSessionItem';
import CoachingSessionList from './Components/Service-Provider/CoachingSessionsList';
import PlaygroundForm from './Components/Infra-Provider/PlaygroundForm';
import PlaygroundItem from './Components/Infra-Provider/PlaygroundItem';
import Playgroundlist from './Components/Infra-Provider/PlaygroundList';
import Enquires from './Components/Shared/Enquires';
import AddCategory from './Components/Service-Provider/AddCategory';
import AddSports from './Components/Service-Provider/AddSports';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Landing Page Route */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/dashboard/service-provider" element={<ServiceProviderDashboard />}>
          <Route path="serviceProvider" element={<ServiceProviderHome />} />
          <Route path="Registration" element={<CoachingSessionForm />} />
          <Route path="CoachingSessionItem" element={<CoachingSessionItem />} />
          <Route path="CoachingSessionList" element={<CoachingSessionList />} />
          <Route path="enquiries" element={<Enquires />} />    
          <Route path="AddCatrgoryOfSports" element={<AddCategory />} />
          <Route path="AddSports" element={<AddSports />} />               
        </Route>
        <Route path="/dashboard/infra-provider" element={<InfraProviderDashboard />}>
          <Route path="home" element={<InfraProviderHome />} />
          <Route path="PlaygroundForm" element={<PlaygroundForm />} />
          <Route path="PlaygroundItem" element={<PlaygroundItem />} />
          <Route path="Playgroundlist" element={<Playgroundlist />} />
          <Route path="enquiries" element={<Enquires />} />
        </Route>
        <Route path="/dashboard/customer" element={<CustomerDashboard />}>
          <Route path="home" element={<CustomerHome />} />
          <Route path="BookingForm" element={<BookingForm />} />
          <Route path="BookingList" element={<BookingList />} />
          <Route path="SportsItem" element={<SportsItem />} />
          <Route path="SportsSearch" element={<SportsSearch />} />
          <Route path="enquiries" element={<Enquires />} />
        </Route>
        <Route path="/dashboard/admin" element={<AdminDashboard />} >
          <Route path="home" element={<AdminHome />} />
          <Route path="Coachregistered" element={<Coachesregistered />} />
          <Route path="playgroundRegistered" element={<PlaygroundRegistered />} />
          <Route path="list-category" element={<Categorylist />} />
          <Route path="category" element={<Categary />} />
          <Route path="enquiries" element={<Enquires />} />
        </Route>
        {/* Registration Page Route */}
        <Route path="/registration/:userType" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
