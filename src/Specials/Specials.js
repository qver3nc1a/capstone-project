import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import './Specials.css';

const { Content } = Layout;

function SpecialsComponent() {
    return (
        <Content>
            <section className='specials'>
          <h2>Weekly specials!</h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ width: '100%' }} cover={<img alt="Greek Salad" src="/Greek_Salad.jpg" />}>
                <h3>Greek Salad</h3>
                <p>A classic Greek salad with fresh ingredients.</p>
                <p className='specials_greek-salad_price'>$12.99</p>
                <a href="/order" className="specials_greek-salad_delivery-link">Order a delivery</a>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ width: '100%' }} cover={<img alt="Bruschetta" src="/Bruschettas.jpg" />}>
                <h3>Bruschetta</h3>
                <p>A delicious appetizer with fresh tomatoes and basil.</p>
                <p className='specials_bruschetta_price'>$5.99</p>
                <a href="/order" className="specials_bruschetta_delivery-link">Order a delivery</a>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card style={{ width: '100%' }} cover={<img alt="Lemon Dessert" src="/Lemon_Cake_Pops.jpg" />}>
                <h3>Lemon Dessert</h3>
                <p>A delightful lemon dessert to satisfy your sweet tooth.</p>
                <p className='specials_lemon-dessert_price'>$5.00</p>
                <a href="/order" className="specials_lemon-dessert_delivery-link">Order a delivery</a>
              </Card>
            </Col>
          </Row>
        </section>
        </Content>
    );
}

export default SpecialsComponent;