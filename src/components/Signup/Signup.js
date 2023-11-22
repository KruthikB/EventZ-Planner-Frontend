import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Signup.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth from AuthContext

function SignUp() {
  const navigate = useNavigate(); // Hook for navigation
  const { setAuth } = useAuth(); // Use the setAuth function from your AuthContext
  const [error, setError] = useState(''); // State for error message

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any existing errors

    // Check if passwords match
    if (event.target.password.value !== event.target.confirmPassword.value) {
      setError('Passwords do not match.');
      return; // Stop the form submission if passwords don't match
    }

    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Signup successful', data);
        
         // Update the auth state to true
        navigate('/dashboard');
        setAuth(true); // Redirect to dashboard page
      } else {
        setError(data.message || 'Signup failed'); // Show error message from server or a default message
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="signup-container container">
      <div className="welcome-text">
        <h1>Welcome</h1>
        <h2>Mate!!</h2>
        <p>Plan Your First Event with Us</p>
        <p id='desc' className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="signup-form bg-white">
        <h3 className='bg-white'>Sign Up</h3>
        {error && <p className="error-message">{error}</p>} {/* Error message will be displayed here */}
        <form className='bg-white' onSubmit={handleSubmit}> 
          <input type="text" name="name" placeholder="name" required />
          <input type="email" name="email" placeholder="email" required />
          <input type="password" name="password" placeholder="password" required />
          <input type="password" name="confirmPassword" placeholder="confirm password" required />
          <button type="submit">Sign up</button>
        </form>
        <p>Already a user? <Link to="/login" className='bg-white'>Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
