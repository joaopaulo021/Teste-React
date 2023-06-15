import styled from 'styled-components';

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
  background-color: #fff;
  padding: 20px;
  color:black;
  border-radius: 5px;
  text-align: center;
`;

export const PopupButton = styled.button`
  margin-top: 10px;
`;