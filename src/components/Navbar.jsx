import React, { useContext } from 'react';
import './navbar.css';
import {signOut} from 'firebase/auth'
import { auth } from '../firebase-setup/firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser}=useContext(AuthContext);
  console.log(currentUser)
  return (
    <div className='nav'>
      <span className="logo">Voyage</span>
      <div className="profile">
        <img src={currentUser.photoURL} onClick={()=>signOut(auth)}/>
      </div>
    </div>
  )
}

export default Navbar