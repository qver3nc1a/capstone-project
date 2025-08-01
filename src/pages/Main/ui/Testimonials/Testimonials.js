import React from 'react';
import { Layout, Menu, Button, Card, Row, Col, Avatar } from 'antd';
import './Testimonials.css';

const { Content } = Layout;

function TestimonialsComponent() {
    return (
        <Content>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Card>
                        <Card.Meta
                            avatar={<Avatar src="images/CoolGirl_Avatar.png" />}
                            title = 'Jade'
                            description="The best restaurant experience I've ever had! The food was delicious and the service was outstanding."
                        />
                    </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Card>
                        <Card.Meta
                            avatar={<Avatar src="/images/Man_Avatar.png" />}
                            title = 'Xavier'
                            description="I had an amazing time! The ambiance was perfect and the staff was very attentive. The food was exquisite!"
                        />
                    </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Card>
                        <Card.Meta
                            avatar={<Avatar src="/images/Girl_Avatar.png" />}
                            title = 'Sophie'
                            description="The food was incredible and the service was top-notch! I can't wait to come back and try more dishes, so excited!"
                        />
                    </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Card>
                        <Card.Meta
                            avatar={<Avatar src="/images/CoolGuy_Avatar.png" />}
                            title = 'Peter'
                            description="I can't wait to come back! Such a wonderful experience. The staff was friendly and the food was delicious."
                        />
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