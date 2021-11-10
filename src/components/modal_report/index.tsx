import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { UserAnswer } from '../../util/dto';
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
  data: UserAnswer;
  totalAnswers: number;
  totalWrong: number;
  totalQuestion: number;
}

const ModalReport: React.ForwardRefRenderFunction<Modalize, ModalReporProps> = (
  { totalAnswers, totalWrong, totalQuestion, data, ...rest },
  ref,
) => {
  return (
    <Modalize
      HeaderComponent={
        <ContainerFlap>
          <Flap />
        </ContainerFlap>
      }
      modalHeight={300}
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
            <ColorFooter> {totalQuestion} </ColorFooter>
          </FooterTotal>
          <FooterTotal>
            <SubtitleFooter>Total de acertos:</SubtitleFooter>
            <ColorFooter>{totalAnswers} </ColorFooter>
          </FooterTotal>
          <FooterTotal>
            <SubtitleFooter>Total de erros:</SubtitleFooter>
            <ColorFooter>{totalWrong}</ColorFooter>
          </FooterTotal>
        </Footer>
      }
    >
      <Content>
        <TitleModal> Seu relatório de acerto e erros </TitleModal>
        <View>
          <Question>Questão: {data.index}</Question>
          <WrapperAnswers>
            <TitleAnswers>Reposta escolhida:</TitleAnswers>
            <SubtitleAnswers>{data.answerSelect}</SubtitleAnswers>
          </WrapperAnswers>
          <WrapperAnswers>
            <SelectAnswer>Resposta correta:</SelectAnswer>
            <SubTitleAnswer>{data.answerCorrect}</SubTitleAnswer>
          </WrapperAnswers>
        </View>
        <Separation />
      </Content>
    </Modalize>
  );
};

export default forwardRef(ModalReport);
