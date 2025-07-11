import React from 'react';
import { Button } from 'antd';
import './Hero.css';

function HeroComponent() {
    return (
        <section className='hero'>
            <div className="hero_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Welcome to Little Lemon, a cozy Mediterranean restaurant nestled in the heart of Chicago.</p>
                <p>We bring the vibrant flavors of the Mediterranean coast to your plate with fresh ingredients, bold spices, and timeless recipes.</p>
                <p>Whether you're stopping by for a quick lunch or a relaxing dinner, Little Lemon offers a warm, inviting atmosphere and dishes that feel both comforting and exciting. Come taste the sunshine of the Mediterranean—right here in Chicago.</p>
                <Button className='hero_button' type="primary">Reserve a Table</Button>
            </div>
            <div className="hero_image">
                <img src="/Hero_Dish.jpg" alt="Hero Dish" />
            </div>
        </section>
    )
}

export default HeroComponent;