import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "it works" on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/it works/i);
  expect(linkElement).toBeInTheDocument();
});
