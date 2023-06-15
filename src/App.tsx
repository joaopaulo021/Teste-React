import { useState } from 'react';
// import './App.css'
import MockData from './components/MockData';
import DataDisplay from './components/DataDisplay';
import PopUp from './components/PopUp';
import ConfirmPage from './components/ConfirmPage';
import { StyledDiv, StyledDivContainer } from './styles'

interface DadosSimulados {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  nomeCliente: string;
}

const formatoReal = (valor: number): string => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const App: React.FC = () => {
  const [dadosSimulados, setDadosSimulados] = useState<DadosSimulados | null>(null);
  const [showPopup, setShowPopup] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleMockSubmit = (valorParcelas: number, numeroParcelas: number, totalComJuros: number) => {
    setDadosSimulados({ valorParcelas, numeroParcelas, totalComJuros });
  };


  const handleConfirm = () => {
    setLoading(true);
    setShowPopup(false);
    setConfirmed(true)
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 2000);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <StyledDivContainer>
      <StyledDiv>
        {!confirmed && (
          <>
            <MockData onSubmit={handleMockSubmit} />
            {dadosSimulados && (
              <DataDisplay
                nomeCliente={dadosSimulados.nomeCliente}
                formatoReal={formatoReal}
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
            formatoReal={formatoReal}
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
      </StyledDiv>
    </StyledDivContainer>

  )
}

export default App
