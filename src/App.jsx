import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
//import NavbarR from './components/NavBar';
import "./styles/App.css";
import Announcement from "./pages/Announcement";
import CreateAnnouncement from "./pages/CreateAnnouncement";
//import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      {/*<NavbarR/>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/createannouncement" element={<CreateAnnouncement />} />
      </Routes>
    </div>
  );
}

export default App;
