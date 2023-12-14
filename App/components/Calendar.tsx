import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import {useTailwind} from 'tailwind-rn';

interface Event {
    summary: string;
    start: {
      dateTime?: string;
      date?: string;
    };
    end: {
      dateTime?: string;
      date?: string;
    };
}

const MyCalendar = () => {
    useEffect(() => {
        const calendarId = process.env.EXPO_PUBLIC_CALENDAR_ID; //Import NSBE calendar id (Mock Calendar for now)
        const apiKey = process.env.EXPO_PUBLIC_API_KEY; //Import NSBE Google API Key
        const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/?key=${apiKey}`; // Merge for api request link

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl); // Make initial api call
                const data = await response.json(); // Parse the data response

                if (data.items) {
                    data.items.forEach((event: Event) => {
                        console.log('Event Summary:', event.summary); // Store event summary
                        console.log('Event Start:', event.start.dateTime || event.start.date); // Store event start date
                        console.log('Event End:', event.end.dateTime || event.end.date); // Store event end date
                        console.log('---');
                    });
                }
            } catch (error) {
                console.log('Error fetching data:', error); // log any errors caught
            }
        };

        fetchData(); // Call function on every new render of the calendar
    }, []);

     // Create tailwind object
    return (
        <View>
        {/* Get Events fetched from google calendar and display them in the calendar component */}
        <Calendar
            current={'2023-01-01'}
            minDate={'2023-01-01'}
            maxDate={'2023-12-31'}
            monthFormat={'yyyy MM'}
            onDayPress={(day) => {
            console.log('selected day', day);
            }}
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