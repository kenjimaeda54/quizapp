import React, { useState, useRef } from 'react';
import { Pressable, PressableProps, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  keyStorageReport,
  KeyTotalAnswers,
  KeyTotalReport,
  KeyTotalWrong,
  Phrase,
} from '../../util/dto';
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

interface ListPhases extends PressableProps {
  data: Phrase;
  index: number;
  total: number;
}

export function ListPhases({ total, index, data, ...props }: ListPhases) {
  const { colors } = useTheme();
  let totalAnswersRef = useRef(0);
  let totalWrongRef = useRef(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTouched, setIsTouched] = useState(0);
  const [phraseSelect, setPhraseSelect] = useState('');
  const [enableTouch, setEnableTouch] = useState(true);

  function handleReport(phraseSelect, report, reportSelect) {
    setIsTouched(reportSelect);
    setPhraseSelect(phraseSelect);
    setEnableTouch(false);
    if (report === data.correct_answer) {
      totalAnswersRef.current += 1;
      return setIsCorrect(true);
    }
    totalWrongRef.current += 1;
    return setIsCorrect(false);
  }

  async function handleAsyncStorage(report) {
    try {
      const phrases = {
        index: index,
        answerCorrect: data.correct_answer,
        answerSelect: report,
      };
      const fetchStorageTotalReport = await AsyncStorage.getItem(
        keyStorageReport,
      );
      const storage = fetchStorageTotalReport
        ? JSON.parse(fetchStorageTotalReport)
        : [];
      AsyncStorage.setItem(KeyTotalReport, JSON.stringify(total));
      AsyncStorage.setItem(
        KeyTotalWrong,
        JSON.stringify(totalWrongRef.current),
      );
      AsyncStorage.setItem(
        KeyTotalAnswers,
        JSON.stringify(totalAnswersRef.current),
      );
      AsyncStorage.setItem(
        keyStorageReport,
        JSON.stringify([...storage, phrases]),
      );
    } catch (erro) {
      console.log(erro);
    }
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
          <Pressable
            onPressOut={() => handleAsyncStorage(data.incorrect_answers[0])}
            disabled={enableTouch && phraseSelect === data.id ? true : false}
            onPress={() => handleReport(data.id, data.incorrect_answers[0], 1)}
            {...props}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[0] === data.correct_answer
              }
            />
          </Pressable>
          <Option>{data.incorrect_answers[0]}</Option>
          {isTouched === 1 &&
            (isCorrect ? (
              <AntDesign name="check" size={15} color={colors.success} />
            ) : (
              <AntDesign name="close" size={15} color={colors.main} />
            ))}
        </ContainerSelect>
        <ContainerSelect>
          <Pressable
            onPressOut={() => handleAsyncStorage(data.incorrect_answers[1])}
            disabled={enableTouch && phraseSelect === data.id ? true : false}
            {...props}
            onPress={() => handleReport(data.id, data.incorrect_answers[1], 2)}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[1] === data.correct_answer
              }
            />
          </Pressable>
          <Option>{data.incorrect_answers[1]}</Option>
          {isTouched === 2 &&
            (isCorrect ? (
              <AntDesign name="check" size={15} color={colors.success} />
            ) : (
              <AntDesign name="close" size={15} color={colors.main} />
            ))}
        </ContainerSelect>
        <ContainerSelect>
          <Pressable
            onPressOut={() => handleAsyncStorage(data.incorrect_answers[2])}
            disabled={enableTouch && phraseSelect === data.id ? true : false}
            {...props}
            onPress={() => handleReport(data.id, data.incorrect_answers[2], 3)}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[2] === data.correct_answer
              }
            />
          </Pressable>
          <Option>{data.incorrect_answers[2]}</Option>
          {isTouched === 3 &&
            (isCorrect ? (
              <AntDesign name="check" size={15} color={colors.success} />
            ) : (
              <AntDesign name="close" size={15} color={colors.main} />
            ))}
        </ContainerSelect>
        <ContainerSelect>
          <Pressable
            onPressOut={() => handleAsyncStorage(data.incorrect_answers[3])}
            disabled={enableTouch && phraseSelect === data.id ? true : false}
            {...props}
            onPress={() => handleReport(data.id, data.incorrect_answers[3], 4)}
          >
            <Select
              tintColorCorrect={
                !enableTouch &&
                data.incorrect_answers[3] === data.correct_answer
              }
            />
          </Pressable>
          <Option>{data.incorrect_answers[3]}</Option>
          {isTouched === 4 &&
            (isCorrect ? (
              <AntDesign name="check" size={15} color={colors.success} />
            ) : (
              <AntDesign name="close" size={15} color={colors.main} />
            ))}
        </ContainerSelect>
      </View>
    </Container>
  );
}
