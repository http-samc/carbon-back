import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Share } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../theme/styles';
import Colors from '../theme/colors';
import LoadingView from '../components/LoadingView';
import * as linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';

const PurchaseImpact = () => {
    const [loading, setLoading] = useState(true);
    const [CO2, setCO2] = useState(0);

    const getCO2Removed = async () => {
        const email = await SecureStore.getItemAsync('email');
        const password = await SecureStore.getItemAsync('password');

        const response = await fetch(`http://localhost:8080/api/carbon-back/overall?email=${email}&password=${password}`);
        const data = await response.json();

        if (data.wasSuccessful) {
            setCO2(data.credits);
        }

        setLoading(false);
    }

    const getNFT = async () => {
        const email = await SecureStore.getItemAsync('email');
        console.log(email)
        linking.openURL('http://localhost:8080/api/carbon-back/' + email);
    }

    const share = async () => {
        const result = await Share.share({
            message: `My buisness removed ${CO2} tons of CO2 with Carbon Back this year! You can too with the Carbon Back marketplace!`,
            url: 'https://www.smrth.dev/projects/carbon-back',
            title: 'Carbon Back'
        }, {
            dialogTitle: 'Share Your Carbon Back Story',
            subject: 'Carbon Back',
            tintColor: Colors.primary
        });
    }

    useEffect(() => { getCO2Removed() }, [loading]);
    if (loading) {
        return (
            <LoadingView />
        )
    }
    return (
        <SafeAreaView style={Styles.impactContainer}>
            <Text style={[Styles.h1, { marginBottom: 5, alignSelf: 'center' }]}>Your Impact</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.statementText}>You've removed <Text style={[Styles.statementText, { color: Colors.primary }]}>{CO2} ton{CO2 > 1 ? 's' : ''}</Text> of CO2 with Carbon Back <Text style={[Styles.statementText, { color: Colors.primary }]}>this year</Text>.</Text>
            </ScrollView>
            <View style={Styles.impactButtonContainer}>
                <TouchableOpacity style={Styles.impactButton} onPress={getNFT}>
                    <Text style={Styles.impactButtonText}>Certificate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.impactButton} onPress={share}>
                    <Text style={Styles.impactButtonText}>Share <Ionicons name='ios-share-outline' size={18} color={Colors.secondary} /></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PurchaseImpact;