import { render } from '@testing-library/react';

// Mock Firebase modules before importing App
jest.mock('./firebase', () => ({ auth: {} }));
jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {}
}));

import App from './App';

test('renders without crashing', () => {
  render(<App />);
});
