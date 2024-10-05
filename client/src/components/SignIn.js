import React, { useState } from 'react';
import './SignIn.css';
import bannerImage from '../assets/banner-image.jpg'; // Adjust the path

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle state

  const toggleForm = () => setIsSignUp(!isSignUp); // Toggle between Sign In and Sign Up

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For sign up

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in or sign-up logic
    if (isSignUp) {
      console.log({ email, password, confirmPassword });
    } else {
      console.log({ email, password });
    }
  };

  return (
    <div className="sign-in-page">
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
      </div>
    </div>
  );
}

export default SignIn;
