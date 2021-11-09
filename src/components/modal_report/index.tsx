import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
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
} from './styles';

interface ModalReporProps extends ModalizeProps {
  index: number;
  answerCorrect: string;
  answerSelect: string;
}

const ModalReport: React.ForwardRefRenderFunction<Modalize, ModalReporProps> = (
  { index, answerCorrect, answerSelect, ...rest },
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
    >
      <Content>
        <TitleModal> Seu relatório de acerto e erros </TitleModal>
        <View>
          <Question>Questão: {index}</Question>
          <WrapperAnswers>
            <TitleAnswers>Reposta escolhida:</TitleAnswers>
            <SubtitleAnswers>{answerCorrect}</SubtitleAnswers>
          </WrapperAnswers>
          <WrapperAnswers>
            <SelectAnswer>Resposta correta:</SelectAnswer>
            <SubTitleAnswer>{answerSelect}</SubTitleAnswer>
          </WrapperAnswers>
        </View>
        <Separation />
      </Content>
    </Modalize>
  );
};

export default forwardRef(ModalReport);
