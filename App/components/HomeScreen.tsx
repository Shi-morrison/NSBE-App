import React from "react";
import { View, Button } from "react-native";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View className="flex bg-red-300">
      <Button
        title="See Events"
        onPress={() => navigation.navigate("Calendar")}
      />
      <Button
        title="Follow Us"
        onPress={() => navigation.navigate("Socials")}
      />
    </View>
  );
};

export default HomeScreen;
