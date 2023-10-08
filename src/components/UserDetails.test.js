const React = require('react');
const { render, unmountComponentAtNode } = require('react-dom');
const UserDetails = require('./UserDetails');
const { act } = require('react-dom/test-utils');
const axios = require('axios');

jest.mock('axios');

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('renders with or without a user', async () => {
  const mockUser = {
    name: 'John Doe',
    avatar_url: 'https://example.com/avatar.png',
    bio: 'Software Developer',
  };

  // Mock the axios.get function to return the mockUser data
  axios.get.mockResolvedValueOnce({ data: mockUser });

  await act(async () => {
    render(<UserDetails />, container);
  });

  // Check that the rendered content includes user details
  expect(container.querySelector('.user-name').textContent).toBe('John Doe');
  expect(container.querySelector('.bio').textContent).toBe('Bio: Software Developer');
});

