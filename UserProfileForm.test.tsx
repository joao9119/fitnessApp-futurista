import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileForm from '../UserProfileForm';

describe('UserProfileForm', () => {
  it('permite cadastro completo de usuário', () => {
    const onSave = jest.fn();
    render(<UserProfileForm onSave={onSave} />);

    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'João Teste' } });
    fireEvent.change(screen.getByLabelText(/Data de Nascimento/i), { target: { value: '2000-01-01' } });
    fireEvent.change(screen.getByLabelText(/Sexo/i), { target: { value: 'masculino' } });
    fireEvent.change(screen.getByLabelText(/Altura/i), { target: { value: '180' } });
    fireEvent.change(screen.getByLabelText(/Peso/i), { target: { value: '80' } });

    // Simula envio do formulário
    fireEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        nome: 'João Teste',
        dataNascimento: '2000-01-01',
        sexo: 'masculino',
        alturaCm: 180,
        pesoKg: 80,
      })
    );
  });
});
