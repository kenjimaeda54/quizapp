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
  margin: 16px 0px;
`;

export const Flap = styled.View`
  height: 3px;
  width: 48px;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const ContentTitleModal = styled.View`
  width: 100%;
  padding: 0px 20px;
`;

export const TitleModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextBack = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.success};
  margin-top: 10px;
`;

export const Question = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperAnswers = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin: 10px 0;
`;

export const TitleAnswers = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubtitleAnswers = styled(TitleAnswers)`
  width: 60%;
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  color: ${({ theme }) => theme.colors.success};
`;

export const SelectAnswer = styled(TitleAnswers)``;

export const SubTitleAnswer = styled(SubtitleAnswers)``;

export const Footer = styled.View`
  width: 100%;
  padding: 0px 20px;
  margin-top: 20px;
`;

export const FooterTotal = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleFooter = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ColorFooter = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(17)}px;
  line-height: ${RFValue(19)}px;
  color: ${({ theme }) => theme.colors.success};
  margin: 0px 3px;
`;
