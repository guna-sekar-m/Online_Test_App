import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Studentregisterform from './Studentregisterform';

describe('<Studentregisterform />', () => {
  test('it should mount', () => {
    render(<Studentregisterform />);
    
    const studentregisterform = screen.getByTestId('Studentregisterform');

    expect(studentregisterform).toBeInTheDocument();
  });
});