import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Import KeyboardAwareScrollView
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any>;
}

const Dashboard: React.FC<Props> = (props) => {
    const gotodet = () => {
        props.navigation.navigate('F');
    };

    const [searchText, setSearchText] = useState<string>('');

    const handleClearSearch = () => {
        setSearchText('');
    };

    // Sample fruit data
    const fruits = [
        { name: 'pineapple', image: require('../../assets/img/pineapple.jpg') },
        { name: 'Banana', image: require('../../assets/img/banana.jpg') },
        { name: 'mango', image: require('../../assets/img/mango.jpg') },
        { name: 'rambutan', image: require('../../assets/img/rambutan.jpg') },
        // Add more fruits as needed
    ]

    // Function to render fruits in two columns
    const renderFruitsInColumns = () => {
        const columns = [[], []]; // Two columns
        fruits.forEach((fruit, index) => {
            const columnIndex = index % 2; // Alternate between columns
            columns[columnIndex].push(
                <TouchableOpacity key={index} onPress={gotodet}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 2, borderRadius: 10, padding: 5 }}>
                            <Image source={fruit.image} style={{ width: 100, height: 100 }} />
                        </View>
                        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: '700' }}>{fruit.name}</Text>
                    </View>
                </TouchableOpacity>
            );
        });
        return columns.map((column, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                {column}
            </View>
        ));
    };

    return (
        <KeyboardAwareScrollView // Use KeyboardAwareScrollView here
            style={{ flex: 1 }}
            enableOnAndroid={true}
            extraHeight={Platform.select({ android: 130, ios: 0 })} // Adjust this value according to your layout
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View>
                <Text style={{
                    color: "green",
                    marginLeft: 40,
                    fontSize: 35,
                    marginTop: 40,
                    fontWeight: "600"
                }}>Welcome</Text>
            </View>

            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "400",
                    marginTop: 20,
                    marginLeft: 40
                }}>
                    Choose the
                </Text>
                <View>
                    <Text style={{
                        fontWeight: "800",
                        marginTop: 20,
                        marginLeft: 40,
                        fontSize: 35
                    }}>Item you love</Text>
                </View>
            </View>

            {/* Search Bar with Icon */}
            <View style={{
                marginTop: 20,
                marginLeft: 40,
                marginRight: 40,
                borderColor: 'gray',
                borderWidth: 4,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
            }}>
                <Icon name="search" size={20} color="gray" />
                <TextInput
                    placeholder="Search..."
                    style={{
                        fontSize: 25,
                        marginLeft: 20,
                        flex: 1 // This will make TextInput take remaining space
                    }}
                    value={searchText}
                    onChangeText={(text: string) => setSearchText(text)}
                />
                {searchText.length > 0 && (
                    <TouchableOpacity onPress={handleClearSearch}>
                        <Icon name="close" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Render fruits in two columns */}
            {renderFruitsInColumns()}
        </KeyboardAwareScrollView>
    );
};

export default Dashboard;
