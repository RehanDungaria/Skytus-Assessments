import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the blog UI heading and story list', () => {
  render(<App />);

  expect(screen.getByText(/simple blog ui/i)).toBeInTheDocument();
  expect(screen.getByText(/latest stories/i)).toBeInTheDocument();
  expect(screen.getByText(/why minimal design makes reading better/i)).toBeInTheDocument();
});
