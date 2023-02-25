import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export interface StyledTextInputProps extends TextInputProps {
  error?: any;
}

function StyledTextInput({ style, error, ...props }: StyledTextInputProps) {
  const inputStyles = [styles.input, error && styles.inputError, style];

  return <TextInput style={inputStyles} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderColor: '#999',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
});

export default StyledTextInput;
