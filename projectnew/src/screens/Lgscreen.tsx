import React from 'react';
import { Button, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  C: undefined;
  D: undefined;
};

type LgscreenNavigationProp = StackNavigationProp<RootStackParamList, 'C'>;
type LgscreenRouteProp = RouteProp<RootStackParamList, 'C'>;

type LgscreenProps = {
  navigation: LgscreenNavigationProp;
  route: LgscreenRouteProp;
};

const Lgscreen: React.FC<LgscreenProps> = ({ navigation }) => {

  const gotologin = () => {
    navigation.navigate('C');
  }

  const gotosignup = () => {
    navigation.navigate('D');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/img/bii.jpg')}
      />

      <TouchableOpacity onPress={gotosignup} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Or</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Do you have an account?</Text>
      </View>

      <TouchableOpacity onPress={gotologin} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '40%',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  textContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Lgscreen;
