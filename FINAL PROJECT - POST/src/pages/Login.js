import React from 'react';
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      alert("You have successfully logged in");
    });
  };
  return <div className='loginPage'>
  <p>Sign In With Google to Continue</p>
  <button className='login-with-google-btn' onClick={signInwithGoogle}>
    Sign in with Google
  </button>
  </div>;

}

export default Login