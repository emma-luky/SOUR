import { Link, Stack } from 'expo-router';
import { View, Text, ActivityIndicator, Pressable, ScrollView } from 'react-native';
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
                <NavBar current='home'/>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{alignItems: 'center', justifyContent: 'center',}}
                    >
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.row}>
                                <Text style={styles.h1}>SOUR</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.h3}>Shop, Own, Upcycle, Reuse</Text>
                                <View style={[styles.row, styles.links]}>
                                    <View style={styles.column}>
                                        <Pressable
                                            onHoverIn={() => setAboutHovered(true)}
                                            onHoverOut={() => setAboutHovered(false)}>
                                            <Link href={'/about'} style={aboutHovered ? styles.hover : styles.link}>
                                                &rarr; about
                                            </Link>
                                        </Pressable>
                                        <Pressable
                                            onHoverIn={() => setPrototypeHovered(true)}
                                            onHoverOut={() => setPrototypeHovered(false)}>
                                            <Link
                                                href={prototypeLink}
                                                style={prototypeHovered ? styles.hover : styles.link}
                                                target="_blank">
                                                &rarr; prototype
                                            </Link>
                                        </Pressable>
                                    </View>
                                    <View style={styles.column}>
                                        <Pressable
                                            onHoverIn={() => setContactHovered(true)}
                                            onHoverOut={() => setContactHovered(false)}>
                                            <Link href='/contact' style={contactHovered ? styles.hover : styles.link}>
                                                &rarr; contact
                                            </Link>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    }
}
