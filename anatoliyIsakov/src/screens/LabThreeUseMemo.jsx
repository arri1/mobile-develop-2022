import * as React from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet, TextInput, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

export const LabThreeUseMemo = () => {
    const [idd, setId] = React.useState(null);
    const [newId, setNewId] = React.useState(null);
    const [items, setItems] = React.useState({ "id": "1", "imageUrl": "https://avatars.mds.yandex.net/i?id=367161322717010a19c07dc91f50eab9-4482255-images-thumbs&n=13" });
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchImage = React.useMemo(() => {
        axios.get('https://6327075fba4a9c47532f416c.mockapi.io/articles/' + idd)
            .then(({ data }) => {
                setItems(data)
            }).catch(err => {
                console.log(err);
                Alert.alert('Ошибка', 'Не удалось получить статьи');
            }).finally(() => {
                setIsLoading(false)
            });
    }, [idd]);

    if (isLoading) {
        return (
            <View style={[styles.loading]}>
                <ActivityIndicator size='large' />
                <Text style={{ marginTop: 15 }}>Идет загрузка</Text>
            </View>

        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={newId}
                onChangeText={(newValue) => setNewId(newValue)}
                placeholder="id"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => setId(newId)}
            >
                <Text style={styles.buttonText}>
                    Поиск
                </Text>
            </TouchableOpacity>
            <Image
                source={{ uri: items.imageUrl }}
                style={styles.postImage}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        elevation: 8,
        borderRadius: 10,
        width: 170,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: "#009688"
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    container: {
        padding: 20,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postImage: {
        marginTop: 15,
        borderRadius: 10,
        width: '100%',
        height: 250,
        marginBottom: 25,
    },
})