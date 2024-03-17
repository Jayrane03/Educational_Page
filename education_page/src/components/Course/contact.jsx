import React, { useState } from 'react';
import ContactImg  from "E:/Education_Website/education_page/public/Images/contact_form.jpg"
import "../../Styles/courses.css";// Import the CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
   <>
   <section  id='contact'>
   
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
   </>
  );
};

export default ContactForm;
