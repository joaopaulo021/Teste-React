import styled from "styled-components";


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLabel = styled.label`
  position: relative;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 0 0 white;
  font-size: 16px;
  background: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 1px 0 0 #007bff;
  }
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;