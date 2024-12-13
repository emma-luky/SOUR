import { View, Text, TouchableOpacity, ActivityIndicator, Pressable, ImageBackground } from 'react-native';
import styles from '@/constants/Style';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';
import { Link } from 'expo-router';

export default function NavBar({ current }: { current: string }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [homeHovered, setHomeHovered] = useState(false);
    const [aboutHovered, setAboutHovered] = useState(false);
    const [contactHovered, setContactHovered] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Mandali': require('../assets/fonts/Mandali-Regular.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    const getLinkStyle = (page: string, isHovered: boolean) => {
        if (current === page) return styles.activeLink;
        return isHovered ? styles.navbarHover : styles.navbarLink;
    };

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    else {
        return (
            <>
                <View style={styles.navbar}>
                    <View style={[styles.column, { flex: 2}, {}]}>
                        <Text style={styles.p}>LOGO</Text>
                    </View>
                    <View style={[styles.column, { flex: 1 }]}>
                        <View style={[styles.row, { justifyContent: 'space-between' }]}>
                            <Pressable
                                onHoverIn={() => setHomeHovered(true)}
                                onHoverOut={() => setHomeHovered(false)}>
                                <Link href={'/'} style={getLinkStyle('home', homeHovered)}>
                                    HOME
                                </Link>
                            </Pressable>
                            <Pressable
                                onHoverIn={() => setAboutHovered(true)}
                                onHoverOut={() => setAboutHovered(false)}>
                                <Link href={'/about'} style={getLinkStyle('about', aboutHovered)}>
                                    ABOUT
                                </Link>
                            </Pressable>
                            <Pressable
                                onHoverIn={() => setContactHovered(true)}
                                onHoverOut={() => setContactHovered(false)}>
                                <Link href={'/contact'} style={getLinkStyle('contact', contactHovered)}>
                                    CONTACT
                                </Link>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}
