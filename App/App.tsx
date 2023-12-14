import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Calendar from './components/Calendar'

export default function App() {
  return (
      <>
        <View style={styles.container}>
          <Text>NSBE APP</Text>
          <StatusBar style="auto" />
        </View>
        <Calendar />
        
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
