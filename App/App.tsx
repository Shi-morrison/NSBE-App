import Calendar from "./components/Calendar";
import Socials from "./components/Socials";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Socials" component={Socials} />
          <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
