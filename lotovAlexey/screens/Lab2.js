import React, { useState } from 'react';
import axios from 'axios';
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    FlatList 
} from 'react-native';

const Lab2 = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getDataUsingSimpleGetCall = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((json) => setData(json.data))
            .finally(() => setLoading(false));
    };

    const renderItem = (itemData) => {
        return (
            <View style={styles.containerFlate}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Id : {itemData.item.id}</Text>
                    <Text style={styles.title}>Name : {itemData.item.name}</Text>
                    <Text style={styles.title}>Email : {itemData.item.email}</Text>
                    <Text style={styles.title}>Company name : {itemData.item.company.name}</Text>
                    <Text style={styles.title}>City : {itemData.item.address.city}</Text>
                    <Text style={styles.title}>Phone : {itemData.item.phone}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id }
            />

            {isLoading && 
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={getDataUsingSimpleGetCall}>
                    <Text>Simple Get Call</Text>
                </TouchableOpacity>
            }
            
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    containerFlate: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#e32f45',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
    },
    buttonStyle: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#748c94',
        borderRadius: 8,
        padding: 10,
        width: '90%',
        marginTop: 550,
        left: '5%'
        
    },
    innerContainer: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
});

export default Lab2;