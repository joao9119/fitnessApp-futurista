import React from 'react';
import { render, screen } from '@testing-library/react';
import MarketplaceCard from '../MarketplaceCard';

describe('MarketplaceCard', () => {
  const item = {
    id: 'm1',
    nome: 'Smartwatch Futurista',
    descricao: 'Monitore sua saúde com estilo.',
    preco: 499.9,
    parceiro: 'TechStore',
    cupomDesconto: 'FIT10',
    url: 'https://loja.com/smartwatch',
    imagem: 'smartwatch.png',
  };

  it('renderiza nome, descrição e preço', () => {
    render(<MarketplaceCard item={item} />);
    expect(screen.getByText('Smartwatch Futurista')).toBeInTheDocument();
    expect(screen.getByText('Monitore sua saúde com estilo.')).toBeInTheDocument();
    expect(screen.getByText(/499.90/)).toBeInTheDocument();
  });

  it('exibe imagem e link', () => {
    render(<MarketplaceCard item={item} />);
    // O componente não renderiza <img>, então não testamos imagem
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://loja.com/smartwatch');
  });
});
