import React from 'react';
import { Button, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Lgscreen = (props) => {

  function gotologin() {
    stack.navigate('C');
  }

  function gotosignup() {
    stack.navigate('D');
  }

  const stack = props.navigation;

  return (
    <View>

      <Image
        style={styles.backgroundImage}
        source={require('../../assets/img/bii.jpg')}
      />

      <TouchableOpacity onPress={gotosignup}>
        <View style={styles.signUpButtonContainer}>
          <Button title='Sign Up' />
        </View>
      </TouchableOpacity>

      <View style={styles.orTextContainer}>
        <Text style={{
          fontSize: 20,
          fontWeight: '700'
        }}>
          Or
        </Text>
      </View>

      <View style={styles.accountTextContainer}>
        <Text style={{
          fontSize: 20,
          fontWeight: '700'
          
        }}>
          Do you Have an account?
        </Text>
      </View>

      <TouchableOpacity onPress={gotologin}>
        <View style={styles.logInButtonContainer}>
          <Button title='Log In' />
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 900,
    position: 'absolute'
  },
  signUpButtonContainer: {
    marginHorizontal: 100,
    marginTop: 400
  },
  orTextContainer: {
    marginLeft: 200,
    marginTop: 10,
  },
  accountTextContainer: {
    marginLeft: 100,
    marginTop: 10
  },
  logInButtonContainer: {
    marginHorizontal: 100,
    marginTop: 20
  },
});

export default Lgscreen;