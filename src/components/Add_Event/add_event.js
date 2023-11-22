
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './add_event.css'; // Ensure this path is correct

const Add_Event = () => {
    const { eventId } = useParams(); // Get eventId from URL parameters if any
    const navigate = useNavigate();
    const [eventData, setEventData] = useState({
        name: '',
        fromDate: '',
        toDate: '',
        location: '',
        cost: '',
        imageUrl: '',
        totalEntries: '',
        description: '',
        totalBudget: ''
    });

    useEffect(() => {
        // Fetch the event data if in edit mode (eventId is present)
        if (eventId) {
            axios.get(`http://localhost:3001/event/${eventId}`)
                .then(response => {
                    const event = response.data;
                    setEventData({
                        name: event.name,
                        fromDate: event.fromDate.split('T')[0], // Format date for input field
                        toDate: event.toDate.split('T')[0], // Format date for input field
                        location: event.location,
                        cost: event.cost,
                        imageUrl: event.imageUrl,
                        totalEntries: event.totalEntries,
                        description: event.description,
                        totalBudget: event.totalBudget
                    });
                })
                .catch(error => console.error("Error fetching event:", error));
        }
    }, [eventId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = eventId
                ? await axios.put(`http://localhost:3001/update-event/${eventId}`, eventData)
                : await axios.post('http://localhost:3001/add-event', eventData);

            console.log(response.data);
            alert(eventId ? 'Updated successfully' : 'Published successfully');
            navigate('/events');
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };


    return (
        <div className='container'>
            <h1 className='fs-1'>{eventId ? 'Edit Your Event' : 'Add Your Event'}</h1>
            <p className='text'>{eventId ? 'Update your event details and republish' : 'Create a new event and publish'}</p>
            <form onSubmit={handleSubmit} className='events_form'>
                <input type="text" name="name" placeholder="Event Name" value={eventData.name} onChange={handleChange} required />
                <input type="date" name="fromDate" placeholder="From Date" value={eventData.fromDate.split('T')[0]} onChange={handleChange} required />
                <input type="date" name="toDate" placeholder="To Date" value={eventData.toDate.split('T')[0]} onChange={handleChange} />
                <input type="text" name="location" placeholder="Location" value={eventData.location}onChange={handleChange} required />
                <input type="number" name="cost" placeholder="Cost Per Person" value={eventData.cost} onChange={handleChange} />
                <input type="text" name="imageUrl" placeholder="Image URL" value={eventData.imageUrl} onChange={handleChange} />
                <input type="text" name="totalEntries" placeholder="Total Entries" value={eventData.totalEntries} onChange={handleChange} />
                <textarea name="description" placeholder="Short Description" value={eventData.description} onChange={handleChange}></textarea>
                <input type="number" name="totalBudget" placeholder="Total Budget" value={eventData.totalBudget} onChange={handleChange} />
                <button type="submit">{eventId ? 'Update Event' : 'Post Event'}</button>
            </form>
        </div>

    );

    // Render form with inputs bound to eventData state
    // ...
};

export default Add_Event;
