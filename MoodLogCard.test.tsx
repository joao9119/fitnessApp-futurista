import React from 'react';
import { render, screen } from '@testing-library/react';
import MoodLogCard from '../MoodLogCard';
import { MoodLog } from '../../types/MoodLog';
import '@testing-library/jest-dom';

describe('MoodLogCard', () => {
  it('exibe corretamente as informações do registro de bem-estar', () => {
    const log: MoodLog = {
      id: '1',
      data: '2025-07-03T10:00:00Z',
      humor: 'feliz',
      sintomas: 'Nenhum',
      observacoes: 'Ótimo dia!'
    };
    render(<MoodLogCard log={log} />);
    expect(screen.getByText('FELIZ')).toBeInTheDocument();
    expect(screen.getByText(/Ótimo dia!/)).toBeInTheDocument();
    expect(screen.getByText(/Sintomas: Nenhum/)).toBeInTheDocument();
    expect(screen.getByText(/Registrado em/)).toBeInTheDocument();
  });
});
