import React from 'react';
import './App.css';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';

import HeaderComponent from './Header/Header';
import HeroComponent from './Hero/Hero';
import SpecialsComponent from './Specials/Specials';
import TestimonialsComponent from './Testimonials/Testimonials';
import AboutComponent from './AboutUs/AboutUs';
import FooterComponent from './Footer/Footer';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <HeroComponent />
        <SpecialsComponent />
        <TestimonialsComponent />
        <AboutComponent />
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default App;