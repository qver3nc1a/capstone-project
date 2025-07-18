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

const { Content } = Layout;

function initializeTimes() {
  return [
    '7:00 AM',
    '9:00 AM',
    '12:00 PM',
    '1:00 PM',
    '3:00 PM',
    '5:00 PM',
    '7:00 PM',
    '9:00 PM'
  ];
}

function updateTimes(state, action) {
  return initializeTimes();
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
          </Routes>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
}

export default App;