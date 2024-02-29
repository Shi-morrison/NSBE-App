import Calendar from "./components/Calendar";
import Socials from "./components/Socials";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#873e23",
      onPrimary: "#873e23",
      background: "#f7f1c8",
      primaryContainer: "#873e23",
      tertiary: "#f7f1c8",
    },
  };
  return (
    <>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen name="Socials" component={Socials} />
            <Stack.Screen name="Calendar" component={Calendar} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </>
  );
}
