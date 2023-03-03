import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateAnnouncement from "./pages/CreateAnnouncement";
import Announcement from "./pages/Announcement"

function App() {
  return (
    <div className="App">
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<CreateAnnouncement />}/>
            <Route path='/announcement' element={<Announcement />}/>
        </Routes>
    </div>
  );
}

export default App;