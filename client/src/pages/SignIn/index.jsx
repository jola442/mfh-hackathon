import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { user, setUser} = useContext(UserContext)
  const navigate = useNavigate();

  async function login() {
    try {
        const response = await axios.post("http://localhost:5000/signIn", {
            username,
            password,
        });

        const { user } = response.data; // User details will come from the session
        setMessage(`Welcome back, ${user.username}!`);
        setUser(user); // Store user details in state or context
        localStorage.setItem('user', JSON.stringify(user)); // Optionally keep user data in local storage
        navigate("/"); // Navigate after successful login
    } catch (error) {
        setMessage(error.response?.data?.message || "Sign in failed.");
    }
}

  

  // Register function using Axios
  async function register() {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      setMessage("Registration successful! You can now sign in.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed.");
    }
  }

  return (
    <div className='flex justify-center h-screen'>
      <div className='bg-primary my-20 py-5 px-10 w-[25vw] max-lg:w-[60vw] h-1/2 flex flex-col justify-center gap-5 shadow-lg'>
        <p className='text-white text-4xl max-sm:text-3xl text-center w-full border-b-2'>Welcome</p>
        
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent form submission from reloading the page
            login();
          }}
          className="flex flex-col gap-5"
        >
          <input
            className='rounded-lg p-2 text-2xl'
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className='rounded-lg p-2 text-2xl'
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-secondary text-2xl p-2 rounded-lg text-primary"
          >
            Sign In
          </button>
        </form>

        <p className='text-2xl text-white'>Not a member?</p>

        <button
          onClick={register}
          className="bg-reddish text-2xl p-2 rounded-lg text-white"
        >
          Register
        </button>

        {message && <p className='text-white text-2xl text-center mt-4'>{message}</p>}
      </div>
    </div>
  );
};

export default SignIn;
