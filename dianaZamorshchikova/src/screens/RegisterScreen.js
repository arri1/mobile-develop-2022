import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setUsers } from '../../redux/actions';
// import Parse from 'parse';
import AsyncStorage from '@react-native-async-storage/async-storage';

// //Initializing the SDK. 
// Parse.setAsyncStorage(AsyncStorage);
// //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
// Parse.initialize('RXdWde0m3YFUcvZMfvTcDo7ihWFlfGCL6akeFClZ','nrAgUEcjvXfZqA2WDZXctEL7Kaq0E0CUwMKZDim4');
// Parse.serverURL = 'https://parseapi.back4app.com/';



export const RegisterScreen = () => {
  const {background, tabColor, users} = useSelector(state => state.colorReducer); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigation();
  const dispatch = useDispatch();
  useDispatch;
  const addUser = (emailValue, passwordValue) => {
    dispatch(setUsers(users[emailValue] = passwordValue));
    AsyncStorage.setItem('USERS', users)  
    alert(`User ${emailValue} was successfully created!`);
  }
  // const doUserRegistration = async function () {
  //   // Note that these values come from state variables that we've declared before
  //   const usernameValue = email;
  //   const passwordValue = password;
  //   // Since the signUp method returns a Promise, we need to call it using await
  //   return await Parse.User.signUp(usernameValue, passwordValue)
  //     .then((createdUser) => {
  //       // Parse.User.signUp returns the already created ParseUser object if successful
  //       Alert.alert(
  //         'Success!',
  //         `User ${createdUser.getUsername()} was successfully created!`,
  //       );
  //       return true;
  //     })
  //     .catch((error) => {
  //       // signUp can fail if any parameter is blank or failed an uniqueness check on the server
  //       Alert.alert('Error!', error.message);
  //       return false;
  //     });
  // };
    return (
      <SafeAreaView style={{...styles.mainContainer, backgroundColor: background}}>
        <TextInput
          style={styles.textInput}
          placeholder="Your login/email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your password"
          onChangeText={(text) => setPassword(text)}
          keyboardType="invisible-password"
          secureTextEntry
          value={password}
        />
        <View style={styles.countButton}>
          <Pressable
            style={styles.button}
            onPress={() => {
              //doUserRegistration()
              if (!email) {
                alert('Please fill email');
                return;
              } else
              if (!password) {
                alert('Please fill password');
                return;
              } else {
                const usernameValue = email;
                const passwordValue = password;
                if (users[usernameValue] == password) {
                  alert(`User ${usernameValue} is already registered!`);
                } else {
                  addUser(usernameValue, passwordValue);
                } 
              }
              setEmail("")
              setPassword("")
            }}>
            <Text style={styles.text}>{'Register'}</Text>
          </Pressable>
        </View>
        <View style={styles.countButton}>
          <Pressable
            style={styles.button}
            onPress={() => {
              //doUserRegistration()
              navigator.navigate('LoginScreen')
              setEmail("")
              setPassword("")
            }}>
            <Text style={styles.text}>{'I already have an account, sign in'}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    countButton: {
      marginTop: 10,
    },
    bar: {
      marginTop: 10,
      width: 100,
      height: 100,
      backgroundColor: 'red',
    },
    changeColorButton: {
      marginTop: 10,
      borderRadius: 10,
    },
    red: {
      color: 'red',
    },
    button: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    textInput: {
      width: 250,
      backgroundColor: '#F6F6EB',
      padding: 16,
      textAlign:'center',
      fontSize: 24,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
  