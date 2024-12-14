// src/pages/AdminPage.jsx
import React from 'react';
import './AdminPage.css';  // Add styles for AdminPage

const AdminPage = () => {
  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="stats">
        <div className="card">
          <h2>Total Users</h2>
          <p>1024</p>
        </div>
        <div className="card">
          <h2>Total Sales</h2>
          <p>$5000</p>
        </div>
      </div>
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>User 1 logged in</li>
          <li>User 2 purchased item</li>
          <li>User 3 logged out</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
