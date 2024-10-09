import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {

  const navigate = useNavigate();
  const [state,setState] = useState("Logga in");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
    console.log("Login",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  const signup = async()=>{
    console.log("Register");
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      navigate('/');
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Registrera dig"?<input name='username'value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email'value={formData.email} onChange={changeHandler} type="email" placeholder='Email' />
          <input name='password'value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Logga in"?login():signup()}}>Continue</button>
        {state==="Registrera dig"?<p className='signup-login'>Already have an account? <span onClick={()=>{setState("Logga in")}}>Login here</span></p>
        :<p className='signup-login'>Create an account? <span onClick={()=>{setState("Registrera dig")}}>Click here</span></p>} 
      </div>
    </div>
  )
}

export default LoginSignup