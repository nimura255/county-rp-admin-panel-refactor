import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: flex-start;

  label + label {
    margin-top: 10px;
  }
`;
