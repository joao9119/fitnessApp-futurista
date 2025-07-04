import React from 'react';
import { render, screen } from '@testing-library/react';
import AchievementBadge from '../AchievementBadge';
import { Achievement } from '../../types/Achievement';

describe('AchievementBadge', () => {
  it('exibe corretamente as informações da conquista', () => {
    const achievement: Achievement = {
      id: 'badge1',
      nome: 'Primeiro Treino',
      descricao: 'Parabéns pelo primeiro treino!',
      icone: 'icon.png',
      tipo: 'meta',
      dataConquista: '2025-07-03T12:00:00Z'
    };
    render(<AchievementBadge achievement={achievement} />);
    expect(screen.getByText('Primeiro Treino')).toBeInTheDocument();
    expect(screen.getByText('Parabéns pelo primeiro treino!')).toBeInTheDocument();
    expect(screen.getByAltText('Primeiro Treino')).toBeInTheDocument();
    expect(screen.getByText(/Conquistado em/)).toBeInTheDocument();
  });
});
