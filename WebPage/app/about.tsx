import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native';
import styles from '@/constants/Style'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';

export default function Index() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'PassionOne': require('../assets/fonts/PassionOne-Black.ttf'),
                'Mandali': require('../assets/fonts/Mandali-Regular.ttf'),
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
                <NavBar current='about'/>
                <View style={styles.container}>
                    <Text style={styles.h1}>About</Text>
                    <Text style={styles.p}>
                    SOUR is a social-media-driven, e-commerce mobile application designed to revolutionize second-hand fashion by supporting small businesses and promoting sustainable shopping. The fashion industry is one of the largest contributors to global carbon emissions, with fast fashion being responsible for 10% of total emissions. SOUR encourages second-hand clothing sales by empowering small sellers and providing buyers with an engaging, personalized shopping experience.
                    </Text>
                </View>
            </>
        );
    }
}
