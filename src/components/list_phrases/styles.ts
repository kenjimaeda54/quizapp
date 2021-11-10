import { Dimensions, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  fieldSelect: boolean;
}

interface SelectProps {
  tintColorCorrect: boolean;
  changeOpacity: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: ${Dimensions.get('window').width}px;
  opacity: ${({ fieldSelect }) => (fieldSelect ? 0.5 : 1)};
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const Index = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
`;

export const TitleHeader = styled.Text`
  width: 75%;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
`;

export const ContainerSelect = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const SectionAnswers = styled.View``;

export const Select = styled.View<SelectProps>`
  background: ${({ tintColorCorrect, theme }) =>
    tintColorCorrect ? theme.colors.success : 'transparent'};
  width: 20px;
  opacity: ${({ changeOpacity }) => (changeOpacity ? 0.5 : 1)};
  height: 20px;
  border-color: ${({ theme }) => theme.colors.success};
  border-radius: 4px;
  border-width: 2px;
  margin: 2px 0px;
`;

export const Option = styled.Text`
  margin: 0px 10px;
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};
`;
