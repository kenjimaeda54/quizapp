import React, { useState } from 'react';
import { Pressable, PressableProps, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Phrase } from '../../util/dto';
import {
  Container,
  ContainerHeader,
  Index,
  TitleHeader,
  ContainerSelect,
  Select,
  Option,
} from './styles';
import { useTheme } from 'styled-components';
import { View } from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProps,
  RectButton,
} from 'react-native-gesture-handler';

interface ListPhases extends BorderlessButtonProps {
  data: Phrase;
  index: number;
}

export function ListPhases({ index, data, ...props }: ListPhases) {
  const { colors } = useTheme();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTouched, setIsTouched] = useState(0);
  const [phraseSelect, setPhraseSelect] = useState('');
  const [enableTouch, setEnableTouch] = useState(true);

  function handleReport(phraseSelect, report, reportSelect) {
    setIsTouched(reportSelect);
    setPhraseSelect(phraseSelect);
    setEnableTouch(false);
    if (report === data.correct_answer) {
      return setIsCorrect(true);
    }
    return setIsCorrect(false);
  }

  console.log(data.correct_answer);
  return (
    <Container fieldSelect={phraseSelect === data.id}>
      <ContainerHeader>
        <Index>{index}</Index>
        <TitleHeader>{data.question}</TitleHeader>
      </ContainerHeader>
      <View>
        <ContainerSelect>
          <BorderlessButton
            enabled={enableTouch && phraseSelect === data.id ? true : false}
            onPress={() => handleReport(data.id, data.incorrect_answers[0], 1)}
            {...props}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[0] === data.correct_answer
              }
            />
          </BorderlessButton>
          <Option>{data.incorrect_answers[0]}</Option>
          {isTouched === 1 &&
            (isCorrect ? (
              <AntDesign name="check" size={10} color={colors.success} />
            ) : (
              <AntDesign name="close" size={10} color={colors.main} />
            ))}
        </ContainerSelect>
        <ContainerSelect>
          <BorderlessButton
            enabled={enableTouch && phraseSelect === data.id ? true : false}
            {...props}
            onPress={() => handleReport(data.id, data.incorrect_answers[1], 2)}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[1] === data.correct_answer
              }
            />
          </BorderlessButton>
          <Option>{data.incorrect_answers[1]}</Option>
          {isTouched === 2 &&
            (isCorrect ? (
              <AntDesign name="check" size={10} color={colors.success} />
            ) : (
              <AntDesign name="close" size={10} color={colors.main} />
            ))}
        </ContainerSelect>
        <ContainerSelect>
          <BorderlessButton
            enabled={enableTouch && phraseSelect === data.id ? true : false}
            {...props}
            onPress={() => handleReport(data.id, data.incorrect_answers[2], 3)}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[2] === data.correct_answer
              }
            />
          </BorderlessButton>
          <Option>{data.incorrect_answers[2]}</Option>
          {isTouched === 3 &&
            (isCorrect ? (
              <AntDesign name="check" size={15} color={colors.success} />
            ) : (
              <AntDesign name="close" size={15} color={colors.main} />
            ))}
        </ContainerSelect>
        <ContainerSelect>
          <BorderlessButton
            enabled={enableTouch && phraseSelect === data.id ? true : false}
            {...props}
            onPress={() => handleReport(data.id, data.incorrect_answers[3], 4)}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[3] === data.correct_answer
              }
            />
          </BorderlessButton>
          <Option>{data.incorrect_answers[3]}</Option>
          {isTouched === 4 &&
            (isCorrect ? (
              <AntDesign name="check" size={10} color={colors.success} />
            ) : (
              <AntDesign name="close" size={10} color={colors.main} />
            ))}
        </ContainerSelect>
      </View>
    </Container>
  );
}
