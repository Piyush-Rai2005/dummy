import React, { useEffect } from 'react';
import './style.css';

const Navbar = () => {
  useEffect(() => {
    // Add 'fade-in' class to body when the component mounts
    document.body.classList.add("fade-in");
  }, []);

  const handleHomeClick = () => {
    window.location.href = "/HomePage/index.html";
  };

  return (
    <nav className="navbar">
      <div className="top">
        <div className="logo">
          <img src="/logo.jpg"></img>
        </div>
        <div>
          <p id="home" onClick={handleHomeClick}>Home</p>
        </div>
        <div>
          <p id="Timetable"><a href="#" id="Timetable">Timetable</a></p>
        </div>
        <div>
          <p id="Leaderboard"><a href="#" id="Leaderboard">Leaderboard</a></p>
        </div>
        <div>
          <p id="Profile"><a href="#" id="Profile">Profile</a></p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
