import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import Socials from "./Socials";

interface Item {
  header: string;
  message: string;
}

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  //Number indexes
  const [images, setImages] = useState<number[]>([]);

  const urls = [
    require("../assets/NSBE-photos/NSBE-1.jpeg"),
    require("../assets/NSBE-photos/NSBE-2.jpeg"),
    require("../assets/NSBE-photos/NSBE-3.jpeg"),
    require("../assets/NSBE-photos/NSBE-4.jpeg"),
    require("../assets/NSBE-photos/NSBE-5.jpeg"),
    require("../assets/NSBE-photos/NSBE-6.jpeg"),
    require("../assets/NSBE-photos/NSBE-7.jpeg"),
    require("../assets/NSBE-photos/NSBE-8.jpeg"),
    require("../assets/NSBE-photos/NSBE-9.jpeg"),
    require("../assets/NSBE-photos/NSBE-10.jpeg"),
    require("../assets/NSBE-photos/NSBE-11.jpeg"),
    require("../assets/NSBE-photos/NSBE-12.jpeg"),
  ];

  // Card Headers
  const content = [
    {
      header: "About",
      message:
        "NSBE is one of the largest student-managed organizations in the country with more than 20,000 members. We focus on our members through talent development and technical excellence programs that develop professionals.",
    },
    {
      header: "National Mission Statement",
      message:
        "To increase the number of culturally responsible Black Engineers who excel academically, succeed professionally, and positively impact the community.",
    },
    {
      header: "Chapter Mission Statement",
      message:
        "To retain a talented and successful chapter dedicated to personal, professional, and academic growth.",
    },
  ];

  const sliderWidth = Dimensions.get("window").width;
  const itemWidth = sliderWidth;

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 12) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    setImages(randomNumbers);
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const image = images[index];
    const imgUrl = urls[image];
    console.log("images: ", images);
    return (
      <View className="flex-1 bg-primary rounded-lg p-5 items-center justify-center">
        <Image className="h-[250px] w-[320px]" source={imgUrl} />
        <Text className="font-bold text-lg text-center border border-black rounded-md bg-white bg-opacity-70 w-[320px]">
          {item.header}
        </Text>
        <Text className="italic text-md text-center border border-black rounded-md p-1 bg-white bg-opacity-70 w-[320px]">
          {item.message}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView className=" bg-primary my-5">
      <View className="flex-1 text-center items-center mt-5">
        <Text className="font-bold text-xl">
          <Text className="text-red-500">N</Text>ational{" "}
          <Text className="text-yellow-500">S</Text>ociety of{" "}
          <Text className="text-green-500">B</Text>lack Engineers
        </Text>
        <Text className="text-md">at</Text>
        <Text className="text-l">The University of Central Florida</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        {/* Carousel */}
        <Carousel
          layout={"default"}
          data={content}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth}
        />

        {/* Text and Image */}
        <View className="flex flex-col items-center mt-4">
          <Image
            className="h-[250px] w-[320px] mt-4"
            source={urls[images[3]]}
          />
        </View>
        {/* Button */}
        <TouchableOpacity
          className="flex bg-white w-[320px] rounded-sm"
          onPress={() => navigation.navigate("Calendar")}
        >
          <Text className="text-center font-bold text-xl">
            <Text className="text-red-500">S</Text>tay up{" "}
            <Text className="text-yellow-500">T</Text>o{" "}
            <Text className="text-green-500">D</Text>ate
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-10">
        <Socials />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
