import React, { useState } from 'react';
import ContactImg from "../../../public/Images/contact_form.jpg";
import "../../Styles/courses.css"; // Import the CSS file for styling the modal
import Alert from 'react-bootstrap/Alert'; // Import the Alert component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission, like sending data to backend or displaying a success message
    console.log(formData);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Display the success alert
    setShowAlert(true);

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide the success alert after 2 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 100000);
  };

  return (
    <>
      <section id='contact'>
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <div className="cont-page">
            <div className="contact-image">
              <img src={ContactImg} alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      {/* Render the success alert if showAlert is true */}
      {showAlert && (
        <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
          <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className='alert-div'>
            Message sent successfully!
          </Alert>
        </div>
      )}
    </>
  );
};

export default ContactForm;
