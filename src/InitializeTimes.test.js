import { initializeTimes } from './App';

beforeEach(() => {
  global.fetchAPI = jest.fn();
});

test('initializeTimes should return available times from global fetchAPI', () => {
  const fakeTimes = ['17:00', '18:00', '19:00'];

  global.fetchAPI.mockReturnValue(fakeTimes);

  const result = initializeTimes();

  expect(global.fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(fakeTimes);
});
