import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/Footer.json')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('Failed to load footer data:', error));
  }, []);

  if (!data) return null; // Optionally show a loader here

  return (
    <footer>
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h3 style={{ color: '#f5a623' }}>{data.company.name}</h3>
          <p>{data.company.description}</p>
          <p>{data.company.copyright}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            {data.links.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Brands */}
        <div className="footer-column">
          <h4>Top Brands</h4>
          <ul>
            {data.links.brands.map((brand, index) => (
              <li key={index}>{brand}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: {data.contact.email}</p>
          <p>Phone: {data.contact.phone}</p>
          <p>Location: {data.contact.location}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Follow us:
          {' '}
          <a href={data.social.facebook}>Facebook</a> |
          <a href={data.social.instagram}> Instagram</a> |
          <a href={data.social.linkedin}> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
