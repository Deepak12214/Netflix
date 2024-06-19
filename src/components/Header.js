import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = ({bool}) => {
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
  console.log(bool);
  const position=bool===null? "block":"absolute";
  console.log(position);
  return (
    <div className={`${position}   bg-gradient-to-b from-[#0f0f0f]  w-full z-10 flex justify-between  text-white font-light pr-4 pl-8 `}>
      <div className=" flex">
      <Link to={"/browse"} ><img className='w-36  ' src={LOGO} alt="Netflix-logo"/></Link>
      <ul className='flex gap-6 pl-8 items-center'>
        <li>Home</li>
        <li>Tv Shows</li>
        <li>My List</li>
        <li>categories</li>
      </ul>
      </div>
      {user && <div className="div flex p-2 m-2 gap-2">
        <img className='w-8' src={user?.photoURL} alt="" />
      <button className='font-semibold ' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;