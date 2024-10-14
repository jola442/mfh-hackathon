import React, { useState } from 'react'


const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(){

  }

  function register(){

  }


  return (
    <div className='flex justify-center h-screen'>
       <div className='bg-primary my-20 py-5 px-10 w-[25vw] max-lg:w-[60vw] h-1/2 flex flex-col justify-center gap-5 shadow-lg'>
          <p className='text-white text-4xl max-sm:text-3xl text-center w-full border-b-2'>Welcome</p>
            <input className='rounded-lg p-2 text-2xl' type="text" id = "username" name="username" placeholder="Username" required value={username} onChange={(e) => {setUsername(e.target.value)}}></input> 
            <input className='rounded-lg p-2 text-2xl' type="password" id= "password" name="password" placeholder="Password"required value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

            <input className="bg-secondary text-2xl p-2 rounded-lg text-primary"type="button" id="sign-in" value = "Sign In" onClick={login}></input>
            <p className='text-2xl text-white'>Not a member?</p>

            <input className="bg-reddish text-2xl p-2 rounded-lg text-white"type="button" id="register" value = "Register" onClick={register}></input>

       </div>
    </div>
  )
}

export default SignIn