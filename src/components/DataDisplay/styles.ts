import styled from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  background-color: transparent;
  color: white;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`;
export const StyledDivContainer = styled.div`
  display: flex;
  padding:20px;
  align-items:center;
  justify-content:center;
  flex-direction:column;
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