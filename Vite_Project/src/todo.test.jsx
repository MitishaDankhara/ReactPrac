// TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('Add todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(getByText('Test Todo')).toBeInTheDocument();
  });

  test('Delete todo', () => {
    const { getByText, queryByText } = render(<TodoList />);
    const input = getByText('Test Todo');
    const deleteButton = input.parentElement.querySelector('button:last-child');
    fireEvent.click(deleteButton);
    expect(queryByText('Test Todo')).not.toBeInTheDocument();
  });

  test('Edit todo', () => {
    const { getByText, queryByText, getByDisplayValue } = render(<TodoList />);
    const input = getByText('Test Todo');
    const editButton = input.parentElement.querySelector('button:first-child');
    fireEvent.click(editButton);
    const editInput = getByDisplayValue('Test Todo');
    fireEvent.change(editInput, { target: { value: 'Edited Todo' } });
    fireEvent.click(getByText('Save'));
    expect(queryByText('Test Todo')).not.toBeInTheDocument();
    expect(getByText('Edited Todo')).toBeInTheDocument();
  });
});