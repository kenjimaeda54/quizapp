import React, { useState, Fragment, useRef, useEffect } from 'react';
import {
  Pressable,
  PressableProps,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { ListPhases } from '../../components/list_phrases';
import { Modalize } from 'react-native-modalize';
import Modal from '../../components/modal_report';
import { AntDesign } from '@expo/vector-icons';
import {
  Container,
  ListContainer,
  Title,
  Subtitle,
  Section,
  TitleSection,
  ContainerButton,
  ButtonConfirm,
  ButtonCancel,
  TextButtonConfirm,
  TextButtonCancel,
} from './styles';
import { Phrase, results } from '../../util/dto';
import { FlatList } from 'react-native';
import Button from '../../components/button_submit';
import { useCustomHook } from '../../hooks/customHook';
import { useTheme } from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';

export function Phrases() {
  const { goBack } = useNavigation();
  const { quantity } = useCustomHook();
  const { colors } = useTheme();
  const openModalRef = useRef<Modalize>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [arrayPhrase, setArrayPhrase] = useState<Phrase[]>([]);

  function handleConfirm() {
    setIsCorrect((old) => !old);
    setArrayPhrase(results);
  }

  const handleOpacity = () => setIsTouch(true);

  function handleBack() {
    goBack();
  }

  const handleReport = () => openModalRef.current?.open();

  return (
    <Fragment>
      <ListContainer
        data={arrayPhrase}
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
              <Section>
                <TitleSection>
                  Quantidade de perguntas escolhidas: {quantity}
                </TitleSection>
              </Section>
            </Container>
          </Fragment>
        }
        renderItem={({ item, index }) => (
          <ListPhases index={index + 1} data={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{
          marginBottom: 20,
        }}
      />
      <ContainerButton>
        {isCorrect ? (
          <Button
            onPress={handleReport}
            haveQuantity={arrayPhrase.length > 0}
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
      </ContainerButton>
      {/* <Modal ref={openModalRef} /> */}
    </Fragment>
  );
}
