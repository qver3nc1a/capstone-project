import React from 'react';
import { Button } from 'antd';
import './Hero.css';

function HeroComponent() {
    return (
        <section className='hero'>
            <div className="hero_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Welcome to Little Lemon, a charming restaurant in Chicago.</p>
                <Button type="primary">Reserve a Table</Button>
            </div>
            <div className="hero_image">
                <img src="/Hero_Dish.jpg" alt="Hero Dish" />
            </div>
        </section>
    )
}

export default HeroComponent;