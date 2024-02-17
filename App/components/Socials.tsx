// Import necessary components from react-native
import { Text, TouchableOpacity, View, Linking, Image } from 'react-native';
import React from 'react';

// Define the Socials component
const Socials = () => {
  // Function to open URLs, taking a URL string as a parameter
  const openURL = (url: string) => {
    // Use Linking API to open the URL, with error handling
    Linking.openURL(url).catch((err) =>
      console.error('An error occurred', err)
    );
  };

  // Component render function
  return (
    // Main container view
    <View className='flex-1 justify-end items-stretch w-full px-5'>
      {/* Container for social media icons */}
      <View className='flex-row justify-around'>
        {/* Instagram button */}
        <TouchableOpacity
          onPress={() => openURL('https://instagram.com/nsbeucf')}
        >
          <Image
            source={require('../assets/instagram-icon.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        {/* Discord button */}
        <TouchableOpacity
          onPress={() => openURL('https://discord.com/invite/95T5VEwmqA')}
        >
          <Image
            source={require('../assets/discord-icon.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        {/* LinkedIn button */}
        <TouchableOpacity
          onPress={() =>
            openURL('https://www.linkedin.com/in/nsbe-ucf-13189346/')
          }
        >
          <Image
            source={require('../assets/linkedin-icon.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        {/* Email button */}
        <TouchableOpacity onPress={() => openURL('mailto:nsbeucf@gmail.com')}>
          <Image
            source={require('../assets/email-icon.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>

      {/* Container for the Linktree button */}
      <View className='mb-8 ml-3'>
        {/* Linktree button */}
        <TouchableOpacity
          onPress={() => openURL('https://linktr.ee/Nsbe.UCF')}
          className=' bg-green-500 w-full rounded-full py-2 px-6 mt-5'
        >
          <View className='flex-row gap-2 justify-center items-center'>
            {/* Button text */}
            <Text className='text-center text-black font-bold text-2xl'>
              NSBE Linktree
            </Text>
            {/* Linktree icon */}
            <Image
              source={require('../assets/linktree-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Export the Socials component for use in other parts of the app
export default Socials;
