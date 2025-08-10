import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

// Mock firebase modules used in AuthContext
jest.mock('./firebase', () => ({
  auth: {}
}));

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: (auth, callback) => {
    callback(null);
    return () => {};
  }
}));

const TestComponent = () => {
  const { loading } = useAuth();
  return <div>Loading: {String(loading)}</div>;
};

test('AuthProvider supplies loading state', async () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  await waitFor(() => {
    expect(screen.getByText('Loading: false')).toBeInTheDocument();
  });
});
