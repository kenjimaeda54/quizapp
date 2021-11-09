import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { ButtonSubmit, TextSubmit } from './styles';

interface ButtonSubmitProps extends BorderlessButtonProps {
  haveQuantity: boolean;
  title: string;
}

export default function Button({
  title,
  haveQuantity,
  ...props
}: ButtonSubmitProps) {
  return (
    <ButtonSubmit {...props} enabled={haveQuantity} haveQuantity={haveQuantity}>
      <TextSubmit> {title} </TextSubmit>
    </ButtonSubmit>
  );
}
