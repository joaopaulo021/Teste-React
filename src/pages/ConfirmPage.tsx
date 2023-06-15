import React from 'react';

interface ConfirmPageProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  formatoReal: (valor: number) => string;
}

const ConfirmPage: React.FC<ConfirmPageProps> = ({
  valorParcelas,
  numeroParcelas,
  totalComJuros,
  formatoReal,

}) => {

  return (
    <>
      <h2>O empréstimo foi realizado com sucesso!</h2>
      <p>Veja abaixo o que você contratou:</p>
      <p>Valor das Parcelas: {formatoReal(valorParcelas)}</p>
      <p>Número de Parcelas: {numeroParcelas}</p>
      <p>Total do Valor com Juros {formatoReal(totalComJuros)}</p>
      <button>Voltar</button>
    </>
  );
};

export default ConfirmPage;
