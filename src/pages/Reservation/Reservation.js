import React from 'react';

import HeaderComponent from '../../shared/Header/Header';
import FooterComponent from '../../shared/Footer/Footer';
import ReservationForm from './ui/ReservationForm/ReservationForm';

function Reservation({ dispatch, availableTimes }) {
    return (
        <>
            <HeaderComponent />
            <main>
                <ReservationForm dispatch={dispatch} availableTimes={availableTimes}/>
            </main>
            <FooterComponent />
        </>
    );
}

export default Reservation;