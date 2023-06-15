import DataParcela from '../DataParcela';
import {
  PopupContainer,
  PopupContent,
  PopupButton,
  Styledh2
}
  from './styles';
interface PopupProps {
  valorParcelas: number;
  numeroParcelas: number;
  totalComJuros: number;
  onConfirm: () => void;
  onCancel: () => void;
  formatoReal: (valor: number) => string;
}

const PopUp: React.FC<PopupProps> = ({
  valorParcelas,
  numeroParcelas,
  totalComJuros,
  onCancel,
  onConfirm,
  formatoReal,

}) => {
  return (
    <PopupContainer>
      <PopupContent>
        <Styledh2>Confirmar o empréstimo?</Styledh2>

        <DataParcela
          formatoReal={formatoReal}
          valorParcelas={valorParcelas}
          numeroParcelas={numeroParcelas}
          totalComJuros={totalComJuros}
        />

        <PopupButton verde onClick={onConfirm}>Confirmar</PopupButton>
        <PopupButton onClick={onCancel}>Cancelar</PopupButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default PopUp



