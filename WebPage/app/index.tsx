import { Link, Stack } from 'expo-router';
import { View, Text, ActivityIndicator, Pressable, ScrollView, Image } from 'react-native';
import styles from '@/constants/Style'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';

export default function Index() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const prototypeLink = 'https://www.figma.com/proto/g2zNAIX7VL5Y5x1WFeiQqM/Prototyping-in-Figma?page-id=0%3A1&node-id=0-2&node-type=frame&viewport=70%2C294%2C0.18&t=KqrqD8DWfHfmiwRZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A2';
    const [aboutHovered, setAboutHovered] = useState(false);
    const [prototypeHovered, setPrototypeHovered] = useState(false);
    const [contactHovered, setContactHovered] = useState(false);

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
                    <Image source={require('../assets/images/SOUR-logo-bag-transparent.png')}/>
                </View>
        </>
        );
    }
}
