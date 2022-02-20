import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='app'>
    {/* <h2>Welcome</h2>This is my app */}
    <Navbar/>
      <Routes>
        
        <Route path="/home" element={<Home />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        
      </Routes>
      
      </div>
  )
}

export default App;

// THINGS NEEDED TO KNOW IN LATEST VERSION

// 1. In latest version you need to use Routes in place of Switch
// 2. Also, component is replaced with element which is needed to know
// 3. Also, useHistory is now useNavigate (let navigate = useNavigate();  navigate('/profile'))