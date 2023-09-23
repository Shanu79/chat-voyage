import React, { useState } from 'react';
import './regis-css.css';
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth, db } from '../../firebase-setup/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
  const [err, setErr]=useState(false);
  const navigate=useNavigate();

  const GoogleLogin = async()=>{
    //google login
    const provider = await new GoogleAuthProvider();
    const res=await signInWithPopup(auth, provider);
    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      name: res.user.displayName,
      dp: res.user.photoURL
    });

    await setDoc(doc(db,"usersChat",res.user.uid),{})

    try {
      console.log(res.user)
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  }
  return (
    <div className='formContainer'>
        <span className='logo'>Sign-in to Voyage</span>
        <div className='formWrapper'>
            <button onClick={GoogleLogin} className='googlelogin'>Continue with Google</button>
            <div className='divider'></div>
        <form className='classiclogin' action="">
            <input type="email" placeholder='email' name="" id="" />
            <input type="password" placeholder='password' name="" id="" />
            <button>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login