import React from 'react';
import { Button, Row, Col } from 'antd';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

function HeroComponent() {
    const navigate = useNavigate();

    const handleReserveTable = () => {
        navigate('/reservation');
    };

    return (
        <section className='hero'>
            <Row gutter={[32, 32]} align='middle'>
                <Col xs={24} md={12} lg={12} className='hero_text'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Welcome to Little Lemon, a cozy Mediterranean restaurant nestled in the heart of Chicago.</p>
                    <p>We bring the vibrant flavors of the Mediterranean coast to your plate with fresh ingredients, bold spices, and timeless recipes.</p>
                    <p>Whether you're stopping by for a quick lunch or a relaxing dinner, Little Lemon offers a warm, inviting atmosphere and dishes that feel both comforting and exciting. Come taste the sunshine of the Mediterranean—right here in Chicago.</p>
                    <Button className='hero_button' type='primary' onClick={handleReserveTable}>
                        Reserve a Table
                    </Button>
                </Col>
                <Col xs={24} md={12} lg={12}className='hero_image'>
                    <img src='/images/Hero_Dish.jpg' alt='Hero Dish' />
                </Col>
            </Row>
        </section>
    );
}

export default HeroComponent;