import React from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import NotificationContainer from './NotificationContainer';
import Sidebar from './Sidebar';
import "./Style.css"


function Dashboard() {
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

export default Dashboard;
