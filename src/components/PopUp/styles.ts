import styled,{css} from 'styled-components';
interface PopupButtonProps {
  verde?: boolean;
}
export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

export const PopupButton = styled.button<PopupButtonProps>`
  margin-top: 10px;
  margin-left:20px;
  padding: 8px 16px;
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    ${({ verde }) =>
      verde
        ? css`
            background-color: #00ff00;
          `
        : css`
            background-color: #ff0000;
          `};
  }
`;
export const Styledh2 = styled.h2`
 color:#ff0000;
`;

export const StyledText = styled.p`
 color:#00ff00;
 text-align:center;
 margin-left:10px;
`;
export const StyledSpan = styled.span`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
 font-weight:bold;
 font-size:1.2rem;
 text-align:center;
`;