import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonSubmitProps {
  haveQuantity: boolean;
}

export const ButtonSubmit = styled(BorderlessButton)<ButtonSubmitProps>`
  margin-top: 10px;
  width: 100%;
  background-color: ${({ haveQuantity, theme }) =>
    haveQuantity ? theme.colors.success : theme.colors.shape};
  border-radius: 4px;
  align-items: center;
  padding: 10px 0px;
`;

export const TextSubmit = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(25)}px;
`;
