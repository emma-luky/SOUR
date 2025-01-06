import { Stack, Link } from 'expo-router';
import { ScrollView, View, Text, ActivityIndicator, Pressable } from 'react-native';
import styles from '@/constants/Style'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';
import SourTimeline from '@/components/Timeline';

export default function About() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [prototypeHovered, setPrototypeHovered] = useState(false);
    const prototypeLink = 'https://www.figma.com/proto/g2zNAIX7VL5Y5x1WFeiQqM/Prototyping-in-Figma?page-id=0%3A1&node-id=0-2&node-type=frame&viewport=70%2C294%2C0.18&t=KqrqD8DWfHfmiwRZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A2';

    useEffect(() => {
        document.title = 'SOUR | About';
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
                <NavBar current='about'/>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <Text style={styles.h2}>Your style, your community, your impact</Text>
                    <Text style={styles.p}>
                        SOUR aims to make second-hand fashion a first-choice by connecting buyers and sellers in a dynamic, social marketplace.
                    </Text>
                    <Text style={styles.p}>
                        Try out SOUR's high fidelity&nbsp;
                        <Pressable
                            onHoverIn={() => setPrototypeHovered(true)}
                            onHoverOut={() => setPrototypeHovered(false)}>
                            <Link
                                href={prototypeLink}
                                style={prototypeHovered ? styles.hover : styles.link}
                                target="_blank">
                                prototype
                            </Link>
                        </Pressable>
                        .
                    </Text>
                    <Text style={styles.p}>
                        Below shows SOUR's past and future milestones.
                    </Text>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <SourTimeline/>
                    </View>
                </ScrollView>
            </>
        );
    }
}
