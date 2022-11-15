import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FullPost } from "../screens/labTwo/FullPost";
import { LabTwo } from "../screens/LabTwo";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="StackNavigator">
            <Stack.Screen
                name="LabTwo"
                component={LabTwo}
                options={{ title: "Новости" }}
            />
            <Stack.Screen
                name="FullPost"
                component={FullPost}
                options={{ title: "Статья" }}
            />
        </Stack.Navigator>
    );
};