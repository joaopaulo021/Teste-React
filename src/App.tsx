import { useState } from 'react';
import './App.css'
import MockData from './components/MockData';
import DataDisplay from './components/DataDisplay';
import PopUp from './components/PopUp';
import ConfirmPage from './pages/ConfirmPage';

interface DadosSimulados {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
}

const formatoReal = (valor: number): string => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const App: React.FC = () => {
  const [dadosSimulados, setDadosSimulados] = useState<DadosSimulados | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [confirmed, setConfirmed] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleMockSubmit = (valorParcelas: number, numeroParcelas: number, totalComJuros: number) => {
    setDadosSimulados({ valorParcelas, numeroParcelas, totalComJuros });
  };

  const handleConfirm = () => {
    setLoading(true);
    setShowPopup(false);
    setConfirmed(true)
    setTimeout(() => {
      setLoading(false); // Define o estado de carregamento como falso após 2 segundos
      setConfirmed(true);
    }, 2000);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <>
      <h1>Solicitação de empréstimo</h1>
      {!confirmed && (
        <>
          <MockData onSubmit={handleMockSubmit} />
          {dadosSimulados && (
            <DataDisplay
              valorParcelas={dadosSimulados.valorParcelas}
              numeroParcelas={dadosSimulados.numeroParcelas}
              totalComJuros={dadosSimulados.totalComJuros}
              onConfirm={() => setShowPopup(true)}
            />
          )}
        </>
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
      {confirmed && dadosSimulados && (
        <>
          {loading ? (
            <p>Carregando seu empréstimo...</p>
          ) : (
            <ConfirmPage
              formatoReal={formatoReal}
              valorParcelas={dadosSimulados.valorParcelas}
              numeroParcelas={dadosSimulados.numeroParcelas}
              totalComJuros={dadosSimulados.totalComJuros}
            />
          )}
        </>
      )}
    </>
  )
}

export default App
