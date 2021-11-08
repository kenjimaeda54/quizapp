import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  Container,
  Title,
  Subtitle,
  ContainerQuantity,
  CardQuantity,
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
import { TouchableOpacity } from 'react-native';

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
      <Title>Bem vindo ao seu aplicativo{`\n`}de perguntas</Title>
      <Subtitle>Selecione a quantidade de perguntas deseja responder.</Subtitle>
      <ContainerQuantity>
        <CardQuantity
          style={{
            shadowColor: colors.text,
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 20,
          }}
        >
          <TitleQuantity>
            As perguntas serão geradas aleatoriamente, partir da quantidade
            escolhida.
          </TitleQuantity>
          <TextButton>{quantity}</TextButton>
          <ContainerButton>
            <ContainerMins onPress={() => handleQuantity('plus')}>
              <Entypo name="plus" size={15} color={colors.white} />
            </ContainerMins>
            <ContainerPlus onPress={() => handleQuantity('minus')}>
              <Entypo name="minus" size={15} color={colors.white} />
            </ContainerPlus>
          </ContainerButton>
          <ButtonSubmit
            onPress={() => console.log('oi')}
            enabled={quantity > 0}
            haveQuantity={quantity > 0}
          >
            <TextSubmit>Enviar </TextSubmit>
          </ButtonSubmit>
        </CardQuantity>
      </ContainerQuantity>
    </Container>
  );
}
