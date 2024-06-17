import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or any other icon library
import axios from 'axios';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Loginscreen: React.FC<Props> = ({ navigation }) => {
  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post('http://192.168.17.125:8080/api/user/signin', {
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        // Navigate to another screen upon success
        navigation.navigate('H');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error); // Display error message
        // Display error message
        Alert.alert('Login Failed', error.response.data.message || 'An error occurred');
      } else {
        // Handle other errors
        Alert.alert('Login Failed', 'An error occurred');
      }
    }
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
                <View style={styles.iconInputContainer}>
                  <Icon name="email" size={20} color="grey" style={styles.icon} />
                  <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType='email-address'
                  />
                </View>
                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.iconInputContainer}>
                  <Icon name="lock" size={20} color="grey" style={styles.icon} />
                  <TextInput
                    placeholder='Password'
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                </View>
                {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>
              <View style={styles.buttonContainer}>
                <Button onPress={() => handleSubmit()} title='Log In' />
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
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
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
