import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { StripeProvider, CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const API_URL = 'http://10.0.2.2:8080/payment/create';

interface RouteParams {
  totalPrice?: number; // Define the structure of route parameters
}

const Paymentdetails = () => {
  const [cardHolderEmail, setCardHolderEmail] = useState('');
  const { confirmPayment } = useConfirmPayment();
  const [cardDetails, setCardDetails] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

  const route = useRoute();
  const { totalPrice: routeTotalPrice } = route.params as RouteParams; // Type assertion

  useEffect(() => {
    if (routeTotalPrice) {
      setTotalPrice(routeTotalPrice);
      console.log("Price =" + routeTotalPrice)

    }
  }, [routeTotalPrice]);

  const fetchPaymentIntentClientSecret = async () => {
    try {
      const response = await axios.post(API_URL, {
        amount: routeTotalPrice * 100,
        currency: 'usd',
        paymentMethodType: "card"
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching client secret:', error);
      // Handle error gracefully or display error message to user
      return null;
    }
  };

  const handlePayPress = async () => {
    try {
      if (!cardDetails) {
        console.error('Card details are missing.');
        // Handle error gracefully or display error message to user
        return;
      }

      const clientSecret = await fetchPaymentIntentClientSecret();
      console.log(clientSecret)
      if (!clientSecret) {
        console.error('Failed to retrieve client secret.');
        return;
      }

      const billingDetails = {
        email: cardHolderEmail,

      };

      console.log(clientSecret)
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails,
        },
      });
      if (error) {
        console.error('Error confirming payment:', error);
       
      } else {
        console.log('Payment confirmed:', paymentIntent);
        
      }
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <StripeProvider
      publishableKey="pk_test_51Oy4eAJ10XzAyuHYPJvMea9RL8LQeo5A0rpjdILEdXdqkBPpTWTcEkGxDXyX7ix7nVyCtFegGdpz7bIMb9jIkXiJ00KwAxzicl"
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Card Holder Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCardHolderEmail}
            value={cardHolderEmail}
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.cardFieldContainer}>
          <Text style={styles.cardFieldLabel}>Card Details</Text>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => setCardDetails(cardDetails.complete ? cardDetails : null)}
          />
        </View>
        <TouchableOpacity onPress={handlePayPress} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26a113',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 20,
    color: '#C7ADCE',
    marginBottom: 20,
    marginTop: 30,
    
  },
  input: {
    width: 350,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  cardFieldLabel: {
    fontSize: 20,
    color: '#C7ADCE',
    marginTop: 40,
    marginBottom: -10,
    
  },
  cardFieldContainer: {
    width: 350,
    
  },
  confirmButton: {
    backgroundColor: '#F6BD0F',
    height: 40,
    width: 300,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 90,
  },
  confirmButtonText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Paymentdetails;
