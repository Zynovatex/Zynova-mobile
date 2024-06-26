
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';

interface FormValues {
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const ResetPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleSubmit = (values: FormValues) => {
    // Here you would send the new password to your backend
    navigation.navigate('C'); // Assuming you want to navigate back to the login screen
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<FormValues>) => (
          <View style={styles.formContainer}>
            <TextInput
              placeholder='Password'
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <TextInput
              placeholder='Confirm Password'
              style={styles.input}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
            />
            {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
            <Button onPress={() => handleSubmit()} title='Reset Password' />
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

export default ResetPasswordScreen;
