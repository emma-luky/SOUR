import { Stack } from 'expo-router';
import { ScrollView, View, Text, ActivityIndicator, Pressable } from 'react-native';
import styles from '@/constants/Style'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';
import SourTimeline from '@/components/Timeline';

export default function About() {
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
                <ScrollView style={styles.container}>
                    <Text style={styles.h2}>Your style, your community, your impact</Text>
                    <Text style={styles.p}>
                        SOUR aims to make second-hand fashion a first-choice by connecting buyers and sellers in a dynamic, social marketplace.
                    </Text>
                    <SourTimeline/>
                </ScrollView>
            </>
        );
    }
}
