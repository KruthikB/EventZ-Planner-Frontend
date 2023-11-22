
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust this import based on your file structure
import './Login.css'; // Adjust this if needed
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth(); // Assuming your AuthContext provides a login function
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value,
        };

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                login(data); // This should handle setting the user's authenticated state
                navigate('/dashboard'); // Redirect to the dashboard
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (err) {
            setError('Failed to connect to the server. Please try again later.');
        }
    };

    return (
        
        <div className="login-container container" >
            <div className="welcome-text">
                <h1>Welcome Back!</h1>
                <h2>Friend!</h2>
                <p>Join Your Next Event</p>
            </div>
            <div className="login-form bg-white">
                <h3>Log In</h3>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Log in</button>
                </form>
                <p>New around here? <Link to="/signup" className='bg-white'>Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;
