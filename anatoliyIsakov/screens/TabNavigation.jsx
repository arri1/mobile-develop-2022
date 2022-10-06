import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LabOne } from "../components/LabOne";
import { LabTwo } from "./LabTwo";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Lab one" component={LabOne} />
                <Tab.Screen name="Lab two" component={LabTwo} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}