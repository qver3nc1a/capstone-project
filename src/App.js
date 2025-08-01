/* global fetchAPI */
import React, { useReducer, useState } from 'react';
import './App.css';
import { Layout } from 'antd';

import HeaderComponent from './shared/Header/Header';
import HeroComponent from './pages/Main/ui/Hero/Hero';
import ReservationForm from './pages/Reservation/ui/ReservationForm/ReservationForm';
import SpecialsComponent from './pages/Main/ui/Specials/Specials';
import TestimonialsComponent from './pages/Main/ui/Testimonials/Testimonials';
import AboutComponent from './pages/Main/ui/AboutUs/AboutUs';
import FooterComponent from './shared/Footer/Footer';
import ConfirmedBooking from './pages/Confirmation/ui/ConfirmedBooking/ConfirmedBooking';

const { Content } = Layout;

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === 'update') {
    const date = new Date(action.date);
    return fetchAPI(date);
  }
  return state;
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    if (currentView === 'reservation') {
      return <ReservationForm availableTimes={availableTimes} dispatch={dispatch} setCurrentView={setCurrentView} />;
    }
    if (currentView === 'confirmed') {
      return <ConfirmedBooking />;
    }
    return (
      <>
        <HeroComponent setCurrentView={setCurrentView} />
        <SpecialsComponent />
        <TestimonialsComponent />
        <AboutComponent />
      </>
    );
  };

  return (
    <Layout>
      <HeaderComponent />
      <Content>
        {renderView()}
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default App;