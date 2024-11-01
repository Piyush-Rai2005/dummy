document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "/HomePage/index.html";
});
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

function addNotifications() {
    const container = document.getElementById('notificationContainer');

    notifications.forEach((message) => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        container.appendChild(notification);
    });
}
addNotifications();
