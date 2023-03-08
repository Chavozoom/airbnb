import React from "react";
import { Route, Routes } from "react-router-dom";

import CreateAnnouncement from "./pages/CreateAnnouncement";
import Announcement from "./pages/Announcement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAnnouncement />} />
        <Route path="/announcement" element={<Announcement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
