import { render, screen } from '@testing-library/react';

// Mock Firebase modules before importing App
jest.mock('./firebase', () => ({ auth: {} }));
jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {}
}));

import App from './App';

test('renders home page text', () => {
  render(<App />);
  expect(screen.getByText(/Sign Up Now/i)).toBeInTheDocument();
});
