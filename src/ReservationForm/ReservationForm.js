import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, InputNumber } from 'antd';
import './ReservationForm.css';

function required(fieldName) {
  return { required: true, message: `Please select a ${fieldName}!` }
}

function ReservationForm({ availableTimes = [], dispatch , setCurrentView }) {
    useEffect(() => {
      dispatch({ type: 'fetchTimes' });
    }, [dispatch]);

    const handleSubmit = () => {
        setCurrentView('confirmed');
    };

    const handleDateChange = (date) => {
        dispatch({ type: 'update', date });
    };

    return (
    <div className='reservation-form'>
        <h1>Reserve a Table</h1>
        <Form
            name='reservation'
            layout='vertical'
            onFinish={handleSubmit}
            >
        <Form.Item
            name='name'
            label='Name'
            rules={[required('name')]}
            >
            <Input placeholder='Enter your name' />
        </Form.Item>

        <Form.Item
            name='email'
            label='Email'
            rules={[required('email')]}
            >
            <Input placeholder='Enter your email' />
        </Form.Item>

        <Form.Item
            name='phone'
            label='Phone Number'
            rules={[required('phone')]}
            >
            <Input placeholder='Enter your phone number' />
        </Form.Item>

        <Form.Item
            name='date'
            label='Date'
            rules={[required('date')]}
            >
            <DatePicker style={{ width: '100%' }} onChange={handleDateChange} />
        </Form.Item>

        <Form.Item
            name='time'
            label='Time'
            rules={[required('time')]}
            >
            <Select placeholder='Select a time'>
                {availableTimes.map((time) => (
                    <Select.Option key={time} value={time}>
                        {time}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>

        <Form.Item
            name='guests'
            label='Number of Guests'
            rules={[required('number of guests')]}
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