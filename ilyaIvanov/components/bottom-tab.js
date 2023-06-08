import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';

import HomeIcon from '../assets/icons/home.png';
import SearchIcon from '../assets/icons/search.png';
import NotificationIcon from '../assets/icons/messenger.png';
import PostIcon from '../assets/icons/play.png';
import ProfileIcon from '../assets/icons/user.png';

import { LabOne, lab1 } from '../src/screens/lab1';


const Tab = createBottomTabNavigator();

const Home = () => {
  return <View style={{backgroundColor:'#ccc', justifyContent:'center', flex:1, alignItems:'center'}}>
    <Text style={{fontSize:25}}>Home</Text>
  </View>
}

const Search = () => {
  return <View style={{backgroundColor:'#ccc', justifyContent:'center', flex:1, alignItems:'center'}}>
    <Text style={{fontSize:25}}>Search</Text>
  </View>
}

const Post = () => {
  return <View style={{backgroundColor:'#ccc', justifyContent:'center', flex:1, alignItems:'center'}}>
    <Text style={{fontSize:25}}>Post</Text>
  </View>
}

const Profile = () => {
  return <View style={{backgroundColor:'#ccc', justifyContent:'center', flex:1, alignItems:'center'}}>
    <Text style={{fontSize:25}}>Profile</Text>
  </View>
}

const Notifications = () => {
  return <View style={{backgroundColor:'#ccc', justifyContent:'center', flex:1, alignItems:'center'}}>
    <Text style={{fontSize:25}}>Notifications</Text>
  </View>
}

const BottomTab =() => {
  return <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor: '#e91e63', tabBarStyle:{height:60,position:'absolute', bottom:20,borderRadius:90,marginHorizontal:25}
      }}
    >
      <Tab.Screen
        name="Home"
        component={LabOne}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
             <Image source={HomeIcon} style={{width:35,height:35,tintColor : focused ? "#000":"#333"}}/>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => (
             <Image source={SearchIcon} style={{width:35,height:35,tintColor : focused ? "#000":"#333"}}/>
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ focused }) => (
             <Image source={PostIcon} style={{width:35,height:35,tintColor : focused ? "#000":"#333"}}/>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused }) => (
             <Image source={NotificationIcon} style={{width:35,height:35,tintColor : focused ? "#000":"#333"}}/>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
             <Image source={ProfileIcon} style={{width:35,height:35,tintColor : focused ? "#000":"#333"}}/>
          ),
        }}
      />
    </Tab.Navigator>

}

export default BottomTab;