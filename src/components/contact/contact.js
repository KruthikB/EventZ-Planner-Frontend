import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
    return (
        <section>
            <header className="section-header">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>
                        For any questions, concerns, or feedback, please feel free to
                        contact us using the form below or reach out to us directly via
                        email. We strive to respond to all inquiries within 24 hours.
                        We appreciate your interest in our company and look forward to hearing
                        from you soon.
                    </p>
                </div>
            </header>

            <main className="container">
                <div className="row">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Address</h4>
                                <p>
                                    7CVX+PXR Jalpally Rd, Jalapalli Hyderabad, Telangana India
                                    <br />55060
                                </p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Phone</h4>
                                <p>990-333-4563</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info-content">
                                <h4>Email</h4>
                                <p>randomguy@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form action="" id="contact-form">
                            <h2>Send Message</h2>
                            <div className="input-box">
                                <input type="text" required name="fullName" placeholder="Full Name" />
                            </div>

                            <div className="input-box">
                                <input type="email" required name="email" placeholder="Email" />
                            </div>

                            <div className="input-box">
                                <textarea required name="message" placeholder="Type your Message..."></textarea>
                            </div>

                            <div className="input-box">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>

        </section>
    );
}

export default Contact;
