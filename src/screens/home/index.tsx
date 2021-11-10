import React, {
  useEffect,
  useState,
  useRef,
  Fragment,
  useCallback,
} from 'react';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
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
  ContainerReport,
  TextReport,
  ContainerQuantity,
  TitleQuantity,
  ContainerButton,
  TextButton,
  ContainerMins,
  ContainerPlus,
} from './styles';
import {
  keyStorageReport,
  KeyTotalAnswers,
  TotalAnswer,
  UserAnswer,
} from '../../util/dto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from '../../components/modal_report';
import { Modalize } from 'react-native-modalize';

type RoutesScreens = StackNavigationProp<RootStackParamList, 'home'>;

export function Home() {
  const openModalRef = useRef<Modalize>(null);
  const { setQuantityHook, fetchStorage } = useCustomHook();
  const { navigate } = useNavigation<RoutesScreens>();
  const [quantity, setQuantity] = useState(0);
  const { colors } = useTheme();
  const [allReport, setAllReport] = useState<UserAnswer[]>([]);
  const [totalAnsewers, setTotalAnsewers] = useState<TotalAnswer>(
    {} as TotalAnswer,
  );

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

  async function fetchStorageReport() {
    try {
      const fetchReport = await AsyncStorage.getItem(keyStorageReport);
      const report = JSON.parse(fetchReport);
      setAllReport(report);
      const fetchTotalAnsewers = await AsyncStorage.getItem(KeyTotalAnswers);
      const totalAnsewers = JSON.parse(fetchTotalAnsewers);
      setTotalAnsewers(totalAnsewers);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStorageReport();
    }, []),
  );

  const handleModal = () => openModalRef.current?.open();

  return (
    <Container>
      <View>
        <Title>Bem vindo ao seu aplicativo{`\n`}de perguntas</Title>
        <Subtitle>
          Selecione a quantidade de perguntas deseja responder.
        </Subtitle>
      </View>
      {allReport?.length > 0 && (
        <Fragment>
          <RectButton onPress={handleModal}>
            <ContainerReport>
              <TextReport>Relatorio</TextReport>
              <AntDesign name="down" size={24} color={colors.main} />
            </ContainerReport>
          </RectButton>
        </Fragment>
      )}
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
      <Modal
        haveBack={false}
        ref={openModalRef}
        data={allReport}
        total={totalAnsewers}
      />
    </Container>
  );
}
