import Form from "../Form";
import { useState } from "react";

interface MockProps {
  onSubmit: (parcelas: number, numeroParcelas: number, totalComJuros: number) => void;
}

const MockData: React.FC<MockProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const simulateRequest = (nome: string, valor: number, parcelas: number) => {
    setLoading(true);

    // Simulação da requisição ao backend com os valores fornecidos
    const juros = valor * 0.05; // Juros de 5%
    const totalComJuros = valor + juros;
    const valorParcelas = totalComJuros / parcelas;

    // Simulação de um atraso de 1 segundo para imitar a chamada assíncrona ao backend
    setTimeout(() => {
      onSubmit(valorParcelas, parcelas, totalComJuros);
    }, 1000);
  }

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Form onSubmit={simulateRequest} />
      )}
    </>
  );

}

export default MockData;
