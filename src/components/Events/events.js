
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { Link, useNavigate } from 'react-router-dom';
    import { useAuth } from '../../context/AuthContext';
    import './events.css';

    function Events() {
        const [events, setEvents] = useState([]);
        const { userId } = useAuth();
        const navigate = useNavigate();

        useEffect(() => {
            const fetchEvents = async () => {
                try {
                    const res = await axios.get('http://localhost:3001/events');
                    setEvents(res.data);
                } catch (error) {
                    console.error("Error fetching events:", error);
                }
            };
            fetchEvents();
        }, []);

        const handleDelete = async (eventId) => {
            if (window.confirm("Are you sure you want to delete this event?")) {
                try {
                    await axios.delete(`http://localhost:3001/delete-event/${eventId}`);
                    setEvents(events.filter(event => event._id !== eventId));
                } catch (error) {
                    console.error("Error deleting event:", error);
                }
            }
        };

        const handleUpdate = (eventId) => {
            navigate(`/add-event/${eventId}`);
        };

        const handleBookEvent = (eventId) => {
            navigate(`/book-event/${eventId}`); // Navigate to booking page with event ID
        };

        const [showFullDescription, setShowFullDescription] = useState(false);

        const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
        };

        return (
            <div className='container'>
                <h1 className='fs-1 .Title'>Events Live</h1>
                <div className='booking d-flex'>
                    <p className='text'>Book your first event in your city or create a new event</p>
                    <Link to='/add-event'><button className='add_event_button'>Add Event</button></Link>
                </div>
                <div className="events-container">
                    {events.map(event => (
                        <div key={event._id} className="event-card">
                            <h3>{event.name}</h3>
                            <img src={event.imageUrl} alt={event.name} />
                            <p>Date: <span>{new Date(event.fromDate).toLocaleDateString()} - {new Date(event.toDate).toLocaleDateString()}</span></p>
                            <p>Location: <span>{event.location}</span></p>
                            <p>Cost: <span>{event.cost}</span></p>
                            <p>
                                Description:
                                <span style={{ display: showFullDescription ? 'inline' : 'none' }}>{event.description}</span>
                                <span onClick={toggleDescription} style={{ cursor: 'pointer', color: 'blue' }}>
                                    {showFullDescription ? ' Read Less' : ' Read More'}
                                </span>
                            </p>
                            <button onClick={() => handleBookEvent(event._id)}>Book Event</button>
                            {userId === event.creatorId && (
                                <>
                                    <button onClick={() => handleUpdate(event._id)}>Update</button>
                                    <button onClick={() => handleDelete(event._id)}>Delete</button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );

    }

    export default Events;
