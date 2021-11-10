import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Content = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  padding: 20px;
`;

export const ContainerFlap = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

export const Flap = styled.View`
  height: 3px;
  width: 48px;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const TitleModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
`;

export const Question = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperAnswers = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const TitleAnswers = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubtitleAnswers = styled(TitleAnswers)`
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  color: ${({ theme }) => theme.colors.success};
`;

export const SelectAnswer = styled(TitleAnswers)``;

export const SubTitleAnswer = styled(SubtitleAnswers)``;

export const Footer = styled.View``;

export const FooterTotal = styled.View``;

export const TitleFooter = styled.Text``;

export const ColorFooter = styled.Text``;

export const SubtitleFooter = styled.Text``;
