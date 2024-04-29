import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableWithoutFeedback } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any>;
}

const Popupscreen: React.FC<Props> = (props) => {
    const gotolg = () => {
        props.navigation.navigate('B');
    }

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

            <TouchableWithoutFeedback onPress={gotolg}>
                <View style={styles.buttonContainer}>
                    <Button title='Welcome' onPress={gotolg} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Popupscreen;
