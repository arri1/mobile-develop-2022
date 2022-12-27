import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Text, Image} from 'react-native';

export const LabTwo = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    axios.get('https://reqres.in/api/users/1').then(response => {
      setName(
        response.data.data.first_name + ' ' + response.data.data.last_name,
      );
      setEmail(response.data.data.email);
      setImage(response.data.data.avatar);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#7C7C7C',
  },
  card: {
    position: 'absolute',
    width: 300,
    height: 150,
    left: 10,
    top: 400,
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
  },
  image: {
    height: 130,
    width: 130,
    left: 10,
    top: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  name: {
    position: 'absolute',
    top: 10,
    left: 140,
  },
  email: {
    position: 'absolute',
    top: 30,
    left: 140,
  },
});
