import React from 'react';
import { render, screen } from '@testing-library/react';
import SuggestionCard from '../SuggestionCard';

describe('SuggestionCard', () => {
  const suggestion = {
    id: 's1',
    titulo: 'Caminhe 10 minutos',
    descricao: 'Faça uma caminhada curta após o almoço.',
    tipo: 'atividade',
    data: '2025-07-03',
    autor: 'Coach',
  };

  it('renderiza título e descrição', () => {
    render(<SuggestionCard suggestion={suggestion} />);
    expect(screen.getByText('Caminhe 10 minutos')).toBeInTheDocument();
    expect(screen.getByText('Faça uma caminhada curta após o almoço.')).toBeInTheDocument();
  });
});
