import { useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from "react-native-calendars";
import { useState } from "react";
import { Card } from "react-native-paper";
import daysOfWeek from "../constants/Days";

interface EventDate {
  summary: string;
  start: {
    date?: string;
  };
  end: {
    date?: string;
  };
}

interface EventDateTime {
  summary: string;
  start: {
    dateTime?: string;
  };
  end: {
    dateTime?: string;
  };
}

const MyCalendar = () => {
  const [eventsDate, setEventsDate] = useState<EventDate[]>([]);
  const [eventsDateTime, setEventsDateTime] = useState<EventDateTime[]>([]);
  const calendarId = process.env.EXPO_PUBLIC_CALENDAR_ID; //Import NSBE calendar id (Mock Calendar for now)
  const apiKey = process.env.EXPO_PUBLIC_API_KEY; //Import NSBE Google API Key
  const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/?key=${apiKey}`; // Merge for api request link
  const [selected, setSelected] = useState("");
  const [markedDatesWithDate, setMarkedDatesWithDate] = useState<{
    [date: string]: any;
  }>({});
  const [markedDatesWithDateTime, setMarkedDatesWithDateTime] = useState<{
    [date: string]: any;
  }>({});
  const [items, setItems] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl); // Make initial api call
      const data = await response.json(); // Parse the data response

      if (data.items) {
        const eventsArrayWithDate: EventDate[] = [];
        const eventsArrayWithDateTime: EventDateTime[] = [];
        let i = 0;
        data.items.forEach((event: any) => {
          if (event.summary && event.start.date && event.end.date) {
            eventsArrayWithDate.push({
              summary: event.summary,
              start: { date: event.start.date },
              end: { date: event.end.date },
            });
          } else if (
            event.summary &&
            event.start.dateTime &&
            event.end.dateTime
          ) {
            eventsArrayWithDateTime.push({
              summary: event.summary,
              start: { dateTime: event.start.dateTime },
              end: { dateTime: event.end.dateTime },
            });
          }
          i += 1;
        });

        setEventsDate(eventsArrayWithDate);
        setEventsDateTime(eventsArrayWithDateTime);

        const markedDatesObjWithDate =
          convertToMarkedDates(eventsArrayWithDate);
        const markedDatesObjWithDateTime = convertToMarkedDateTimes(
          eventsArrayWithDateTime
        );
        setMarkedDatesWithDate(markedDatesObjWithDate);
        setMarkedDatesWithDateTime(markedDatesObjWithDateTime);
      }
    } catch (error) {
      console.log("Error fetching data:", error); // log any errors caught
    }
  };

  useEffect(() => {
    fetchData(); // Call function on every new render of the calendar
  }, []);

  const convertToMarkedDates = (eventsArray: EventDate[]) => {
    const markedDatesObj: { [date: string]: AgendaEntry[] } = {};
    let i = 0;
    eventsArray.forEach((event) => {
      if (event.start.date && event.end.date) {
        const startDate = new Date(event.start.date);
        const endDate = new Date(event.end.date);
        i += 1;
        const dateString = startDate.toISOString().split("T")[0];
        if (!markedDatesObj[dateString]) {
          markedDatesObj[dateString] = [];
        }
        markedDatesObj[dateString].push({
          name: event.summary,
          day: daysOfWeek[startDate.getDay()],
          height: 80,
        });
      }
    });
    return markedDatesObj;
  };

  const convertToMarkedDateTimes = (eventsArray: EventDateTime[]) => {
    const markedDatesObj: { [date: string]: AgendaEntry[] } = {};
    let i = 0;
    eventsArray.forEach((event) => {
      if (event.start.dateTime && event.end.dateTime) {
        const startDate = new Date(event.start.dateTime);
        const endDate = new Date(event.end.dateTime);
        i += 1;
        const dateString = startDate.toISOString().split("T")[0];
        if (!markedDatesObj[dateString]) {
          markedDatesObj[dateString] = [];
        }
        markedDatesObj[dateString].push({
          name: event.summary,
          day: daysOfWeek[startDate.getDay()],
          height: 80,
        });
      }
    });
    return markedDatesObj;
  };

  const renderItem = (item: any) => {
    console.log(item);
    return (
      <TouchableOpacity>
        <Card>
          <Card.Content>
            <View>
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Get Events fetched from google calendar and display them in the calendar component */}
      <Agenda
        items={markedDatesWithDateTime}
        renderItem={renderItem}
        selected={"2024-2-29"}
      />
    </View>
  );
};
export default MyCalendar;
