import React from 'react';
import './App.css';
import { Routes, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/dashboard';
import Contact from './components/contact/contact';
import Events from './components/Events/events';
import Add_Event from './components/Add_Event/add_event';
import { useAuth } from './context/AuthContext'; 
import EventBookingPage from './components/EventBookingPage/EventBookingPage';

function App() {
  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Correctly get isAuthenticated

    if (isAuthenticated === null) {
      return <div>Loading...</div>; // Handle loading state
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
        <Route path="/add-event/:eventId" element={<ProtectedRoute><Add_Event /></ProtectedRoute>} />
        <Route path="/add-event" element={<ProtectedRoute><Add_Event /></ProtectedRoute>} />
        <Route path="/book-event/:eventId" element={<ProtectedRoute><EventBookingPage /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </>
  );
}

export default App;
