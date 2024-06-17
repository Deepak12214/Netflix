import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user= useSelector((state)=> state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  };
  useEffect(()=>{

    const unsubscribe= onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName,photoURL}=user;
        dispatch(addUser({uid: uid, email:email,displayName:displayName , photoURL:photoURL}));
        if (location.pathname === "/") {
          navigate("/browse");
        }
      }
      else{
        dispatch(removeUser());
        navigate("/");
      }

    });
    return ()=> unsubscribe();

  },[])
  return (
    <div className='absolute  bg-gradient-to-b from-black  w-full z-10 flex justify-between '>
      <img className='w-48 mt-3 ml-10 ' src={LOGO} alt="Netflix-logo"/>
      {user && <div className="div flex p-2 m-2">
        <img className='w-12 h-12' src={user?.photoURL} alt="" />
      <button onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;