import { render, screen } from '@testing-library/react';
import App, { initializeTimes, updateTimes } from './App';

describe('initializeTimes', () => {
  test('should return the correct initial times', () => {
    const expectedTimes = [
      '7:00 AM',
      '9:00 AM',
      '12:00 PM',
      '1:00 PM',
      '3:00 PM',
      '5:00 PM',
      '7:00 PM',
      '9:00 PM'
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});