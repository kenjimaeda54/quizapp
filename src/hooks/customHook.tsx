import React, { createContext, useContext, ReactNode, useState } from 'react';
import {
  keyStorageReport,
  KeyTotalCorrect,
  KeyTotalReport,
  KeyTotalWrong,
  UserAnswer,
} from '../util/dto';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HooksProps {
  quantity: number;
  setQuantityHook(quantity: number): void;
  fetchStorage: () => Promise<StorageProps>;
}

interface StorageProps {
  dataReport: UserAnswer[];
  totalCorrect: number;
  totalWrong: number;
  totalQuestion: number;
}

const HooksContext = createContext<HooksProps>({} as HooksProps);

interface HooksProviderProps {
  children: ReactNode;
}

function HooksProvider({ children }: HooksProviderProps) {
  const [quantity, setQuantity] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [userReport, setUserReport] = useState<UserAnswer[]>([]);

  const setQuantityHook = (quantity: number) => setQuantity(quantity);

  async function fetchStorage() {
    try {
      const fetchUserReport = await AsyncStorage.getItem(keyStorageReport);
      const dataReport: UserAnswer[] = JSON.parse(fetchUserReport);
      const fetchTotalCorrect = await AsyncStorage.getItem(KeyTotalCorrect);
      const totalCorrect: number = JSON.parse(fetchTotalCorrect);
      const fetchTotalWrong = await AsyncStorage.getItem(KeyTotalWrong);
      const totalWrong: number = JSON.parse(fetchTotalWrong);
      const fetchTotalQuestion = await AsyncStorage.getItem(KeyTotalReport);
      const totalQuestion: number = JSON.parse(fetchTotalQuestion);
      console.log(dataReport, totalCorrect, totalWrong, totalQuestion);
      return {
        dataReport,
        totalCorrect,
        totalWrong,
        totalQuestion,
      };
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HooksContext.Provider
      value={{
        quantity,
        setQuantityHook,
        fetchStorage,
      }}
    >
      {children}
    </HooksContext.Provider>
  );
}

function useCustomHook() {
  const context = useContext(HooksContext);
  return context;
}

export { useCustomHook, HooksProvider };
