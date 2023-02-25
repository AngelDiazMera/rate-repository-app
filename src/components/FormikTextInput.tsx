import { useField } from 'formik/dist';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import StyledTextInput, { StyledTextInputProps } from './StyledTextInput';

interface FormikTextInput extends StyledTextInputProps {
  name: string;
}

function FormikTextInput({ name, ...props }: FormikTextInput) {
  const [field, meta, helpers] = useField(name);

  return (
    <View>
      <StyledTextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && (
        <StyledText style={styles.errorText}>{meta.error}</StyledText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 5,
    color: 'red',
    fontSize: 12,
  },
});

export default FormikTextInput;
