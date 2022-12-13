import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUsers } from '../../redux/actions';
// import Parse from 'parse';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// //Initializing the SDK. 
// Parse.setAsyncStorage(AsyncStorage);
// //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
// Parse.initialize('RXdWde0m3YFUcvZMfvTcDo7ihWFlfGCL6akeFClZ','nrAgUEcjvXfZqA2WDZXctEL7Kaq0E0CUwMKZDim4');
// Parse.serverURL = 'https://parseapi.back4app.com/';

export const LoginScreen = () => {
  const {background, tabColor, users} = useSelector(state => state.colorReducer); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigation();
  const dispatch = useDispatch();
  useDispatch;
  const getUsers = () => {
    try {
        return AsyncStorage.getItem('USERS')
    } catch (error) {
        console.error(error);
        return;
    }
  }
  // const doUserLogIn = async function () {
  //   // Note that these values come from state variables that we've declared before
  //   const usernameValue = email;
  //   const passwordValue = password;
  //   return await Parse.User.logIn(usernameValue, passwordValue)
  //     .then(async (loggedInUser) => {
  //       // logIn returns the corresponding ParseUser object
  //       Alert.alert(
  //         'Success!',
  //         `User ${loggedInUser.get('username')} has successfully signed in!`,
  //       );
  //       // To verify that this is in fact the current user, currentAsync can be used
  //       const currentUser = await Parse.User.currentAsync();
  //       console.log(loggedInUser === currentUser);
  //       navigator.navigate("Tab");
  //     })
  //     .catch((error) => {
  //       // Error can be caused by wrong parameters or lack of Internet connection
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
              if (!email) {
                alert('Please fill email');
                return;
              } else
              if (!password) {
                alert('Please fill password');
                return;
              } else {
                if (getUsers) {
                  dispatch(setUsers(getUsers))
                }
                if (users[email] != password) {
                  showAlert(false);
                } else {
                  navigator.navigate("Tab");
                  alert(`Welcome back ${email}`);
                }
              }
              //doUserLogIn()
              setEmail("")
              setPassword("")
            }}>
            <Text style={styles.text}>{'Log in'}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => { 
              showAlert(true);
            }}>
            <Text style={styles.text}>{'Forgot password?'}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
};

const showAlert = (flag) => {
  if (flag) {
    Alert.alert(
      "Forgot password?",
      "Ask for your login and password from developer",
      [
        {
          text: "Got it!",
          style: "cancel",
        },
      ],
      { 
        cancelable: true,
      }
      );
  } else {
    Alert.alert(
      "Incorrect",
      "Your password or login is incorrect",
      [
        {
          text: "Try again",
          style: "cancel",
        },
      ],
      { 
        cancelable: true,
      }
      );
  };
}

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
  