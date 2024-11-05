import React from 'react';
import './style.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <p>Name: [User Name]</p>
        <p>Reg No: [Reg No]</p>
        <p>Branch: [Branch]</p>
      </div>
      <div className="announcements">
        <p>Announcements and Info</p>
        <div className="announcement-section" id="announcementSection">
          <div className="notification-container" id="notificationContainer">
            {/* Notifications will be added here dynamically */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
