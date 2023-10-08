const React = require('react');
const { render } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const App = require('./App');

test('renders GitHub User Browser heading', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const headingElement = getByText(/GitHub User Browser/i);
  expect(headingElement).toBeInTheDocument();
});
