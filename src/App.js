/* global fetchAPI */
import React, { useReducer } from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderComponent from './Header/Header';
import HeroComponent from './Hero/Hero';
import ReservationForm from './ReservationForm/ReservationForm';
import SpecialsComponent from './Specials/Specials';
import TestimonialsComponent from './Testimonials/Testimonials';
import AboutComponent from './AboutUs/AboutUs';
import FooterComponent from './Footer/Footer';
import ConfirmedBooking from './ReservationForm/ConfirmedBooking';

const { Content } = Layout;

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  if (action.type === 'update') {
    const date = new Date(action.date);
    return fetchAPI(date);
  }
  return state;
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
              path="/reservation"
              element={<ReservationForm availableTimes={availableTimes} dispatch={dispatch} />}
            />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
}

export default App;