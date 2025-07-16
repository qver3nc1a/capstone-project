import React from 'react';
import './App.css';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderComponent from './Header/Header';
import HeroComponent from './Hero/Hero';
import ReservationForm from './ReservationForm/ReservationForm';
import SpecialsComponent from './Specials/Specials';
import TestimonialsComponent from './Testimonials/Testimonials';
import AboutComponent from './AboutUs/AboutUs';
import FooterComponent from './Footer/Footer';

const { Content } = Layout;

function App() {
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
            <Route path="/reservation" element={<ReservationForm />} />
          </Routes>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
}

export default App;