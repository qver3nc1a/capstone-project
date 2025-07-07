import React from 'react';
import './App.css';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header className="HEADER">
        <div className="logo">
          <img src="/Small_Logo.png" alt="Little Lemon Logo" style={{ height: 30 }} />
        </div>
        <Menu mode='horizontal' className="menu" overflowedIndicator={null}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="menu">Menu</Menu.Item>
          <Menu.Item key="reservations">Reservations</Menu.Item>
          <Menu.Item key="order-online">Order Online</Menu.Item>
          <Menu.Item key="login">Login</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <section className='HERO-SECTION'>
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Welcome to Little Lemon, a charming restaurant in Chicago.</p>
            <Button type="primary">Reserve a Table</Button>
          </div>
          <div className="hero-image">
            <img src="/Hero_Dish.jpg" alt="Hero Dish" />
          </div>
        </section>
        <section className='SPECIALS-SECTION'>
          <h2>Weekly specials!</h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ width: '100%' }} cover={<img alt="Greek Salad" src="/Greek_Salad.jpg" />}>
                <h3>Greek Salad</h3>
                <p>A classic Greek salad with fresh ingredients.</p>
                <p className='price'>$12.99</p>
                <a href="/order" className="card-link">Order a delivery</a>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ width: '100%' }} cover={<img alt="Bruschetta" src="/Bruschettas.jpg" />}>
                <h3>Bruschetta</h3>
                <p>A delicious appetizer with fresh tomatoes and basil.</p>
                <p className='price'>$5.99</p>
                <a href="/order" className="card-link">Order a delivery</a>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ width: '100%' }} cover={<img alt="Lemon Dessert" src="/Lemon_Cake_Pops.jpg" />}>
                <h3>Lemon Dessert</h3>
                <p>A delightful lemon dessert to satisfy your sweet tooth.</p>
                <p className='price'>$5.00</p>
                <a href="/order" className="card-link">Order a delivery</a>
              </Card>
            </Col>
          </Row>
        </section>
        <section className='TESTIMONIALS-SECTION'>
          <h2>Testimonials</h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Customer 1" style={{ width: '100%' }}>
                <p>"yap"</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Customer 2" style={{ width: '100%' }}>
                <p>"yap"</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Customer 3" style={{ width: '100%' }}>
                <p>"yap"</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card title="Customer 4" style={{ width: '100%' }}>
                <p>"yap"</p>
              </Card>
            </Col>
          </Row>
        </section>
        <section className='ABOUT-SECTION'>
          <div className='about-text'>
            <h2>About Us</h2>
            <p>Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.</p>
            <p>We are committed to providing our customers with the best dining experience, using only the freshest ingredients and traditional recipes.</p>
            <p>Our team is passionate about food and hospitality, ensuring that every visit is memorable.</p>
            <p>Join us for a meal and experience the warmth of our family atmosphere.</p>
          </div>
          <div className='about-image'>
            <img src="/Owners.webp" alt="Owners"/>
          </div>
        </section>
      </Content>
      <Footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/Bigger_Logo.png" alt="Little Lemon Logo" style={{ height: 300 }} />
          </div>
          <div className="footer-nav">
            <div className="footer-section">
              <h4>Doormat Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Information</h4>
              <ul>
                <li><a href="address">address</a></li>
                <li><a href="tel">phone number</a></li>
                <li><a href="email">email</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Social Media</h4>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  )
}

export default App;