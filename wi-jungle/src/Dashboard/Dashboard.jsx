import React from 'react';
import Calculator from './Calculator';
import './Dashboard.css';
import calculator from '../assets/calculator.svg';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-section">
        <h2 className="left-title">Wi-Jungle</h2>
        <h6 className='left-tit'>Unified Cyber Security Platform</h6>
        <button className="left-button">
          <img src={calculator} alt="calculator" width='10px' />
          Calculater
        </button>
        
      </div>
      <div className="right-section">
        <h2 className="right-title">Scientific Calculator</h2>
        <Calculator />
      </div>
    </div>
  );
}

export default Dashboard;
