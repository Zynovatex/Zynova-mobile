import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

interface Props {
  navigation: any; // Replace 'any' with the appropriate type for navigation if available
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signupscreen: React.FC<Props> = ({ navigation }) => {
  const stack = navigation;

  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log('Form values', values);
    try {
      const response = await axios.post('http://192.168.17.125:8080/api/user/signup', {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      console.log(response.data); 
      stack.navigate('E');
    } catch (error) {
      console.error(error); 
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/img/bii.jpg')}
        />

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </View>
              {errors.name && touched.name && <Text style={styles.errorText}>{errors.name}</Text>}

              <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
              </View>
              {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
              </View>
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={handleSubmit as any} />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  inputContainer: {
    height: 50,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 40,
    paddingLeft: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  input: {
    fontSize: 15,
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 10,
    paddingLeft: 5,
    borderColor: 'grey',
    width: 260, // Adjusted width
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    marginHorizontal: 100,
    marginTop: 50,
    width: 300,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5,
  },
});
