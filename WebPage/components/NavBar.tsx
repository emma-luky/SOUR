import { View, Text, TouchableOpacity, Image, ActivityIndicator, Pressable, ImageBackground } from 'react-native';
import styles from '@/constants/Style';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';
import { Link } from 'expo-router';
import { Icon } from 'react-native-elements';

export default function NavBar({ current }: { current: string }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [homeHovered, setHomeHovered] = useState(false);
    const [aboutHovered, setAboutHovered] = useState(false);
    const [contactHovered, setContactHovered] = useState(false);
    const githubLink = 'https://github.com/emma-luky/SOUR';

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'DM Sans': require('../assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    const getLinkStyle = (page: string, isHovered: boolean) => {
        if (current === page) return styles.activePage;
        return isHovered ? styles.navbarHover : styles.navbarLink;
    };

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    else {
        return (
            <>
                <View style={styles.navbar}>
                    <View style={[styles.column, { flex: 2 }]}>
                        <View style={[styles.row, { alignItems: 'center' } ]}>
                            <Text style={[styles.p, {fontWeight: 'bold'}]}>SOUR</Text>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/images/SOUR-bag.png')}
                            />
                            </View>
                    </View>
                    
                    <View style={[styles.column, { flex: 1.5 }]}>
                        <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' } ]}>
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
                            <Pressable>
                                <Link
                                    href={githubLink}
                                    target="_blank">
                                    <Icon name='github' color='#692b20' type="font-awesome"/>
                                </Link>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}
