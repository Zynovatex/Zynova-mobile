
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';

interface FormValues {
  otp: string;
}

const validationSchema = yup.object().shape({
  otp: yup.string().required('OTP is required'),
});

const EnterOTPScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleSubmit = (values: FormValues) => {
    // Here you would verify the OTP with your backend
    navigation.navigate('L');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ otp: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<FormValues>) => (
          <View style={styles.formContainer}>
            <TextInput
              placeholder='OTP'
              style={styles.input}
              onChangeText={handleChange('otp')}
              onBlur={handleBlur('otp')}
              value={values.otp}
              keyboardType='numeric'
            />
            {touched.otp && errors.otp && <Text style={styles.errorText}>{errors.otp}</Text>}
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
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
  },
});

export default EnterOTPScreen;
