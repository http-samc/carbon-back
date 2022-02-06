import { Text, TextInput, View, Switch, Platform, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Image, Keyboard } from 'react-native';
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
            if (!userEmail.includes('@') || userPass == '') {
                toast.show('Please enter a valid email and password.');
                return;
            }

            await SecureStore.setItemAsync('user-type', isEnabled ? 'seller' : 'buyer');
            const response = await fetch('https://www.smrth.dev/api/carbon-back/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userEmail.toLowerCase(),
                    password: userPass,
                    userType: isEnabled ? 'seller' : 'buyer',
                })
            });

            const data = await response.json();
            if (data.wasSuccessful) {
                await SecureStore.setItemAsync('email', userEmail.toLowerCase());
                await SecureStore.setItemAsync('password', userPass.toLowerCase());
                // setUserEmail('');
                // setUserPass('');
                // @ts-ignore
                navigation.navigate('Info');
            }
            else {
                toast.show(data.message);
            }

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

            const response = await fetch('https://www.smrth.dev/api/carbon-back/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userEmail.toLowerCase(),
                    password: userPass,
                })
            });

            const data = await response.json();
            if (data.wasSuccessful) {
                await SecureStore.setItemAsync('email', userEmail.toLowerCase());
                await SecureStore.setItemAsync('password', userPass.toLowerCase());
                await SecureStore.setItemAsync('user-type', data.userType);
                setUserEmail('');
                setUserPass('');
                // @ts-ignore
                navigation.navigate('Info');
            }
            else {
                toast.show(data.message);
            }
        }
        catch (e) {
            toast.show('Error signing up.');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
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
                            trackColor={{ false: Colors.primaryVariant, true: Colors.primary }}
                            thumbColor={Colors.white}
                            ios_backgroundColor={Colors.primaryVariant}
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
        </TouchableWithoutFeedback>
    );
}

export default Authenticate;