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
      <h1>Simule seu empréstimo !</h1>
      <StyledLabel>
        <StyledInput
          placeholder='Digite seu nome'
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </StyledLabel>

      <StyledLabel>
        <StyledInput
          type="number"
          placeholder='Insira o valor'
          value={valor === 0 ? '' : valor}
          onChange={(e) => {
            const newValue = Number(e.target.value)
            setValor(newValue >= 0 ? newValue : 0)
          }}
        />
      </StyledLabel>

      <StyledLabel>
        <StyledInput
          type="number"
          placeholder='Qtd. parcelas'
          value={parcelas === 0 ? '' : parcelas}
          onChange={(e) => {
            const newValue = Number(e.target.value)
            setParcelas(newValue >= 0 ? newValue : 0)
          }}
        />
      </StyledLabel>
      <StyledButton type="submit">Simular Empréstimo</StyledButton>
    </StyledForm>
  );
};

export default Form;
