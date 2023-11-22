
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import './TicketBooking.css'
const TicketBooking = ({ eventId }) => {
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const [bookingMessage, setBookingMessage] = useState('');
    const { currentUser } = useAuth(); // Assuming useAuth provides currentUser

    const handleTicketChange = (e) => {
        setNumberOfTickets(e.target.value);
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3001/book-event/${eventId}`, {
                seatsToBook: numberOfTickets,
                userId: currentUser.id
            }, {
                responseType: 'blob' // Important for handling binary data
            });

            if (response.headers['content-type'] === 'application/pdf') {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const downloadUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', 'ticket.pdf'); // Any filename
                document.body.appendChild(link);
                link.click();
                link.remove();
            }

            setBookingMessage("Booking successful! Your ticket has been downloaded.");
        } catch (error) {
            console.error("Error booking tickets:", error);
            setBookingMessage(error.response.data.message || 'Error booking tickets');
        }
    };

    return (
        <div className='container'>
            <h2>Book Tickets</h2>
            <form onSubmit={handleBookingSubmit}>
                <label>
                    Number of Tickets:
                    <input type="number" value={numberOfTickets} onChange={handleTicketChange} min="1" />
                </label>
                <button type="submit">Book Tickets</button>
            </form>
            {bookingMessage && <p>{bookingMessage}</p>}
        </div>
    );
};

export default TicketBooking;



