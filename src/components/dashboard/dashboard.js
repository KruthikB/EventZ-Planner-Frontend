import React from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom';
import { Carousel, Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';

function Dashboard() {

  useEffect(() => {
    // Scroll to the element with the id 'about' on mount
    const homeSection = document.getElementById('dashboard');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }

  }, []);
  return (
    <div className="dashboard">
      <div className="main-section">
        {/* Button placed over the image */}
        <div className='container'>

          <h1 className='h1' style={{ background: "none", color: "#FF5F5F" }}>Welcome</h1>
          <p id='description'>We are thrilled to have you on board! Whether you're planning a corporate conference, a grand wedding, or a small social gathering, our Event Management System is here to make your event extraordinary.</p>
          <h2 className='h2' style={{ background: "none", color: "white" }}>Start planning your event</h2>
          <Link to='/events'><button className='start-button'>Start</button></Link>

        </div>
      </div>

      <div className='About'>
        <div className='container' id='about'>
          <h1>About Us</h1>
          <p>Welcome to EventZ Planner, where we transform events into extraordinary experiences! Established with a passion for creating unforgettable moments, our team is dedicated to making every event a seamless and memorable affair.</p>
          <h3>Who We Are?</h3>
          <p>At Eventz Planner, we are a dynamic team of event enthusiasts, planners, and creatives who believe in the power of well-executed events. Whether it's a corporate gathering, a wedding celebration, or a community event, we approach each project with innovation, precision, and a touch of magic.</p>
          <h3>Our Misson</h3>
          <p>Our mission is simple yet profound: to turn your vision into reality. We thrive on the challenge of bringing dreams to life, meticulously planning every detail to ensure your event is a true reflection of your style and purpose.</p>
          <h3>What Sets Us Apart?</h3>
          <p>
            <ul>
              <li><b>Passion for Perfection:</b> We are passionate about perfection. From the initial concept to the final execution, we strive for excellence in every aspect of event planning.</li>
              <li><b>Creativity Unleashed:</b> Creativity is at the heart of what we do. Our team of talented designers and planners are dedicated to bringing fresh and innovative ideas to the table, making each event unique and memorable.</li>
              <li><b>Client-Centric Approach:</b> Your satisfaction is our top priority. We value open communication, collaboration, and a personalized approach to cater to your specific needs.</li>
            </ul>
          </p>
          <h1>Our Services</h1>
          <Carousel className="hide-indicators custom-arrow">
            <Carousel.Item interval={3000}>

              <div className='d-flex cards-container p-2'>
                <Card className="cards" style={{ width: '30%', backgroundColor: "white" }}>
                  {/* <Card.Img variant="top" src="..." alt="Card image cap" /> */}
                  <Card.Body>
                    <Card.Title>Event Planning and Coordination</Card.Title>
                    <Card.Text>
                    Our website take care of every detail, from conceptualization to execution, ensuring a seamless and stress-free event management. Whether it's a corporate conference or a movie streaming, we handle it all.
                    </Card.Text>
                    <Button className='card-button'>Explore</Button>
                  </Card.Body>
                </Card>
                <Card className="cards" style={{ width: '30%', backgroundColor: "white" }}>
                  {/* <Card.Img variant="top" src="..." alt="Card image cap" /> */}
                  <Card.Body>
                    <Card.Title>Venue Selection and Management</Card.Title>
                    <Card.Text>
                    Discover the perfect setting for your event with our venue selection service. We handle logistics, and coordination to ensure your chosen venue aligns perfectly with your vision.
                    </Card.Text>
                    <Button className='card-button'>Explore</Button>
                  </Card.Body>
                </Card>
                <Card className="cards" style={{ width: '30%', backgroundColor: "white" }}>
                  {/* <Card.Img variant="top" src="..." alt="Card image cap" /> */}
                  <Card.Body>
                    <Card.Title>Entertainment Booking</Card.Title>
                    <Card.Text>
                    From live bands to captivating performers, we curate entertainment that adds the perfect touch to your event. Enjoy a memorable experience with our carefully selected and professionally managed entertainment options.
                    </Card.Text>
                    <Button className='card-button'>Explore</Button>
                  </Card.Body>
                </Card>
              </div>

            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div className='d-flex cards-container p-2'>
                <Card className="cards" style={{ width: '30%', backgroundColor: "white" }}>
                  {/* <Card.Img variant="top" src="..." alt="Card image cap" /> */}
                  <Card.Body>
                    <Card.Title>Logistics and On-Site Management</Card.Title>
                    <Card.Text>
                    Leave the logistics to us! Our team handles transportation, on-site coordination, and logistics management to ensure smooth operations, allowing you to focus on enjoying the event.
                    </Card.Text>
                    <Button className='card-button'>Explore</Button>
                  </Card.Body>
                </Card>
                <Card className="cards" style={{ width: '30%', backgroundColor: "white" }}>
                  {/* <Card.Img variant="top" src="..." alt="Card image cap" /> */}
                  <Card.Body>
                    <Card.Title>Technology Integration</Card.Title>
                    <Card.Text>
                    Embrace the future of event management with our technology integration service. From online RSVP systems to virtual event solutions, we leverage cutting-edge technology to enhance the overall event experience.
                    </Card.Text>
                    <Button className='card-button'>Explore</Button>
                  </Card.Body>
                </Card>
                <Card className="cards" style={{ width: '30%', backgroundColor: "white" }}>
                  {/* <Card.Img variant="top" src="..." alt="Card image cap" /> */}
                  <Card.Body className='card-body'>
                    <Card.Title className='card-title'>Flexible Event Management</Card.Title>
                    <Card.Text>
                      The platform allows flexibility in scheduling and managing the events. The users have the ability to update and delete the event any time.
                    </Card.Text>
                    <Button className='card-button'>Explore</Button>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
