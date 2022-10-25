import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LabOne } from "../screens/LabOne";
import { LabThree } from "../screens/LabThree";
import { StackNavigation } from "./StackNavigation";
import { LabTwoSvg } from "../assets/svg/LabTwoSvg";
import { LabOneSvg } from "../assets/svg/LabOneSvg";
import { LabThreeUseMemo } from "../screens/LabThreeUseMemo";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="TabNavigator">
                <Tab.Screen
                    name="Первая лабораторная работа"
                    component={LabOne}
                    options={{
                        tabBarLabel: 'LAB ONE',
                        tabBarIcon: () => <LabOneSvg
                            height="100%"
                            width="100%"
                            viewBox="0 0 48 48"
                        />,
                    }}
                />
                <Tab.Screen
                    name="Вторая лабораторная работа"
                    component={StackNavigation}
                    options={{
                        tabBarLabel: 'LAB TWO',
                        tabBarIcon: () => <LabTwoSvg />,
                    }}
                />
                <Tab.Screen
                    name="Третья лабораторная работа"
                    component={LabThreeUseMemo}
                    options={{
                        tabBarLabel: 'LAB THREE',
                        tabBarIcon: () => <LabOneSvg
                            height="100%"
                            width="100%"
                            viewBox="0 0 48 48"
                        />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}