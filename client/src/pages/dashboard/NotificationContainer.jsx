import React, { useEffect } from 'react';
import './style.css';

const notifications = [
  "You have a new message.",
  "Your profile has been updated.",
  "New friend request received.",
  "Reminder: Your meeting starts in 15 minutes.",
  "Update: System maintenance scheduled.",
  "New comment on your post.",
  "Your password has been changed successfully.",
  "Welcome back! Check your notifications.",
  "You have 3 new alerts.",
  "Your subscription will expire soon.",
  "Update: System maintenance scheduled.",
  "New comment on your post.",
  "Your password has been changed successfully.",
  "Welcome back! Check your notifications.",
  "You have 3 new alerts.",
  "Your subscription will expire soon.",
];

const NotificationContainer = () => {
  useEffect(() => {
    const container = document.getElementById('notificationContainer');
    if (container) {
      notifications.forEach((message) => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        container.appendChild(notification);
      });
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="notification-section" id="announcementSection">
      <div className="notification-container" id="notificationContainer">
        {/* Notifications will be added here dynamically */}
      </div>
    </div>
  );
};

export default NotificationContainer;
