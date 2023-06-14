import styled from "styled-components";


export const StyledForm = styled.form`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  display:flex;
  /* border:2px solid red; */
`;

export const StyledInput = styled.input`
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 255, 0.2), 0 4px 8px rgba(0, 0, 255, 0.1);
  padding: 8px;
  font-size: 16px;
  outline: none;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.3), 0 2px 4px rgba(0, 0, 255, 0.2),
      0 4px 8px rgba(0, 0, 255, 0.1);
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #fca311;
  color: #fff;
  border: none;
  cursor: pointer;
`;