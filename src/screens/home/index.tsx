import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/app.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { View } from 'react-native';
import { useCustomHook } from '../../hooks/customHook';
import { Button } from '../../components/button_submit';
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
} from './styles';

type RoutesScreens = StackNavigationProp<RootStackParamList, 'home'>;

export function Home() {
  const { setQuantityHook } = useCustomHook();
  const { navigate } = useNavigation<RoutesScreens>();
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

  function handleNavigation() {
    navigate('phrases');
    setQuantityHook(quantity);
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
      <Button
        haveQuantity={quantity > 0}
        title="Enviar"
        onPress={handleNavigation}
      />
    </Container>
  );
}
