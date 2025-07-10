import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import './Testimonials.css';

const { Content } = Layout;

function TestimonialsComponent() {
    return (
        <Content>
            <section className='testimonials'>
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
                <div className='testimonials_cta'>
                    <Button type="primary">Leave a Testimonial</Button>
                </div>
            </section>
        </Content>
    );
}

export default TestimonialsComponent;