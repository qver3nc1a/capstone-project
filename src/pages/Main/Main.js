import React from 'react';

import HeaderComponent from './shared/Header/Header';
import HeroComponent from './pages/Main/ui/Hero/Hero';
import ReservationForm from './pages/Reservation/ui/ReservationForm/ReservationForm';
import SpecialsComponent from './pages/Main/ui/Specials/Specials';
import TestimonialsComponent from './pages/Main/ui/Testimonials/Testimonials';
import AboutComponent from './pages/Main/ui/AboutUs/AboutUs';
import FooterComponent from './shared/Footer/Footer';
import ConfirmedBooking from './pages/Confirmation/ui/ConfirmedBooking/ConfirmedBooking';

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