import React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View className="bg-red-300">
      <Card>
        <Card.Title title="Calendar" subtitle="NSBE-Events" />
        <Card.Cover
          source={{
            uri: "/Users/lewinbobda/Downloads/NSBE-App/App/assets/splash.png",
          }}
        />
        <Card.Actions>
          <Button onPress={() => navigation.navigate("Calendar")}>
            See Events
          </Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title title="Socials" />
        <Card.Cover
          source={{
            uri: "/Users/lewinbobda/Downloads/NSBE-App/App/assets/splash.png",
          }}
        />
        <Card.Actions>
          <Button onPress={() => navigation.navigate("Socials")}>
            Follow Us
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default HomeScreen;
