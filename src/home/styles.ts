import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

interface ButtonSubmitProps {
  haveQuantity: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  flex-direction: column;
  padding: ${getStatusBarHeight() + 20}px 20px ${getBottomSpace() + 20}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: 30px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: 30px;
`;

export const ContainerQuantity = styled.View`
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const CardQuantity = styled.View`
  background-color: ${({ theme }) => theme.colors.text};
  width: 60%;
  padding: 20px 10px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
`;

export const ContainerButton = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerMins = styled(RectButton)`
  width: 45%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 5px 0px;
  align-items: center;
  border-radius: 4px;
`;

export const ContainerPlus = styled(RectButton)`
  width: 45%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 5px 0px;
  align-items: center;
  border-radius: 4px;
`;

export const ButtonSubmit = styled(BorderlessButton)<ButtonSubmitProps>`
  margin-top: 10px;
  width: 100%;
  background-color: ${({ haveQuantity, theme }) =>
    haveQuantity ? theme.colors.main : theme.colors.shape};
  border-radius: 4px;
  align-items: center;
  padding: 5px 0px;
`;

export const TextSubmit = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(25)}px;
`;
