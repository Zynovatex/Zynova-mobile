import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const Popupscreen = (props) => {
    function gotolg() {
        stack.navigate('B');
    }

    const stack = props.navigation;

    // Define styles directly under the component
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            //backgroundColor: 'white',
        },
        backgroundImage: {
            width: '100%',
            height: '100%',
            position: 'absolute'
        },
        logoImage: {
            width: 200,
            height: 200,
            borderRadius: 100,
            marginLeft: 100,
            marginTop: 300
        },
        buttonContainer: {
            marginHorizontal: 100,
            marginTop: 30
        }
    });

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={require('../../assets/img/bi.jpg')}
                resizeMode='cover'
            />

            <Image
                style={styles.logoImage}
                source={require('../../assets/img/logo.jpg')}
            />

            <TouchableOpacity onPress={gotolg}>
                <View style={styles.buttonContainer}>
                    <Button title='welcome' />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Popupscreen;
