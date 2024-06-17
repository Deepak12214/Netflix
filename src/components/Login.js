import React, { useState ,useRef} from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import { USER_AVATER } from "../utils/constants";

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
const name = useRef(null);
const email=useRef(null);
const password=useRef(null);
const handleButtonClick = (e)=>{
  e.preventDefault();
  const message = checkValidData(email.current.value,password.current.value);
  setErrorMessage(message);
  if(message) return;
  if(!isSignInForm){
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: USER_AVATER
    }).then(() => {
      const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(addUser({uid: uid, email:email,displayName:displayName , photoURL:photoURL}));
      navigate("/browse");
    }).catch((error) => {
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode,"-",errorMessage)
  });

  }
  else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode,"-",errorMessage)
  });
  }
}
  return (
    <div>
      <Header />
      <div className="bg absolute">
        <img
          className="h-screen w-screen "
          src=" https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form 
        className="absolute p-12 bg-opacity-70  bg-black my-36 left-0 right-0 mx-auto w-3/12  text-white space-y-4 rounded-xl"
      >
        <p className="text-3xl font-bold mb-10 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
          ref={name}
            className="w-full p-3  rounded-md outline-none text-black"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
        ref={email}
          className="w-full p-3  rounded-md outline-none text-black"
          type="email"
          placeholder="Email or mobile number"
        />
        <input
        ref={password}
          className="w-full outline-none p-3 rounded-md text-black "
          type="password"
          placeholder="Password"
        />
        <p className="text-lg text-red-500 my-3">{errorMessage}</p>
        <button onClick={handleButtonClick} className="bg-red-700 w-full p-2 rounded-md font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="pt-3 px-0.5 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?  Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
