import React from 'react';

import HeaderComponent from './shared/Header/Header';
import FooterComponent from './shared/Footer/Footer';
import ReservationForm from './pages/Reservation/ui/ReservationForm/ReservationForm';

function Reservation() {
    return (
        <>
            <HeaderComponent />
            <main>
                <ReservationForm />
            </main>
            <FooterComponent />
        </>
    );
}

export default Reservation;