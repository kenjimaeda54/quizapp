import React, { useState, Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ListPhases } from '../../components/list_phrases';
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

export function Phrases() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [arrayPhrase, setArrayPhrase] = useState<Phrase[]>([]);

  function handleConfirm() {
    setIsCorrect((old) => !old);
    setArrayPhrase(results);
  }

  return (
    <Fragment>
      <ListContainer
        data={arrayPhrase}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <Fragment>
            <Container>
              <View>
                <Title>Perguntas e respostas</Title>
                <Subtitle>
                  Confirme no start a quantidade de perguntas ou retorne no
                  cancel
                </Subtitle>
              </View>
              <Section>
                <TitleSection>
                  Quantidade de perguntas escolhidas: 20
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
        <ButtonConfirm onPress={handleConfirm} activeOpacity={0.5}>
          <TextButtonConfirm>Start</TextButtonConfirm>
        </ButtonConfirm>
        <ButtonCancel activeOpacity={0.5}>
          <TextButtonCancel>Cancel</TextButtonCancel>
        </ButtonCancel>
      </ContainerButton>
    </Fragment>
  );
}
