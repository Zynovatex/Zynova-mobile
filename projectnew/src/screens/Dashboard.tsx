import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any>;
}

interface Item {
    name: string;
    image: any;
}

const Dashboard: React.FC<Props> = (props) => {
    const gotodet = () => {
        props.navigation.navigate('F');
        
    };

    const [searchText, setSearchText] = useState<string>('');
    const [selectedSection, setSelectedSection] = useState<string>('Fruits');

    const handleClearSearch = () => {
        setSearchText('');
    };

    const fruits: Item[] = [
        { name: 'pineapple', image: require('../../assets/img/pineapple.jpg') },
        { name: 'Banana', image: require('../../assets/img/banana.jpg') },
        { name: 'mango', image: require('../../assets/img/mango.jpg') },
        { name: 'rambutan', image: require('../../assets/img/rambutan.jpg') },
    ];

    const vegetables: Item[] = [
       // { name: 'carrot', image: require('../../assets/img/carrot.jpg') },
        //{ name: 'broccoli', image: require('../../assets/img/broccoli.jpg') },
       // { name: 'spinach', image: require('../../assets/img/spinach.jpg') },
       // { name: 'pepper', image: require('../../assets/img/pepper.jpg') },
    ];

    const grains: Item[] = [
        //{ name: 'rice', image: require('../../assets/img/rice.jpg') },
        //{ name: 'wheat', image: require('../../assets/img/wheat.jpg') },
       // { name: 'corn', image: require('../../assets/img/corn.jpg') },
        //{ name: 'oats', image: require('../../assets/img/oats.jpg') },
    ];

    const filteredItems = (items: Item[]) =>
        items.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );

    const renderItemsInColumns = (items: Item[]) => {
        const columns: JSX.Element[][] = [[], []];
        filteredItems(items).forEach((item, index) => {
            const columnIndex = index % 2;
            columns[columnIndex].push(
                <TouchableOpacity key={index} onPress={gotodet}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 2, borderRadius: 10, padding: 5 }}>
                            <Image source={item.image} style={{ width: 100, height: 100 }} />
                        </View>
                        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: '700' }}>{item.name}</Text>
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
        <KeyboardAwareScrollView
            style={styles.container}
            enableOnAndroid={true}
            extraHeight={Platform.select({ android: 130, ios: 0 })}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View>
                <Text style={styles.welcomeText}>Welcome</Text>
            </View>

            <View>
                <Text style={styles.chooseText}>Choose the</Text>
                <View>
                    <Text style={styles.itemText}>Item you love</Text>
                </View>
            </View>

            <View style={styles.segmentedControl}>
                <TouchableOpacity onPress={() => setSelectedSection('Fruits')} style={selectedSection === 'Fruits' ? styles.segmentSelected : styles.segment}>
                    <Text style={selectedSection === 'Fruits' ? styles.segmentTextSelected : styles.segmentText}>Fruits</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedSection('Vegetables')} style={selectedSection === 'Vegetables' ? styles.segmentSelected : styles.segment}>
                    <Text style={selectedSection === 'Vegetables' ? styles.segmentTextSelected : styles.segmentText}>Vegetables</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedSection('Grains')} style={selectedSection === 'Grains' ? styles.segmentSelected : styles.segment}>
                    <Text style={selectedSection === 'Grains' ? styles.segmentTextSelected : styles.segmentText}>Grains</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <Icon name="search" size={20} color="gray" />
                <TextInput
                    placeholder="Search..."
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={(text: string) => setSearchText(text)}
                />
                {searchText.length > 0 && (
                    <TouchableOpacity onPress={handleClearSearch}>
                        <Icon name="close" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            </View>

            {selectedSection === 'Fruits' && renderItemsInColumns(fruits)}
            {selectedSection === 'Vegetables' && renderItemsInColumns(vegetables)}
            {selectedSection === 'Grains' && renderItemsInColumns(grains)}
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcomeText: {
        color: "green",
        marginLeft: 40,
        fontSize: 35,
        marginTop: 40,
        fontWeight: "800"
    },
    chooseText: {
        fontSize: 20,
        fontWeight: "800",
        marginTop: 20,
        marginLeft: 40
    },
    itemText: {
        fontWeight: "800",
        marginTop: 20,
        marginLeft: 40,
        fontSize: 35
    },
    segmentedControl: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
    },
    segment: {
        padding: 10,
    },
    segmentSelected: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'green',
    },
    segmentText: {
        fontSize: 20,
        color: 'gray',
        fontWeight:'600'
    },
    segmentTextSelected: {
        fontSize: 20,
        color: 'green',
        fontWeight:'800'
    },
    searchBar: {
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        borderColor: 'gray',
        borderWidth: 4,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    searchInput: {
        fontSize: 25,
        marginLeft: 20,
        flex: 1
    },
});

export default Dashboard;
