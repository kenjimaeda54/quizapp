import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
  flex-direction: column;

  justify-content: space-between;
`;

export const ListContainer = styled(FlatList as new () => FlatList)`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
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

export const TitleSection = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const ColorQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px ${getBottomSpace() + 20}px;
`;

export const ButtonConfirm = styled(TouchableOpacity)`
  width: 40%;
  border-radius: 4px;
  padding: 5px 3px;
  align-items: center;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.success};
  border-style: solid;
`;

export const ButtonCancel = styled(ButtonConfirm)`
  border-color: ${({ theme }) => theme.colors.main};
`;

export const TextButtonConfirm = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const TextButtonCancel = styled(TextButtonConfirm)`
  color: ${({ theme }) => theme.colors.main};
`;

export const ContainerLoading = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;
