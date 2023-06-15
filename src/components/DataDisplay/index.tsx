
interface DataDisplayProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  onConfirm: () => void;
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
    <div>
      <h2>Dados simulados do Backend:</h2>
      <p>Valor das parcelas: {formatoReal(valorParcelas)}</p>
      <p>Número de parcelas: {numeroParcelas}</p>
      <p>Total do valor com juros: {formatoReal(totalComJuros)}</p>
      <button onClick={onConfirm}>Confirmar</button>
    </div>
  );
};

export default DataDisplay;
