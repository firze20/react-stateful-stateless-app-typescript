import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders name', () => {
  render(<App />);
  const linkElement = screen.getByText('Hey, my name is Frarthur!');
  expect(linkElement).toBeInTheDocument();
});
