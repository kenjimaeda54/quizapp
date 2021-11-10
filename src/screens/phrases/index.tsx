import React, { useState, Fragment, useRef, useEffect } from 'react';
import uuid from 'react-native-uuid';
import Modal from '../../components/modal_report';
import { Button } from '../../components/button_submit';
import {
  Pressable,
  ActivityIndicator,
  StatusBar,
  View,
  FlatList,
} from 'react-native';
import { ListPhases } from '../../components/list_phrases';
import { Modalize } from 'react-native-modalize';
import { AntDesign } from '@expo/vector-icons';
import { useCustomHook } from '../../hooks/customHook';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services';
import { Separator } from '../../components/separation/styles';
import { Phrase, TotalAnswer, UserAnswer } from '../../util/dto';
import {
  Container,
  ListContainer,
  Title,
  Subtitle,
  TitleSection,
  ColorQuantity,
  ContainerButton,
  ButtonConfirm,
  ButtonCancel,
  TextButtonConfirm,
  TextButtonCancel,
  ContainerLoading,
} from './styles';

interface DataProps {
  results: Phrase[];
  response: number;
}
export function Phrases() {
  const { goBack } = useNavigation();
  const { quantity, fetchStorage } = useCustomHook();
  const { colors } = useTheme();
  const openModalRef = useRef<Modalize>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [allPhrase, setAllPhrase] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState(false);
  const [touchPhrases, setPhrases] = useState(false);
  const [reportUser, setReportUser] = useState<UserAnswer[]>([]);
  const [totalAnswers, setTOtalAnswers] = useState<TotalAnswer>(
    {} as TotalAnswer,
  );

  async function handleConfirm() {
    try {
      setLoading(true);
      setIsCorrect(true);
      const response = await api.get(
        `api.php?amount=${quantity}&type=multiple`,
      );
      const datas: DataProps = response.data;
      setAllPhrase(
        datas.results.map((item: Phrase, index) => {
          if (index === 0) {
            const phraseOne = item.incorrect_answers[0];
            const phraseTwo = item.correct_answer;
            const phraseThree = item.incorrect_answers[2];
            const phraseFour = item.incorrect_answers[1];
            return {
              id: `${uuid.v4()}`,
              question: item.question,
              correct_answer: item.correct_answer,
              incorrect_answers: [
                phraseOne,
                phraseTwo,
                phraseThree,
                phraseFour,
              ],
            };
          }
          if (index % 2 === 0) {
            const phraseOne = item.incorrect_answers[0];
            const phraseTwo = item.incorrect_answers[2];
            const phraseThree = item.correct_answer;
            const phraseFour = item.incorrect_answers[1];
            return {
              id: `${uuid.v4()}`,
              question: item.question,
              correct_answer: item.correct_answer,
              incorrect_answers: [
                phraseOne,
                phraseTwo,
                phraseThree,
                phraseFour,
              ],
            };
          }
          if (index % 2 !== 0) {
            const phraseOne = item.incorrect_answers[0];
            const phraseTwo = item.incorrect_answers[2];
            const phraseThree = item.incorrect_answers[1];
            const phraseFour = item.correct_answer;
            return {
              id: `${uuid.v4()}`,
              question: item.question,
              correct_answer: item.correct_answer,
              incorrect_answers: [
                phraseOne,
                phraseTwo,
                phraseThree,
                phraseFour,
              ],
            };
          }
        }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handlePressPhrase() {
    setPhrases(true);
  }

  const handleOpacity = () => setIsTouch(true);
  function handleBack() {
    goBack();
  }

  async function handleReport() {
    try {
      const totalReportUser = await fetchStorage();
      setReportUser(totalReportUser.dataReport);
      const questions = await fetchStorage();
      setTOtalAnswers(questions.totalQuestions);
    } catch (error) {
      console.log(error);
    } finally {
      openModalRef.current?.open();
    }
  }

  return (
    <Fragment>
      <Fragment>
        <ListContainer
          data={allPhrase}
          keyExtractor={(item) => String(item.id)}
          ListHeaderComponent={
            <Fragment>
              <StatusBar />
              <Container>
                <Pressable
                  onPress={handleBack}
                  onPressIn={handleOpacity}
                  style={{
                    opacity: isTouch ? 0.5 : 1,
                    marginBottom: 50,
                  }}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                  <AntDesign name="left" size={15} color={colors.main} />
                </Pressable>
                <View>
                  <Title>Perguntas e respostas</Title>
                  <Subtitle>
                    Confirme no start a quantidade de perguntas ou retorne no
                    cancel
                  </Subtitle>
                </View>
                <View>
                  <TitleSection>
                    Quantidade de perguntas escolhidas:{' '}
                    <ColorQuantity> {quantity}</ColorQuantity>
                  </TitleSection>
                </View>
              </Container>
            </Fragment>
          }
          renderItem={({ item, index }) => (
            <ListPhases
              onPressIn={handlePressPhrase}
              total={allPhrase.length}
              index={index + 1}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponentStyle={{
            marginBottom: 20,
          }}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          ItemSeparatorComponent={() => (
            <Separator
              style={{
                marginVertical: 20,
              }}
            />
          )}
        />
        <ContainerButton>
          {loading ? (
            <ContainerLoading>
              <ActivityIndicator size="large" color={colors.main} />
            </ContainerLoading>
          ) : (
            <Fragment>
              {isCorrect ? (
                <Button
                  onPress={handleReport}
                  haveQuantity={touchPhrases}
                  title="relatorio"
                />
              ) : (
                <Fragment>
                  <ButtonConfirm onPress={handleConfirm} activeOpacity={0.5}>
                    <TextButtonConfirm>Start</TextButtonConfirm>
                  </ButtonConfirm>
                  <ButtonCancel activeOpacity={0.5}>
                    <TextButtonCancel>Cancel</TextButtonCancel>
                  </ButtonCancel>
                </Fragment>
              )}
            </Fragment>
          )}
        </ContainerButton>
      </Fragment>
      <Modal
        haveBack={true}
        ref={openModalRef}
        data={reportUser}
        total={totalAnswers}
      />
    </Fragment>
  );
}
