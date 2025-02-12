import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Event from './pages/Event';

import Footer from './components/Footer';

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events/:id" element={<Event/>}></Route>
        {/* <Route path="/admin" element={<Admin/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
