import React, { useState } from 'react';
import "../Style/FirstPage.css";
import { useNavigate} from "react-router-dom";

function FirstPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name,setName]=useState("");
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   let validationErrors=false;
   let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/SecondPage"; 
    navigate(path);
  }
  function submitForm() {
    if (!phone || phone.length !== 10) {
      setPhoneError("Phone Number is not Valid");
      validationErrors=true;
    }else{
      setPhoneError("");
      validationErrors=false;
    }
    if (!password || !reEnterPassword || password!==reEnterPassword) {
        setPasswordError("password is not valid")
        validationErrors=true;
    }else{
      setPasswordError("");
      validationErrors=false;
    }
    if (!email || regex.test(email) === false) {
      
      setEmailError("email is not valid ");
      validationErrors=true;
    }
    else{
      setEmailError("");
      validationErrors=false;
    }
    if(!validationErrors){
       routeChange();
    }
  }

  return (
    <div className='login-page'>
      <section className='left-section'>
        <div className='image-section'>
          <img src="https://i.ibb.co/Zxx0G8d/Screenshot-104.png" border="0" alt='graph' />
        </div>
        <div className='date-range-section'>
          <h1>Choose a date range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipiscing elit.Mauris imperdiet bibendum</p>
        </div>
      </section>
      <section className='right-section'>
        <h2>Create an account</h2>
        <h4>Your email address</h4>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>{emailError}</p>
        <h4>Your password</h4>
        <input
          type="text"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p></p>
        <h4>Confirm your password</h4>
        <input
          type="text"
          value={reEnterPassword}
          onChange={(event) => {
            setReEnterPassword(event.target.value);
          }} />
          <p>{passwordError}</p>
        <h4>Your full name</h4>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }} />
          <p></p>
        <h4>Your phone number</h4>
        <input required
          type="number"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }} />
          <p>{phoneError}</p>
        <div className='checkbox-section'>
          <input type="checkbox" id='terms' name="terms" />
          <label for="terms"> I read and agree terms and conditions  </label>

        </div>
        <button className='btn-create-account' onClick={() => { submitForm() }} >
          Create account
        </button>

      </section>
    </div>
  )
}

export default FirstPage