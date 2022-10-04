import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
} from 'react-native';
  
import axios from 'axios';
import { Loading } from "../components/Loading";

export const FullPost = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const { id, title} = route.params;
    
    useEffect(() => {
        navigation.setOptions({title: title});
        axios
            .get('https://6327075fba4a9c47532f416c.mockapi.io/articles/' + id)
            .then(({ data }) => {
                setData(data)
            }).catch(err => {
                console.log(err);
                Alert.alert('Ошибка', 'Не удалось получить статьи');
            }).finally(() => {
                setIsLoading(false)
            });
    }, []);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <View style={[styles.container]}>
            <Image 
                source={{uri: data.imageUrl}}
                style={[styles.postImage]}
            />
            <Text style={[styles.postText]}>
                {data.text}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    postImage: {
        borderRadius: 10,
        width: '100%',
        height: 250,
        marginBottom: 20,
    },
    postText: {
        fontSize: 18,
        lineHeight: 24,
    },
    container: {
        padding: 20,
    },
})