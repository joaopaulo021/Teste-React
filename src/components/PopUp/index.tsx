import { PopupContainer, PopupContent, PopupButton } from './styles';
interface PopupProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const PopUp: React.FC<PopupProps> = ({
  valorParcelas,
  numeroParcelas,
  totalComJuros,
  onCancel,
  onConfirm,

}) => {
  return (
    <PopupContainer>
      <PopupContent>
        <h2>Dados do Empréstimo</h2>
        <p>Valor das Parcelas: R$ {valorParcelas}</p>
        <p>Número de Parcelas: {numeroParcelas}</p>
        <p>Total do Valor com Juros: R$ {totalComJuros}</p>
        <PopupButton onClick={onConfirm}>Confirmar</PopupButton>
        <PopupButton onClick={onCancel}>Cancelar</PopupButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default PopUp



