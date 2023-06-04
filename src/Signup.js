import React from 'react'

function Signup() {
  return (
     <div className='container mt-48  flex m-auto items-center justify-center'>
     <div className='m-32 flex flex-col bg-white p-8 rounded-lg w-1/3 text-lg relative'> 
        <h1 className='font-bold text-4xl m-1'>Sign Up</h1>
        <p className='m-1'>It's quick and easy.</p>

        <hr className='my-2 w-full '/>
        <div> 
        <input className='border-2 border-gray-500 m-2 p-2 w-1/2 flex-none rounded-lg ' type='text' placeholder='First name'></input>
        <input className='border-2 border-gray-500 m-2 p-2 w-1/3 flex-initial rounded-lg' type='text' placeholder='Surname'></input>
        <input className='border-2 border-gray-500 m-2 p-2 w-full rounded-lg' type='number' placeholder='Mobile number or email address'></input>
        <input className='border-2 border-gray-500 m-2 p-2 w-full rounded-lg' type='number' placeholder='Re-enter'></input>
        <input className='border-2 border-gray-500 m-2 p-2 w-full rounded-lg' type='password' placeholder='New password'></input>
        </div>
        <a className='relative'>Date of birth ?</a> 
        <div className=''>     
            <input className='border-2 border-gray-500 m-2  p-2 w-1/4 flex-none rounded-lg' type='date'></input>
            <input className='border-2 border-gray-500 m-2  p-2 w-1/4 flex-initial rounded-lg' type='month'></input>
            <input className='border-2 border-gray-500 m-2  p-2 w-1/3 flex-initial rounded-lg'  type='date'></input>
            </div>
            <a>Gender ?</a> 
            <div> 
            <input className='border-2 border-gray-500 m-2 p-2 w-1/4 flex-none rounded-lg' placeholder='Female'></input>
            <input className='border-2 border-gray-500 m-2 p-2 w-1/4 flex-initial rounded-lg' placeholder='Male'></input>
            <input className='border-2 border-gray-500 m-2 p-2 w-1/4 flex-initial rounded-lg' placeholder='Custom'></input> 
            </div>
        <p className='my-1 text-sm'>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
        <p className='my-1 text-sm'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
       <button className='bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold py-3 px-11 mx-auto my-3 text-lg w-fit'>Sign Up</button>
       </div>
     </div>
  )
}

export default Signup
