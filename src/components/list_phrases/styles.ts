import { Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const Index = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.success};
  margin-right: 10px;
`;

export const TitleHeader = styled.Text`
  width: 85%;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.success};
  margin-right: 10px;
`;

export const ContainerSelect = styled.View`
  flex-direction: row;
`;

export const SectionAnswers = styled.View``;

export const Select = styled(TouchableOpacity)`
  width: 20px;
  height: 20px;
  border-color: ${({ theme }) => theme.colors.success};
  border-radius: 4px;
  border-width: 2px;
  margin: 2px 0px;
`;

export const Option = styled.Text`
  margin-left: 10px;
`;
