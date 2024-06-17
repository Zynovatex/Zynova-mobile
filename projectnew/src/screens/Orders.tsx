import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

const Orders: React.FC<Props> = (props: Props) => {
  const gotolg = () => {
    const totalPrice = 0; // Declare and initialize the totalPrice variable
    props.navigation.navigate('G', { totalPrice: totalPrice });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Selected Items</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Order Now' onPress={gotolg} />
      </View>
    </View>
  );
}

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set the background color to white
  },
  title: {
    fontSize: 40,
    marginTop: 50,
    fontWeight: "700",
    color: 'green'
  },
  buttonContainer: {
    marginTop: 600,
    width: 200,
    marginHorizontal: 90
  }
});
