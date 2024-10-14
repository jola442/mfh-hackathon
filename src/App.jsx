import Nav from './components/nav'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Event from './pages/Event';

function App() {


  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/events" element={<Event/>}></Route>
      </Routes>
    </>
  )
}

export default App
