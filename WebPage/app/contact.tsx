import { Link, Stack } from 'expo-router';
import { View, Text, TextInput, Button, ActivityIndicator, Alert, Pressable, ScrollView } from 'react-native';
import styles from '@/constants/Style';
import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import React from 'react';

export default function Index() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        document.title = 'SOUR | Contact';
        const loadFonts = async () => {
            await Font.loadAsync({
                'PassionOne': require('../assets/fonts/PassionOne-Black.ttf'),
                'Mandali': require('../assets/fonts/Mandali-Regular.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.message) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: 'service_o2ntb0h',
                    template_id: 'template_uncmbrc',
                    user_id: '80Gy07YC4HDxQNq09',
                    template_params: {
                        name: form.name,
                        email: form.email,
                        message: form.message,
                    },
                }),
            });

            if (response.ok) {
                console.log('Success', 'Message sent successfully!');
                setForm({ name: '', email: '', message: '' });
            } else {
                console.log('Error', 'Failed to send the message. Please try again later.');
            }
        } catch (error) {
            console.log('Error', 'An error occurred while sending the message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
        return (
            <>
                <Stack screenOptions={{ headerShown: false }} />
                <NavBar current='contact' />
                <ScrollView style={styles.container}>
                    <Text style={styles.h2}>Contact</Text>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="Name"
                            placeholderTextColor="#80002050"
                            value={form.name}
                            onChangeText={(text) => setForm({ ...form, name: text })}
                        />
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="Email"
                            placeholderTextColor="#80002050"
                            value={form.email}
                            onChangeText={(text) => setForm({ ...form, email: text })}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={[styles.input, {flex: 2}]}
                            placeholder="Message"
                            placeholderTextColor="#80002050"
                            value={form.message}
                            onChangeText={(text) => setForm({ ...form, message: text })}
                            multiline
                        />
                        <Pressable
                        style={styles.button}
                        onPress={handleSubmit}
                        disabled={isSubmitting}>
                            <Text style={styles.buttonText}>
                                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </>
        );
    }
}
