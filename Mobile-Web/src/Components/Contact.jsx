// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-card animated">
        <div className="contact-info">
          <h1>Buy Your Dream Device</h1>
          <p>Reach out to us for the best mobile and laptop deals.</p>

          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="What device are you interested in?" rows="4" required></textarea>
            <button type="submit">Send Inquiry</button>
          </form>
        </div>

        <div className="contact-image">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230626/pngtree-aerial-view-of-an-impressive-collection-of-3d-rendered-devices-displaying-image_3682672.jpg" alt="Device Preview" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
