import React from 'react';
import { Layout, Row, Col } from 'antd';
import './AboutUs.css';

const { Content } = Layout;

function AboutUsComponent() {
    return (
        <Content>
            <section className='about-us'>
                <Row gutter={[24, 24]} align='middle'>
                    <Col xs={24} md={12} className='about-us_text'>
                        <h2>About Us</h2>
                        <p>Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.</p>
                        <p>We are committed to providing our customers with the best dining experience, using only the freshest ingredients and traditional recipes.</p>
                        <p>Our team is passionate about food and hospitality, ensuring that every visit is memorable.</p>
                        <p>Join us for a meal and experience the warmth of our family atmosphere.</p>
                    </Col>
                    <Col xs={24} md={12} lg={12} className='about-us_image'>
                        <img src='/Owners.webp' alt='Owners' />
                    </Col>
                </Row>
            </section>
        </Content>
    );
}

export default AboutUsComponent;