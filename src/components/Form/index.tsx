import React, { useState, FormEvent } from 'react';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './styles';

interface FormProps {
  onSubmit: (nome: string, valor: number, parcelas: number) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [parcelas, setParcelas] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(nome, valor, parcelas);
    setNome('');
    setValor(0);
    setParcelas(0);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Nome do solicitante
        <StyledInput
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </StyledLabel>

      <StyledLabel>
        Valor desejado
        <StyledInput
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
      </StyledLabel>

      <StyledLabel>
        Número de parcelas
        <StyledInput
          type="number"
          value={parcelas}
          onChange={(e) => setParcelas(Number(e.target.value))}
        />
      </StyledLabel>
      <StyledButton type="submit">Simular Empréstimo</StyledButton>
    </StyledForm>
  );
};

export default Form;
