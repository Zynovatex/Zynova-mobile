import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';


interface Props {
  navigation: NavigationProp<any>;
}

const Detail: React.FC<Props> = (props) => {
const gotop = () => {
  console.log(totalPrice)
    props.navigation.navigate('G', { totalPrice: totalPrice });
};


// Define the initial quantity and the price per kg
const INITIAL_QUANTITY = 1;
const PRICE_PER_KG = 10;


  const [quantity, setQuantity] = useState<number>(INITIAL_QUANTITY);

  const totalPrice = PRICE_PER_KG * quantity;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    Alert.alert('Item added to cart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/img/fruit.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.priceAndQuantityContainer}>
        <Text style={styles.priceText}>$ {PRICE_PER_KG} / kg</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.totalPriceText}>Total: $ {totalPrice.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <Button title=" Buy Item " onPress={gotop} />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    marginVertical: 40,
    
  },
  priceText: {
    fontSize: 25,
    fontWeight: '800',
    marginTop:25,
    
    
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 50,
    padding: 10,
    marginLeft:20,
    paddingLeft:20,
    color:'red'
    
  },
  quantity: {
    fontSize: 30,
    fontWeight: '800',
    paddingHorizontal: 5,
  },
  totalPriceText: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});