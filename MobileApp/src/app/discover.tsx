import { Button, YStack } from 'tamagui';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function App() {
    const { username } = useLocalSearchParams();

  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
        <Text>
        Your name is {username}
        </Text>
    </YStack>
  );
}
