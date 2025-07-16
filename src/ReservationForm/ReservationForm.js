import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, InputNumber } from 'antd';
import './ReservationForm.css';
import { useNavigate } from 'react-router-dom';


function ReservationForm() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Form values:', values);
        navigate('/');
    };

    return (
    <div className='reservation-form'>
        <h1>Reserve a Table</h1>
        <Form
            name='reservation'
            layout='vertical'
            onFinish={onFinish}
            >
        <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please enter your name!' }]}
            >
            <Input placeholder='Enter your name' />
        </Form.Item>

        <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
            >
            <Input placeholder='Enter your email' />
        </Form.Item>

        <Form.Item
            name='phone'
            label='Phone Number'
            rules={[{ required: true, message: 'Please enter your phone number!' }]}
            >
            <Input placeholder='Enter your phone number' />
        </Form.Item>

        <Form.Item
            name='date'
            label='Date'
            rules={[{ required: true, message: 'Please select a date!' }]}
            >
            <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
            name='time'
            label='Time'
            rules={[{ required: true, message: 'Please select a time!' }]}
            >
            <TimePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
            name='guests'
            label='Number of Guests'
            rules={[{ required: true, message: 'Please enter the number of guests!' }]}
            >
            <InputNumber min={1} max={20} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
            <Button type='primary' htmlType='submit'>
                Submit
            </Button>
        </Form.Item>
        </Form>
        </div>
    );
}

export default ReservationForm;