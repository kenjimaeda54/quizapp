import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  Container,
  Title,
  Subtitle,
  ContainerQuantity,
  TitleQuantity,
  ContainerButton,
  TextButton,
  ContainerMins,
  ContainerPlus,
  ButtonSubmit,
  TextSubmit,
} from './styles';
import { useTheme } from 'styled-components';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { View } from 'react-native';

export function Home() {
  const [quantity, setQuantity] = useState(0);
  const { colors } = useTheme();

  function handleQuantity(type) {
    if (type === 'plus') {
      return setQuantity((previous) => previous + 1);
    }
    if (type === 'minus' && quantity > 0) {
      return setQuantity((previous) => previous - 1);
    }
  }

  return (
    <Container>
      <View>
        <Title>Bem vindo ao seu aplicativo{`\n`}de perguntas</Title>
        <Subtitle>
          Selecione a quantidade de perguntas deseja responder.
        </Subtitle>
      </View>
      <ContainerQuantity>
        <TitleQuantity>
          As perguntas serão geradas aleatoriamente, partir da quantidade
          escolhida.
        </TitleQuantity>
        <ContainerButton>
          <ContainerMins onPress={() => handleQuantity('plus')}>
            <Entypo name="plus" size={15} color={colors.white} />
          </ContainerMins>
          <TextButton>{quantity}</TextButton>
          <ContainerPlus onPress={() => handleQuantity('minus')}>
            <Entypo name="minus" size={15} color={colors.white} />
          </ContainerPlus>
        </ContainerButton>
      </ContainerQuantity>
      <ButtonSubmit
        onPress={() => console.log('oi')}
        enabled={quantity > 0}
        haveQuantity={quantity > 0}
      >
        <TextSubmit>Enviar </TextSubmit>
      </ButtonSubmit>
    </Container>
  );
}
