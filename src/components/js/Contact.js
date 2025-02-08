import React, { useState }from 'react';
import '../css/Contact.css';
// import data from '../../data/data';
import emailjs from "emailjs-com";

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;  // Replace with EmailJS Service ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Replace with EmailJS Template ID
    const userId = process.env.REACT_APP_EMAILJS_USER_ID; // Replace with your EmailJS User ID

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });

    // Reset form fields after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id={id} className="section height-100 custom-bg-color">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Me</h1>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-button">
            <p>SEND MESSAGE</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
