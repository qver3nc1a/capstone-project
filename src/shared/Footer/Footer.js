import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import './Footer.css';

const { Footer } = Layout;

function FooterComponent() {
    const doormatNavLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Menu', href: '#menu' },
        { label: 'Reservations', href: '#reservations' },
        { label: 'Order Online', href: '#order-online' },
        { label: 'Login', href: '#login' },
    ];

    const contactInfoNavLinks = [
        { label: 'Address', href: '#address' },
        { label: 'Phone Number', href: '#phone' },
        { label: 'Email', href: '#email' },
    ]

    const socialMediaNavLinks = [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
    ];

    return (
    <Footer className='footer'>
      <Row>
        <Col xs={24} md={6} lg={6} className='footer_logo'>
          <img src='/images/Bigger_Logo.png' alt='Little Lemon Logo' />
        </Col>

        <Col xs={24} md={6} lg={6}>
          <h4>Doormat Navigation</h4>
          <ul>
            {doormatNavLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </Col>

        <Col xs={24} sm={6} md={6}>
          <h4>Contact Information</h4>
          <ul>
            {contactInfoNavLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </Col>

        <Col xs={24} sm={8} md={6}>
          <h4>Social Media</h4>
          <ul>
            {socialMediaNavLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterComponent;