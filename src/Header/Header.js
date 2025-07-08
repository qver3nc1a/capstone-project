import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import './Header.css';

const { Header } = Layout;

function HeaderComponent() {
    return (
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
    );
}

export default HeaderComponent;