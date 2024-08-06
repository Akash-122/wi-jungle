import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed
import home from '../assets/home.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:18080/login',
        new URLSearchParams({ username, password }).toString(), // Correctly format the data
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      if (response.status === 200) {
        localStorage.setItem('username', username);
        navigate('/dashboard');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      alert('Error logging in');
      console.error('Error:', error);
    }
  };

  return (
    <div className="home-container">
      <div className="section1">
        <h1 className='title'>Wi-Jungle</h1>
        <h6 className='title'>Unified Cyber Security Platform</h6>
        <img src={home} alt="Welcome" />
      </div>
      <div className="section2">
        <form onSubmit={handleLogin}>
          <h3 className="form-title">Scientific Calculator</h3>
          <div>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='btn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
