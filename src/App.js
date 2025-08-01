/* global fetchAPI */
import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

  return (
    <Router>
      <Layout>
        <HeaderComponent />
        <Content>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroComponent />
                  <SpecialsComponent />
                  <TestimonialsComponent />
                  <AboutComponent />
                </>
              }
            />
            <Route
              path='/reservation'
              element={<ReservationForm availableTimes={availableTimes} dispatch={dispatch} />}
            />
            <Route
              path='/confirmation'
              element={<ConfirmedBooking />}
            />
          </Routes>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
}

export default App;