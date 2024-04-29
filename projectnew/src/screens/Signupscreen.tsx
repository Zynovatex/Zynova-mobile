import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface Props {
  navigation: any; // Replace 'any' with actual type for navigation
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

  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log(values); // You can perform form submission here
    // Redirect to another screen
    stack.navigate('E');
    setSubmitting(false);
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
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && touched.name && <Text style={styles.errorText}>{errors.name}</Text>}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={()=>handleSubmit()} />
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
    marginTop: 20,
    justifyContent: 'center',
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
    width:300
  },
  buttonContainer: {
    marginHorizontal: 100,
    marginTop: 50,
    width:300
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
});
