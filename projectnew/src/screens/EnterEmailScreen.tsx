
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';

interface FormValues {
  email: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const EnterEmailScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleSubmit = (values: FormValues) => {
    // Here you would send the email to your backend to initiate the OTP process
    navigation.navigate('J');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<FormValues>) => (
          <View style={styles.formContainer}>
            <TextInput
              placeholder='Email'
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType='email-address'
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <Button onPress={() => handleSubmit()} title='Submit' />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    marginHorizontal: 40,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
  },
});

export default EnterEmailScreen;
