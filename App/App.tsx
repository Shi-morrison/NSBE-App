import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Calendar from './components/Calendar'
import Socials from './components/Socials';


export default function App() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>NSBE APP</Text>
        <StatusBar style="auto" />
      </View>
      <Calendar />
      <Socials />


    </>
  );
}


