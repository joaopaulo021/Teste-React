import DataParcela from "../DataParcela";
import { StyledButton, StyledDivContainer } from "./styles";
interface DataDisplayProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  onConfirm: () => void;
  nome: string,
  formatoReal: (valor: number) => string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({
  valorParcelas,
  numeroParcelas,
  totalComJuros,
  onConfirm,
  formatoReal,

}) => {
  return (
    <StyledDivContainer>
      <h2>Confira os dados:</h2>
      <DataParcela
        formatoReal={formatoReal}
        valorParcelas={valorParcelas}
        numeroParcelas={numeroParcelas}
        totalComJuros={totalComJuros}
      />
      <StyledButton onClick={onConfirm}>Confirmar</StyledButton>
    </StyledDivContainer>
  );
};

export default DataDisplay;
