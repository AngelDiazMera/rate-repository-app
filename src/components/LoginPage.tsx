import { Formik } from 'formik/dist';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { loginValidationSchema } from '../validationSchemas/login';
import FormikTextInput from './FormikTextInput';

const initialValues = {
  email: '',
  password: '',
};

function LoginPage() {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors }) => {
        const hasErrors = Object.values(errors).some(Boolean);
        return (
          <View style={styles.container}>
            <FormikTextInput name="email" placeholder="E-mail" />
            <FormikTextInput name="password" placeholder="Password" />
            <Button
              disabled={hasErrors}
              onPress={handleSubmit as any}
              title="Log In"
            />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default LoginPage;
