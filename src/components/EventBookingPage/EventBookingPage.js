import React from 'react';
import { useParams } from 'react-router-dom';
import TicketBooking from '../TicketBooking/TicketBooking'; // Adjust the import path as needed
import { useAuth } from '../../context/AuthContext'; // Adjust the import path as needed

const EventBookingPage = () => {
    const { eventId } = useParams(); // Extract eventId from URL parameters
    const { userId } = useAuth(); // Assuming useAuth hook provides the userId

    return (
        <div className='container'>
            <h1 className='fs-1'>Event Booking</h1>
            <TicketBooking eventId={eventId} userId={userId} />
        </div>
    );
};

export default EventBookingPage;
