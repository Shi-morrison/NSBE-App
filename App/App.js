import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Calendar from './components/calendar'

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Calendar />
    </TailwindProvider>
  );
}

