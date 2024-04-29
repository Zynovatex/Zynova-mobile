import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


interface FormValues {
  email: string;
  password: string;
}

interface Props {
  navigation: any; // Replace 'any' with actual type for navigation
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Loginscreen: React.FC<Props> = (props) => {
  const stack = props.navigation;

  const handleSubmit = (values: FormValues) => {
    console.log(values); // You can perform your login logic here
    // Redirect to another screen
    stack.navigate('E');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../../assets/img/bii.jpg')} />
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="never">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<FormValues>) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Email'
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                />
                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Password'
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>
              <View style={styles.buttonContainer}>
                <Button onPress={()=>handleSubmit()} title='Log In' />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  formContainer: {
    marginHorizontal: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Loginscreen;
