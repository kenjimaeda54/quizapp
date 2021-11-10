import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { forwardRef, Fragment } from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { RootStackParamList } from '../../routes/app.routes';
import { UserAnswer, TotalAnswer } from '../../util/dto';
import { Separation } from '../separation';
import {
  Content,
  ContainerFlap,
  ContentTitleModal,
  Flap,
  TitleModal,
  Subtitle,
  TextBack,
  Question,
  WrapperAnswers,
  TitleAnswers,
  SubtitleAnswers,
  SelectAnswer,
  SubTitleAnswer,
  Footer,
  FooterTotal,
  TitleFooter,
  ColorFooter,
} from './styles';

interface ModalReporProps extends ModalizeProps {
  data: UserAnswer[];
  total: TotalAnswer;
  haveBack: boolean;
}

type RoutesScreens = StackNavigationProp<RootStackParamList, 'home'>;

const ModalReport: React.ForwardRefRenderFunction<Modalize, ModalReporProps> = (
  { data, haveBack, total, ...rest },
  ref,
) => {
  const { navigate } = useNavigation<RoutesScreens>();

  const handleNavigation = () => navigate('home');

  return (
    <Modalize
      HeaderComponent={
        <ContainerFlap>
          <Flap />
          <Footer>
            <FooterTotal>
              <TitleFooter>Total de perguntas respondidas:</TitleFooter>
              <ColorFooter> {total?.totalQuestions} </ColorFooter>
            </FooterTotal>
            <FooterTotal>
              <TitleFooter>Total de acertos:</TitleFooter>
              <ColorFooter>{total?.answerTotalCorrect} </ColorFooter>
            </FooterTotal>
            <FooterTotal>
              <TitleFooter>Total de erros:</TitleFooter>
              <ColorFooter>{total?.answerTotalWrong}</ColorFooter>
            </FooterTotal>
          </Footer>
        </ContainerFlap>
      }
      modalHeight={500}
      handleStyle={{
        display: 'none',
      }}
      {...rest}
      ref={ref}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
      }}
    >
      <ContentTitleModal>
        <TitleModal> Seu relatório de acerto e erros </TitleModal>
        {haveBack && (
          <Fragment>
            <Subtitle>
              Volte para pagina inicial escolher mais perguntas
            </Subtitle>
            <BorderlessButton onPress={handleNavigation}>
              <TextBack>Voltar?</TextBack>
            </BorderlessButton>
          </Fragment>
        )}
      </ContentTitleModal>
      {data?.map((item) => (
        <Content key={item.id}>
          <View>
            <WrapperAnswers>
              <TitleAnswers>Reposta escolhida:</TitleAnswers>
              <SubtitleAnswers>{item.answerSelect}</SubtitleAnswers>
            </WrapperAnswers>
            <WrapperAnswers>
              <SelectAnswer>Resposta correta:</SelectAnswer>
              <SubTitleAnswer>{item.answerCorrect}</SubTitleAnswer>
            </WrapperAnswers>
          </View>
          <Separation />
        </Content>
      ))}
    </Modalize>
  );
};

export default forwardRef(ModalReport);
