import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const testFunc = (a: number, b: number) => a + b
test('renders learn react link', () => {
  expect(testFunc(1, 2)).toBe(3)
});
