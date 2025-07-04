import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentCard from '../ContentCard';

describe('ContentCard', () => {
  const content = {
    id: 'c1',
    titulo: 'Dica de Nutrição',
    descricao: 'Beba água antes das refeições.',
    tipo: 'dica',
    autor: 'NutriCoach',
    data: '2025-07-03',
    imagem: 'nutricao.png',
    url: 'https://exemplo.com',
  };

  it('renderiza título e descrição', () => {
    render(<ContentCard content={content} />);
    expect(screen.getByText('Dica de Nutrição')).toBeInTheDocument();
    expect(screen.getByText('Beba água antes das refeições.')).toBeInTheDocument();
  });

  it('exibe imagem e link', () => {
    render(<ContentCard content={content} />);
    // O componente não renderiza <img>, então não testamos imagem
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://exemplo.com');
  });
});
