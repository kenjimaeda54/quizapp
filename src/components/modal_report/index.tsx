import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { UserAnswer, TotalAnswer } from '../../util/dto';
import { Separation } from '../separation';
import {
  Content,
  ContainerFlap,
  Flap,
  TitleModal,
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
  SubtitleFooter,
} from './styles';

interface ModalReporProps extends ModalizeProps {
  data: UserAnswer[];
  total: TotalAnswer;
}

const ModalReport: React.ForwardRefRenderFunction<Modalize, ModalReporProps> = (
  { data, total, ...rest },
  ref,
) => {
  return (
    <Modalize
      HeaderComponent={
        <ContainerFlap>
          <Flap />
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
      FooterComponent={
        <Footer>
          <FooterTotal>
            <TitleFooter>Total de perguntas:</TitleFooter>
            <ColorFooter> {total.totalQuestions} </ColorFooter>
          </FooterTotal>
          <FooterTotal>
            <SubtitleFooter>Total de acertos:</SubtitleFooter>
            <ColorFooter>{total.answerTotalCorrect} </ColorFooter>
          </FooterTotal>
          <FooterTotal>
            <SubtitleFooter>Total de erros:</SubtitleFooter>
            <ColorFooter>{total.answerTotalWrong}</ColorFooter>
          </FooterTotal>
        </Footer>
      }
    >
      <TitleModal> Seu relatório de acerto e erros </TitleModal>
      {data.map((item) => (
        <Content key={item.id}>
          <View>
            <Question>Questão: {item.index}</Question>
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
