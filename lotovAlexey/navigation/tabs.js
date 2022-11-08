import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOppacity } from "react-native";
import HomeScreen from '../screens/HomeScreen'
import Lab1 from '../screens/Lab1'
import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'relative',
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    height: 60,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <View style={styles.ViewTabBarIcon}>
                        <Image 
                            source={require('../assets/icons/home.png')}
                            resizeMode='contain'
                            style={{tintColor: focused ? '#e32f45' : '#748c94',...styles.TabBarImage}}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>HOME</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Lab1" component={Lab1} options={{
                tabBarIcon: ({focused}) =>(
                    <View style={styles.ViewTabBarIcon}>
                        <Image 
                            source={require('../assets/icons/task.png')}
                            resizeMode='contain'
                            style={{tintColor: focused ? '#e32f45' : '#748c94',...styles.TabBarImage}}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>LAB1</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Lab2" component={Lab2} options={{
                tabBarIcon: ({focused}) =>(
                    <View style={styles.ViewTabBarIcon}>
                        <Image 
                            source={require('../assets/icons/task.png')}
                            resizeMode='contain'
                            style={{tintColor: focused ? '#e32f45' : '#748c94',...styles.TabBarImage}}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>LAB2</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Lab3" component={Lab3} options={{
                tabBarIcon: ({focused}) =>(
                    <View style={styles.ViewTabBarIcon}>
                        <Image 
                            source={require('../assets/icons/task.png')}
                            resizeMode='contain'
                            style={{tintColor: focused ? '#e32f45' : '#748c94',...styles.TabBarImage}}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>Lab3</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset : {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    ViewTabBarIcon:{
        alignItems: 'center', 
        justifyContent: 'center', 
        top:0
    },
    TabBarImage:{
        width:25,
        height: 25,
        
    },
});

export default Tabs;