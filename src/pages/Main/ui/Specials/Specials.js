import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import './Specials.css';

const { Content } = Layout;

function SpecialsComponent() {
    return (
        <Content>
          <section className='specials'>
            <Row className="specials_header" align='middle' justify='space-between'>
              <Col>
                <h2>Weekly specials!</h2>
              </Col>
              <Col>
                <a href="/menu" className="specials_menu-link">View Online Menu</a>
              </Col>
            </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card className='specials__card' cover={<img alt="Greek Salad" src="/images/Greek_Salad.jpg" />}>
                <h3>Greek Salad</h3>
                <p>A classic Greek salad with fresh ingredients. Sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.</p>
                <p className='specials_greek-salad_price'>$12.99</p>
                <a href="/order" className="specials_greek-salad_delivery-link">Order a delivery</a>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card className='specials__card' cover={<img alt="Bruschetta" src="/images/Bruschettas.jpg" />}>
                <h3>Bruschetta</h3>
                <p>A traditional Italian appetizer with chopped plum tomatoes and onion blended with fresh garlic and pesto drizzled with olive oil.</p>
                <p className='specials_bruschetta_price'>$5.99</p>
                <a href="/order" className="specials_bruschetta_delivery-link">Order a delivery</a>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card className='specials__card' cover={<img alt="Lemon Dessert" src="/images/Lemon_Cake_Pops.jpg" />}>
                <h3>Lemon Dessert</h3>
                <p>Lemon cake pops coated in white chocolate. A delightful lemon dessert to satisfy your sweet tooth.</p>
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