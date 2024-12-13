import { View, Text, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native';
import styles from '@/constants/Style';
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
                <View style={styles.navbar}>
                    <View style={[styles.column, { flex: 2}, {}]}>
                        <Text style={styles.p}>LOGO</Text>
                    </View>
                    <View style={[styles.column, { flex: 1 }]}>
                        <View style={[styles.row, { justifyContent: 'space-between' }]}>
                            <Text style={styles.p}>main</Text>
                            <Text style={styles.p}>about</Text>
                            <Text style={styles.p}>prototype</Text>
                            <Text style={styles.p}>contact</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}
