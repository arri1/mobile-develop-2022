import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FullPost } from "./FullPost";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title: 'Новости'}}/>
                <Stack.Screen name="FullPost" component={FullPost} options={{title: 'Статья'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}