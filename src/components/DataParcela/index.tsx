import { StyledText, StyledSpan } from "./styles";

interface DataParcelaProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  formatoReal: (valor: number) => string;
}

const DataParcela: React.FC<DataParcelaProps> = ({
  valorParcelas,
  numeroParcelas,
  totalComJuros,
  formatoReal,

}) => {
  return (
    <>
      <StyledSpan>
        Valor das parcelas:
        <StyledText>{formatoReal(valorParcelas)}</StyledText>
      </StyledSpan>

      <StyledSpan>
        Quantidade de parcelas:
        <StyledText>{numeroParcelas}x</StyledText>
      </StyledSpan>

      <StyledSpan>
        Valor total com 5% de juros:
        <StyledText>{formatoReal(totalComJuros)}</StyledText>
      </StyledSpan>
    </>
  );
};

export default DataParcela
