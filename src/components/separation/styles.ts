import styled from 'styled-components/native';

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
`;
