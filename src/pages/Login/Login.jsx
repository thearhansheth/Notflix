import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/NotflixLogo.png'
import { userLogin, userSignup } from '../../firebase'

const Login = () => {
  const [signState, setSignState] = useState("Log In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = async (event)=>{
    event.preventDefault();
    if(signState === "Log In"){
      await userLogin(email, password);
    }else{
      await userSignup(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} alt="" className='loginLogo'/>
      <div className='loginForm'>
        <h1>{signState}</h1>
        <form>
          {signState==='Sign Up'?<input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Name'></input>:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email'></input>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'></input>
          <button onClick={userAuth} type='submit'>{signState}</button>
          <div className="formHelp">
            <div className="remember">
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="newForm">
          {signState==='Sign Up'?<p>Already have account? <span onClick={()=>{setSignState('Log In')}}>Log In</span></p>:<p>New to Notflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
