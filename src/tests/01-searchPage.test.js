import { screen, within } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('2. Teste o componente <About.js /> .', () => {
  it('a) A página contém o texto "buscar repositório no github".', () => {
    renderWithRouter(<App />);
    const text = screen.getByRole('textbox', {
      name: /buscar repositório no github/i,
    });

    expect(text).toBeDefined();
  });

  it('b) A página contém um input de texto.', () => {
    renderWithRouter(<App />);
    const input = screen.getByTestId('name-input-text');
    expect(input).toBeDefined();
  });

  it('c) Contém um botão com o texto "buscar".', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', {
      name: /lupa de busca buscar/i,
    });

    within(button).getByText(/buscar/i);
    expect(button).toBeDefined();
  });
});
