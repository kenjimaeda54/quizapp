import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Phrase } from '../../util/dto';
import {
  Container,
  ContainerHeader,
  Index,
  TitleHeader,
  ContainerSelect,
  SectionAnswers,
  Select,
  Option,
} from './styles';

interface ListPhases extends TouchableOpacityProps {
  data: Phrase;
  index: number;
}

interface DataProps {
  data: Phrase;
}

export function ListPhases({ index, data, ...props }: ListPhases) {
  return (
    <Container>
      <ContainerHeader>
        <Index>{index}</Index>
        <TitleHeader>{data.question}</TitleHeader>
      </ContainerHeader>
      <SectionAnswers>
        <ContainerSelect {...props}>
          <Select />
          <Option>{data.incorrect_answers[0]}</Option>
        </ContainerSelect>
        <ContainerSelect>
          <Select />
          <Option>{data.incorrect_answers[1]}</Option>
        </ContainerSelect>
        <ContainerSelect>
          <Select />
          <Option>{data.incorrect_answers[2]}</Option>
        </ContainerSelect>
        <ContainerSelect>
          <Select />
          <Option></Option>
        </ContainerSelect>
      </SectionAnswers>
    </Container>
  );
}
