import './App.css'
import MockData from './components/MockData';
import DataDisplay from './components/DataDisplay';
import { useState } from 'react';

interface DadosSimulados {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
}

const App: React.FC = () => {
  const [dadosSimulados, setDadosSimulados] = useState<DadosSimulados | null>(null);

  const handleMockSubmit = (valorParcelas: number, numeroParcelas: number, totalComJuros: number) => {
    setDadosSimulados({ valorParcelas, numeroParcelas, totalComJuros });

  };

  const handleConfirm = () => {
    // Aqui você pode realizar alguma ação ao confirmar os dados, como enviar para o servidor ou atualizar o estado do aplicativo
    console.log('Dados confirmados:', dadosSimulados);
  };

  return (
    <>
      <h1>Solicitação de emprestimo</h1>
      <MockData onSubmit={handleMockSubmit} />
      {dadosSimulados && (
        <DataDisplay
          valorParcelas={dadosSimulados.valorParcelas}
          numeroParcelas={dadosSimulados.numeroParcelas}
          totalComJuros={dadosSimulados.totalComJuros}
          onConfirm={handleConfirm}
        />
      )}
    </>


  )
}

export default App
