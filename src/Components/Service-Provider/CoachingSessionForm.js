import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const CoachingSessionForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [totalExp, settTotalExp] = useState([]);
  const [expIn, setExpIn] = useState("");
  const [achivements, setAchivements] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedOption] = useState("");
  const [selectedSports, setSelectedOptions] = useState([]);
  const options = [
    { value: "chocolate", label: "Arts" },
    { value: "strawberry", label: "Sports" },
    { value: "vanilla", label: "Insurance" },
  ];
  
  const options2 = [
    {  value: "Outdoor" , label: "Cricket" },
    {  value: "Outdoor" , label: "BasketBall" },
    {  value: "Indoor" , label: "Chess" },
    {  value: "Indoor" , label: "CaromBoard" },
  ];

  
  const updateExperience = () => {
    let oldData = JSON.parse(sessionStorage.getItem("data"));
    let savedData = [];
    let temp = {
      name: name,
      dob: dob,
      totalExp: totalExp,
      expIn: expIn,
      achivements: achivements,
      selectedCategory: selectedCategory.value,
      selectedSports: selectedSports.map(e => e.value).toString()
    };

    if (oldData) {
      savedData = [temp, ...oldData];
    } else {
      savedData.push(temp);
    }
    sessionStorage.setItem("data", JSON.stringify(savedData));
  };

  const handleSelectedCategory = (selectedCategory) => {
    setSelectedOption(selectedCategory); // Update the state when the option is selected
  };

  const handleSelectedSports = (selectedSports) => {
    setSelectedOptions(selectedSports);
  };

  return (
    <div className="form-group">
      <div className="row">
        <h1>Add Experience</h1>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">Name : </div>
        <div className="col-md-6">
          <input
            type="text"
            className="inputBox form-control"
            style={{ width: "300px" }}
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6  ">DOB: </div>
        <div className="col-md-6">
          <input
            type="date"
            className="inputBox form-control"
            style={{ width: "300px" }}
            value={dob}
            placeholder="Enter Name"
            onChange={(e) => setDob(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">Total Experience: </div>
        <div className="col-md-6">
          <input
            type="text"
            className="inputBox form-control"
            style={{ width: "300px" }}
            value={totalExp}
            placeholder="Total Experience in Numbers"
            onChange={(e) => settTotalExp(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">Experience In: </div>
        <div className="col-md-6">
          <input
            type="text"
            className="inputBox form-control"
            style={{ width: "300px" }}
            value={expIn}
            placeholder="Your Sepcialisation in Sports"
            onChange={(e) => setExpIn(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">Achivements: </div>
        <div className="col-md-6">
          <input
            type="text"
            className="inputBox form-control"
            style={{ width: "300px" }}
            value={achivements}
            placeholder="Any Achievments"
            onChange={(e) => setAchivements(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">Select Category </div>
        <div className="col-md-4">
          <Select
           options={options} 
            value={selectedCategory}
          onChange={handleSelectedCategory}
          styles={{'width' : '300px'}} />
          {/* <p>Selected option: {selectedOption}</p> */}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">Select Sports </div>
        <div className="col-md-4">
          <Select
            options={options2}
            value={selectedSports}
            onChange={handleSelectedSports}
            isMulti={true}
          />
          {/* <p>Selected option: {selectedOption}</p> */}
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={updateExperience}>
            Add Experience
          </button>
          <button className="btn btn-success" style={{ marginLeft: "10px" }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachingSessionForm;
