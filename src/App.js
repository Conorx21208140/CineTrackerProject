
import React from 'react';
import Register from './Register.js';
import Login from './Login.js';

import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CineTracker</h1>
        <p>Your one-stop solution to manage and track your movie collection.</p>
      </header>
      <main>
        <section className="auth-section">
          <h2>Get Started</h2>
          <Register />
          <Login />
        </section>
      </main>
    </div>
  );
}

export default App;
