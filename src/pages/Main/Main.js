import React from 'react';

import HeaderComponent from '../../shared/Header/Header';
import HeroComponent from './ui/Hero/Hero';
import SpecialsComponent from './ui/Specials/Specials';
import TestimonialsComponent from './ui/Testimonials/Testimonials';
import AboutComponent from './ui/AboutUs/AboutUs';
import FooterComponent from '../../shared/Footer/Footer';

function Main() {
    return (
        <>
            <HeaderComponent />
            <main>
                <HeroComponent />
                <SpecialsComponent />
                <TestimonialsComponent />
                <AboutComponent />
            </main>
            <FooterComponent />
        </>
    );
}

export default Main;