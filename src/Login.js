import React,{ useState } from 'react';
import fblogo from './image/fblogo.svg'
import Signup from './Signup';

function Login() {
   function handleButtonClick(){
    let button = document.getElementById('btn1');
    let loginp = document.getElementById('loginp');  
    if(loginp.style.display != "none"){
    loginp.style.display = 'none';
    }
    else{
    loginp.style.display = 'block'
    }
    let signup = document.getElementById('signup');
    if(loginp.style.display = "none"){
      signup.style.display= "block";
    }
    else{
      signup.style.display= "none";
    }
    
   }
  return (
    <>
    <div id="signup" className='hidden'><Signup/></div>
    <div id='loginp' className='container mt-48 flex mx-auto items-center justify-center'>
        <div className='left w-1/3 mx-14'>
        <img className='w-80' src={fblogo} alt='fblogo'></img>
        <p className='text-2xl mx-8'>Facebook helps you connect and share with the people in your life.</p>
        </div>
            <div className='right m-32 flex flex-col bg-white p-8 rounded-lg w-1/4 text-lg relative'>
            <input className='px-4 h-12 my-3  border border-1 border-gray-300 rounded-lg outline-blue-500' type='text' placeholder='Email address or phone number'></input>
            <input className='px-4 h-12 my-3  border border-1 border-gray-300 rounded-lg outline-blue-500' type='password' placeholder='Password'></input>
            <button className='bg-blue-500 hover:bg-blue-600 text-white my-3 py-3 rounded-lg font-bold text-xl '>Log in</button>
            <span className='text-blue-500 text-center text-sm my-3 cursor-pointer hover:underline'>Forgotten password?</span>
            <hr className='my-3'/> 
            <button id='btn1' onClick={handleButtonClick} className='bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold py-3 px-4 mx-auto my-3 text-lg w-fit'>Create New Account</button> 
            <span className=' absolute -bottom-12 text-xs'><span className="font-bold hover:underline cursor-pointer" >Create a Page</span> for a celebrity, brand or business.</span>
           
        </div>
    </div>
</>
  )
}

export default Login
