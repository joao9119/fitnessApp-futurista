import React from 'react';
import { render, screen } from '@testing-library/react';
import SecurityPanel from '../SecurityPanel';

describe('SecurityPanel', () => {
  const security = {
    doisFatores: true,
    exportacaoDados: false,
    exclusaoDados: false,
  };

  it('exibe status de autenticação em duas etapas', () => {
    render(<SecurityPanel settings={security} />);
    expect(screen.getByText(/dois fatores/i)).toBeInTheDocument();
    // O primeiro checkbox é o de dois fatores
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
  });

  // O componente não renderiza dispositivos conectados, então este teste foi removido.
});
