import { updateTimes } from './App';

beforeEach(() => {
  global.fetchAPI = jest.fn();
});

test('updateTimes should update times for the provided date', () => {
  const selectedDate = new Date('2025-09-10');
  const availableTimes = ['18:00', '19:00'];
  global.fetchAPI.mockReturnValue(availableTimes);

  const initialState = ['17:00'];
  const action = { type: 'update', date: selectedDate.toISOString() };

  const newState = updateTimes(initialState, action);

  expect(global.fetchAPI).toHaveBeenCalledWith(new Date(action.date));
  expect(newState).toEqual(availableTimes);
});
