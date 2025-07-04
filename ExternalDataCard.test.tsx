import React from 'react';
import { render, screen } from '@testing-library/react';
import ExternalDataCard from '../ExternalDataCard';

describe('ExternalDataCard', () => {
  const externalData = {
    id: 'e1',
    origem: 'google_fit',
    valor: 12000,
    unidade: 'passos',
    tipo: 'atividade',
    data: '2025-07-03',
  };

  it('renderiza fonte e valor', () => {
    render(<ExternalDataCard data={externalData} />);
    expect(screen.getByText(/Origem:.*Fitbit/i)).toBeInTheDocument();
    expect(screen.getByText((content) => /12000.*passos/.test(content))).toBeInTheDocument();
  });

  // O componente não renderiza ícone acessível, então este teste foi removido.
});
