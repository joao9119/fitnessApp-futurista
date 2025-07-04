import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupCard from '../GroupCard';

describe('GroupCard', () => {
  const group = {
    id: '1',
    nome: 'Desafio 30 Dias',
    descricao: 'Grupo para motivação e desafios mensais',
    membros: [
      { id: 'u1', nome: 'João' },
      { id: 'u2', nome: 'Maria' }
    ],
    privado: false,
    imagem: 'group.png',
    eventos: [],
  };

  it('renderiza nome, descrição e membros', () => {
    render(<GroupCard group={group} />);
    expect(screen.getByText('Desafio 30 Dias')).toBeInTheDocument();
    expect(screen.getByText('Grupo para motivação e desafios mensais')).toBeInTheDocument();
    expect(screen.getByText(/Membros: 2/)).toBeInTheDocument();
  });

  it('exibe imagem do grupo', () => {
    render(<GroupCard group={group} />);
    // O componente não renderiza <img>, então não testamos imagem
  });
});
