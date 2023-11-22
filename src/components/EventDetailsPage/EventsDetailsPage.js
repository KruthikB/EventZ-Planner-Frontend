import React, { useState } from 'react';
import TicketBooking from 'path-to-your-components/TicketBooking';
import './EventDetailsPage.css'
const EventDetailsPage = () => {
    // Suppose you have the event data stored in state
    const [eventData, setEventData] = useState({
        name: 'Your Event Name',
        fromDate: new Date('2023-01-01'),
        // Add other necessary properties
    });

    return (
        <div>
            <h1>Event Details</h1>
            {/* Render Event Details */}
            <p>Name: {eventData.name}</p>
            <p>Date: {eventData.fromDate.toISOString().split('T')[0]}</p>
            {/* Render TicketBooking component with eventData */}
            <TicketBooking eventId="yourEventId" eventData={eventData} />
        </div>
    );
};

export default EventDetailsPage;
