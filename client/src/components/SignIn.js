import React, { useState } from 'react';
import './SignIn.css';
import bannerImage from '../assets/banner-image.jpg'; // Adjust the path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const toggleForm = () => setIsSignUp(!isSignUp); // Toggle between Sign In and Sign Up
  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Toggle dark mode

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For sign up

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match!', {
          position: "top-right",
          theme: isDarkMode ? 'dark' : 'light',
        });
        return;
      }
      console.log({ email, password, confirmPassword });
      toast.success('Sign Up successful!', {
        position: "top-right",
        theme: isDarkMode ? 'dark' : 'light',
      });
    } else {
      // Simulating incorrect password for example purposes
      if (password !== 'correct-password') {
        toast.error('Incorrect credentials! Please try again.', {
          position: "top-right",
          theme: isDarkMode ? 'dark' : 'light',
        });
        return;
      }
      console.log({ email, password });
      toast.success('Sign In successful!', {
        position: "top-right",
        theme: isDarkMode ? 'dark' : 'light',
      });
    }
  };

  return (
    <div className={`sign-in-page ${isDarkMode ? 'dark' : ''}`}>
      <ToastContainer /> {/* ToastContainer should be here */}
      <div className="left-side">
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className="right-side">
        <form onSubmit={handleSubmit}>
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isSignUp && (
            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          <p className="switch-text">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button type="button" className="link-button" onClick={toggleForm}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </form>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default SignIn;
