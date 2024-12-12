import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '@/constants/Style'
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
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.column}>

                            <View style={styles.row}>
                                <Text style={styles.h1}>
                                    <Text style={styles.h1}>SOUR</Text>
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.h3}>Shop, Own, Upcycle, Reuse</Text>
                                <View style={[styles.row, styles.links]}>
                                    <View style={styles.column}>
                                        <TouchableOpacity>
                                            <Text style={styles.link}>&rarr; about</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.link}>&rarr; prototype</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.column}>
                                        <TouchableOpacity>
                                            <Text style={styles.link}>&rarr; contact us</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}
