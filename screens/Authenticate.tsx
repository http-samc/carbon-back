import { Text, TextInput, View, Switch, Platform, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/core';

import Styles from '../theme/styles';
import Colors from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useToast } from 'react-native-fast-toast';

const Authenticate = () => {
    const navigation = useNavigation();
    const toast = useToast();

    // State vars
    const [userType, setUserType] = useState('buyer');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    // Functions
    const signUp = async () => {
        try {
            // if (!userEmail.includes('@') || userPass == '') {
            //     toast.show('Please enter a valid email and password.');
            //     return;
            // }

            await SecureStore.setItemAsync('user-type', isEnabled ? 'seller' : 'buyer');
            // TODO: Sign up API call, handle existing user
            // @ts-ignore
            navigation.navigate('Info');
        }
        catch (e) {
            toast.show('Error signing up.');
        }
    }

    // Functions
    const signIn = async () => {
        try {
            if (!userEmail.includes('@') || userPass == '') {
                toast.show('Please enter a valid email and password.');
                return;
            }

            // TODO: Sign in API call, handle non-existing user, store UID
            // @ts-ignore
            navigation.navigate('Info');
        }
        catch (e) {
            toast.show('Error signing up.');
        }
    }

    return (
        <SafeAreaView style={Styles.authWrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}

                style={Styles.authContainer}
            >
                <Image source={require('../assets/carbon_back.png')} style={Styles.authLogo} />

                <TextInput
                    style={Styles.authInput}
                    onChangeText={(text) => setUserEmail(text)}
                    value={userEmail}
                    placeholder="Email"
                />
                <TextInput
                    style={Styles.authInput}
                    onChangeText={(text) => setUserPass(text)}
                    value={userPass}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <View style={[Styles.authInput, Styles.selectUserRoleContainer]}>
                    <Text style={Styles.h4}>Buy</Text>
                    <Switch
                        trackColor={{ false: Colors.red, true: Colors.green }}
                        thumbColor={Colors.white}
                        ios_backgroundColor={Colors.red}
                        onValueChange={() => setIsEnabled(previousState => !previousState)}
                        value={isEnabled}
                    />
                    <Text style={Styles.h4}>Sell</Text>
                </View>

                <View style={Styles.authSubmitContainer}>
                    <TouchableOpacity
                        style={[Styles.authInput, Styles.authSubmitButton]}
                        onPress={signUp}
                    >
                        <Text style={Styles.h3}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Styles.authInput, Styles.authSubmitButton]}
                        onPress={signIn}
                    >
                        <Text style={Styles.h3}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <Text style={Styles.footer}>made with 💚 & ☕️</Text>
        </SafeAreaView>
    );
};

export default Authenticate;