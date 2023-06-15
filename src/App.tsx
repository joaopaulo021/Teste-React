import { useState } from 'react';
import './App.css'
import MockData from './components/MockData';
import DataDisplay from './components/DataDisplay';
import PopUp from './components/PopUp';


interface DadosSimulados {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
}

const App: React.FC = () => {
  const [dadosSimulados, setDadosSimulados] = useState<DadosSimulados | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleMockSubmit = (valorParcelas: number, numeroParcelas: number, totalComJuros: number) => {
    setDadosSimulados({ valorParcelas, numeroParcelas, totalComJuros });

  };

  const handleConfirm = () => {
    // Aqui você pode realizar alguma ação ao confirmar os dados, como enviar para o servidor ou atualizar o estado do aplicativo
    console.log('Dados confirmados:', dadosSimulados);
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <>
      <h1>Solicitação de empréstimo</h1>
      <MockData onSubmit={handleMockSubmit} />
      {dadosSimulados && (
        <DataDisplay
          valorParcelas={dadosSimulados.valorParcelas}
          numeroParcelas={dadosSimulados.numeroParcelas}
          totalComJuros={dadosSimulados.totalComJuros}
          onConfirm={() => setShowPopup(true)}
        />
      )}
      {showPopup && (
        <PopUp
          valorParcelas={dadosSimulados?.valorParcelas || 0}
          numeroParcelas={dadosSimulados?.numeroParcelas || 0}
          totalComJuros={dadosSimulados?.totalComJuros || 0}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>


  )
}

export default App
