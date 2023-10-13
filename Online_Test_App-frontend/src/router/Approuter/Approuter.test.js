import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Approuter from './Approuter';

describe('<Approuter />', () => {
  test('it should mount', () => {
    render(<Approuter />);
    
    const approuter = screen.getByTestId('Approuter');

    expect(approuter).toBeInTheDocument();
  });
});