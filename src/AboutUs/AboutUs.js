import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import './AboutUs.css';

const { Content } = Layout;

function AboutUsComponent() {
    return (
        <section className='ABOUT-SECTION'>
          <div className='about-text'>
            <h2>About Us</h2>
            <p>Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.</p>
            <p>We are committed to providing our customers with the best dining experience, using only the freshest ingredients and traditional recipes.</p>
            <p>Our team is passionate about food and hospitality, ensuring that every visit is memorable.</p>
            <p>Join us for a meal and experience the warmth of our family atmosphere.</p>
          </div>
          <div className='about-image'>
            <img src="/Owners.webp" alt="Owners"/>
          </div>
        </section>
    );
}

export default AboutUsComponent;