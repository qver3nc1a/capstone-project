import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import './Header.css';

const { Header } = Layout;

function HeaderComponent() {
    return (
        <Header className='header'>
            <Row align='middle' justify='space-between'>
                <Col xs={24} md={6} lg={6} className='header_logo'>
                    <img src='/Small_Logo.png' alt='Little Lemon Logo' />
                </Col>
                <Col xs={24} md={18}>
                    <Menu mode='horizontal' className='header_menu' overflowedIndicator={null}>
                        <Menu.Item key='home'>Home</Menu.Item>
                        <Menu.Item key='about'>About</Menu.Item>
                        <Menu.Item key='menu'>Menu</Menu.Item>
                        <Menu.Item key='reservations'>Reservations</Menu.Item>
                        <Menu.Item key='order-online'>Order Online</Menu.Item>
                        <Menu.Item key='login'>Login</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    );
}

export default HeaderComponent;