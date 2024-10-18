import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Event from './pages/Event';
import Admin from './pages/Admin';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/UserContext';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null)
  
  //Load the user from the localStorage when the app starts

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser); // Try parsing it
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user'); // Clean up invalid data
    }
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/events/:id" element={<Event/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
      <Footer></Footer>
    </UserContext.Provider>
  )
}

export default App
