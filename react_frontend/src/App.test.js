import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to MovieAI heading', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to MovieAI/i);
  expect(heading).toBeInTheDocument();
});
