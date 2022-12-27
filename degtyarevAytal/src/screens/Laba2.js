import React, {useState} from 'react';
import {Container} from '../components/Container';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';

export const Laba2 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(json => setData(json.data))
      .finally(() => setLoading(false));
  };

  const renderItem = itemData => {
    return (
      <View style={styles.containerFlate}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Имя : {itemData.item.name}</Text>
          <Text style={styles.title}>Псевдоним : {itemData.item.username}</Text>
          <Text style={styles.title}>Телефон : {itemData.item.phone}</Text>
          <Text style={styles.title}>Email : {itemData.item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <Container showArrow={true}>
      <Text style={styles.text}>Лабараторная 2 &shy;(Axios)</Text>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        {isLoading && (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}>
            <Text style={styles.buttontext}>Нажмите</Text>
          </TouchableOpacity>
        )}
        <StatusBar />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    margin: 16,
    height: 140,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: '#7653A6',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7653A6',
    padding: 20,
    width: '36%',
    height: '41%',
    marginTop: 170,
    borderRadius: 70,
    marginLeft: 120,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },

  buttontext: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    fontSize: 24,
    paddingTop: 20,
  },
});
