import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar'; // Create this file if needed
import MainContent from './MainContent'; // Create this file if needed
import NotificationContainer from './NotificationContainer';
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <MainContent />
        <NotificationContainer />
      </div>
    </div>
  );
}

export default App;
