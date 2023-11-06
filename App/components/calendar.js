import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import {useTailwind} from 'tailwind-rn';

const MyCalendar = () => {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('flex-1 bg-white')}>
        <Calendar
            current={'2023-01-01'}
            minDate={'2023-01-01'}
            maxDate={'2023-12-31'}
            monthFormat={'yyyy MM'}
            onDayPress={(day) => {
            console.log('selected day', day);
            }}
            style={tailwind('bg-blue-500')}
            theme={{
            arrowColor: 'white',
            selectedDayBackgroundColor: 'blue-600',
            selectedDayTextColor: 'white',
            }}
        />
        </View>
  );
};

export default MyCalendar;