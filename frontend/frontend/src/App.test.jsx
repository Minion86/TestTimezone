import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import App from './App';

vi.mock('axios');

test('submits coordinates and displays the returned local time', async () => {
  axios.get.mockResolvedValue({ data: { message: { formatted: '2026-10-16T12:30:00' } } });
  const alert = vi.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Enter latitude'), { target: { value: '28.54' } });
  fireEvent.change(screen.getByPlaceholderText('Enter longitude'), { target: { value: '-81.38' } });
  fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  expect(axios.get).toHaveBeenCalledWith('http://localhost:6060/timezone/28.54/-81.38');
  await waitFor(() => expect(alert).toHaveBeenCalledWith('Local time=12:30pm'));
});
