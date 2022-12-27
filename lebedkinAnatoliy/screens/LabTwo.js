import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';

export const LabTwo = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const count = useSelector(state => state.counter.value);
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

/* Card

position: absolute;
width: 300px;
height: 150px;
left: 90.48px;
top: 104px;

transform: rotate(31.1deg);


/* Card

box-sizing: border-box;

position: absolute;
width: 300px;
height: 150px;
left: 90.48px;
top: 104px;

background: #D9D9D9;
border: 1px solid #000000;
border-radius: 25px;
transform: rotate(31.1deg);


/* Photo

box-sizing: border-box;

position: absolute;
width: 90px;
height: 90px;
left: 90.39px;
top: 138.99px;

background: #D9D9D9;
border: 1px solid #000000;
transform: rotate(31.1deg);


/* LastName First Name

position: absolute;
width: 155px;
height: 19px;
left: 178.07px;
top: 193.04px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;

transform: rotate(31.1deg);


/* Address

position: absolute;
width: 155px;
height: 19px;
left: 165.16px;
top: 214.45px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;

transform: rotate(31.1deg);


/* Card

position: absolute;
width: 300px;
height: 150px;
left: 40px;
top: 311px;

transform: rotate(-9.21deg);


/* Card

box-sizing: border-box;

position: absolute;
width: 300px;
height: 150px;
left: 40px;
top: 311px;

background: #D9D9D9;
border: 1px solid #000000;
border-radius: 25px;
transform: rotate(-9.21deg);


/* Photo

box-sizing: border-box;

position: absolute;
width: 90px;
height: 90px;
left: 62.57px;
top: 337.74px;

background: #D9D9D9;
border: 1px solid #000000;
transform: rotate(-9.21deg);


/* LastName First Name

position: absolute;
width: 155px;
height: 19px;
left: 164.4px;
top: 322.24px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;

transform: rotate(-9.21deg);


/* Address

position: absolute;
width: 155px;
height: 19px;
left: 168.4px;
top: 346.92px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;

transform: rotate(-9.21deg);


/* Card

position: absolute;
width: 300px;
height: 150px;
left: 133.44px;
top: 159px;

transform: rotate(56.75deg);


/* Card

box-sizing: border-box;

position: absolute;
width: 300px;
height: 150px;
left: 133.44px;
top: 159px;

background: #D9D9D9;
border: 1px solid #000000;
border-radius: 25px;
transform: rotate(56.75deg);


/* Photo

box-sizing: border-box;

position: absolute;
width: 90px;
height: 90px;
left: 118.22px;
top: 190.5px;

background: #D9D9D9;
border: 1px solid #000000;
transform: rotate(56.75deg);


/* LastName First Name

position: absolute;
width: 155px;
height: 19px;
left: 173.86px;
top: 277.19px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;

transform: rotate(56.75deg);


/* Address

position: absolute;
width: 155px;
height: 19px;
left: 152.96px;
top: 290.89px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;

transform: rotate(56.75deg);


/* Card

position: absolute;
width: 300px;
height: 150px;
left: 30px;
top: 469px;



/* Card

box-sizing: border-box;

position: absolute;
width: 300px;
height: 150px;
left: 30px;
top: 469px;

background: #D9D9D9;
border: 1px solid #000000;
border-radius: 25px;


/* Photo

box-sizing: border-box;

position: absolute;
width: 90px;
height: 90px;
left: 48px;
top: 499px;

background: #D9D9D9;
border: 1px solid #000000;


/* LastName First Name

position: absolute;
width: 155px;
height: 19px;
left: 151px;
top: 500px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;



/* Address

position: absolute;
width: 155px;
height: 19px;
left: 151px;
top: 525px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #000000;
 */
