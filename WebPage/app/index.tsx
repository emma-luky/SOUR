import { Link, Stack } from 'expo-router';
import { View, Text, ActivityIndicator, Pressable, ScrollView, Image } from 'react-native';
import styles from '@/constants/Style'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';

export default function Index() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        document.title = 'SOUR';
        const loadFonts = async () => {
            await Font.loadAsync({
                'DM Sans': require('../assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    else {
        return (
            <>
                <Stack screenOptions={{ headerShown: false }} />
                <NavBar current='home'/>
                <View  style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Image source={require('../assets/images/SOUR-logo.png')}/>
                </View>
        </>
        );
    }
}
