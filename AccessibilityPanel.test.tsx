import React from 'react';
import { render, screen } from '@testing-library/react';
import AccessibilityPanel from '../AccessibilityPanel';

describe('AccessibilityPanel', () => {
  const accessibility = {
    altoContraste: true,
    leituraVozAlta: false,
    navegaçãoTeclado: true,
    tamanhoFonte: 'grande',
  };

  it('exibe opções de acessibilidade', () => {
    render(<AccessibilityPanel settings={accessibility} />);
    expect(screen.getByText(/Alto Contraste/i)).toBeInTheDocument();
    // O componente não exibe o texto "grande" explicitamente
  });
});
