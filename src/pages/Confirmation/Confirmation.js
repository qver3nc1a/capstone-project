import React from 'react';

import HeaderComponent from './shared/Header/Header';
import FooterComponent from './shared/Footer/Footer';
import ConfirmedBooking from './pages/Confirmation/ui/ConfirmedBooking/ConfirmedBooking';

function Confirmation() {
    return (
        <>
            <HeaderComponent />
            <main>
                <ConfirmedBooking />
            </main>
            <FooterComponent />
        </>
    );
}

export default Confirmation;