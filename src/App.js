/* global fetchAPI */
import React, { useReducer, useState } from 'react';
import './App.css';
import { Layout } from 'antd';

import HeaderComponent from './Header/Header';
import HeroComponent from './Hero/Hero';
import ReservationForm from './ReservationForm/ReservationForm';
import SpecialsComponent from './Specials/Specials';
import TestimonialsComponent from './Testimonials/Testimonials';
import AboutComponent from './AboutUs/AboutUs';
import FooterComponent from './Footer/Footer';
import ConfirmedBooking from './ReservationForm/ConfirmedBooking';

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