import { Button, YStack } from 'tamagui';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { router } from 'expo-router';
import React, {useState} from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <TextInput
        // style={styles.input}
        onChangeText={username => setUsername(username)}
        value={username}
        placeholder="Username"
      />
      <TextInput
        // style={styles.input}
        onChangeText={password => setPassword(password)}
        value={password}
        placeholder="Password"
      />
      <Button
        onPress={async () => {
          router.replace(`/discover?username=${username}`);
        }}
      >
        Login
      </Button>
      <View>
          <TouchableOpacity
            onPress={() => {
              router.replace('/signup');
            }}
          >
            <Text>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
    </YStack>
  );
}
