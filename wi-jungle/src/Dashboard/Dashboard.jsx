// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import './Dashboard.css';
import calculator from '../assets/calculator.svg';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const userInitial = username ? username.charAt(0).toUpperCase() : '';

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="left-section">
        <div className='sectio'>
          <h2 className='ti'>Wi-jungle</h2>
        <h6 className='ti'>Unified Cyber Security Platform</h6>
        </div>
        <button className="left-button">
          <img src={calculator} alt="calculator" width='10px' />
          Calculator
        </button>
      </div>
      <div className="right-section">
        <div className="header-section">
          <h2 className="right-title">Scientific Calculator</h2>
          
          <div className="user-info">
            <span className="greeting">Hi, {username}</span>
            <div className="user-avatar">{userInitial}</div>
          </div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default Dashboard;
