import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Profile
        </Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Address" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="District" />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title='Update Profile' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginTop: 50,
    color: 'green',
    padding: 7,
  },
  input: {
    borderWidth: 3,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 50,
    marginHorizontal: 100,
  }
});

export default Profile;
