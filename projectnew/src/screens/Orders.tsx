import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    <View>
      <View>
       <Text style={{
        fontSize:40,
        marginTop:50,
        fontWeight:"700",
        color:'green'
        
       }}>Selected Items</Text>
      </View>
      <View style={{
        marginTop:600,
        width:200,
        marginHorizontal:90

      }}>
        <Button title='Order Now' />
      </View>

    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})