import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import { useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import Calendar from './components/Calendar'


export default function App() {
  const tailwind = useTailwind();
  return (
    <>
      <TailwindProvider utilities={utilities}>
        <View style={styles.container}>
          <Text style={tailwind('text-red-500')}>NSBE APP</Text>
          <StatusBar style="auto" />
        </View>
        <Calendar />
      </TailwindProvider>


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
