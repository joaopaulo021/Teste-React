import DataParcela from '../DataParcela';

interface ConfirmPageProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  formatoReal: (valor: number) => string;
}

const handleReloadPage = () => {
  window.location.reload();
};

const ConfirmPage: React.FC<ConfirmPageProps> = ({
  valorParcelas,
  numeroParcelas,
  totalComJuros,
  formatoReal,
}) => {

  return (
    <>
      <h2>O empréstimo foi realizado com sucesso!</h2>

      <DataParcela
        formatoReal={formatoReal}
        valorParcelas={valorParcelas}
        numeroParcelas={numeroParcelas}
        totalComJuros={totalComJuros}
      />

      <button onClick={handleReloadPage}>Voltar</button>
    </>
  );
};

export default ConfirmPage;
