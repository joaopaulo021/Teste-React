
interface DataDisplayProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  onConfirm: () => void;
}

const DataDisplay: React.FC<DataDisplayProps> = ({
  valorParcelas,
  numeroParcelas,
  totalComJuros,
  onConfirm,
}) => {
  return (
    <div>
      <h2>Dados simulados do Backend:</h2>
      <p>Valor das parcelas: {valorParcelas}</p>
      <p>Número de parcelas: {numeroParcelas}</p>
      <p>Total do valor com juros: {totalComJuros}</p>
      <button onClick={onConfirm}>Confirmar</button>
    </div>
  );
};

export default DataDisplay;
