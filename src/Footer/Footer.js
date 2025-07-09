import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import './Footer.css';

const { Footer } = Layout;

function FooterComponent() {
    return (
        <Footer>
        <div className="footer">
          <div className="footer_logo">
            <img src="/Bigger_Logo.png" alt="Little Lemon Logo"/>
          </div>
          <div className="footer_nav">
            <div className="footer_nav_doormat-navigation">
              <h4>Doormat Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
              </ul>
            </div>
            <div className="footer_nav_contact-information">
              <h4>Contact Information</h4>
              <ul>
                <li><a href="address">address</a></li>
                <li><a href="tel">phone number</a></li>
                <li><a href="email">email</a></li>
              </ul>
            </div>
            <div className="footer_nav_social-media">
              <h4>Social Media</h4>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Footer>
    );
}

export default FooterComponent;