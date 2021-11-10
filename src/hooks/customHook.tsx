import React, { createContext, useContext, ReactNode, useState } from 'react';
import {
  keyStorageReport,
  KeyTotalAnswers,
  TotalAnswer,
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
  totalQuestions: TotalAnswer;
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
      const questions = await AsyncStorage.getItem(KeyTotalAnswers);
      const totalQuestions: TotalAnswer = JSON.parse(questions);

      return {
        dataReport,
        totalQuestions,
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
