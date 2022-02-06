import { Text, TextInput, View, Switch, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/core';

import Styles from '../theme/styles';
import Colors from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Authenticate = () => {
    const navigation = useNavigation();

    // State vars
    const [userType, setUserType] = useState('buyer');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);

    // Functions
    const signUp = async () => {
        try {
            await SecureStore.setItemAsync('user-type', isEnabled ? 'seller' : 'buyer');
            // TODO: Sign up API call
            // @ts-ignore
            navigation.navigate('Info');
        }
        catch (e) {
            console.log(e);
        }
    }

    // Functions
    const signIn = async () => {
        try {
            await SecureStore.setItemAsync('user-type', isEnabled ? 'seller' : 'buyer');
            // TODO: Sign up API call
            // @ts-ignore
            navigation.navigate('Info');
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={Styles.authWrapper}>
            <KeyboardAvoidingView style={Styles.authContainer}>
                <Image source={require('../assets/carbon_back.png')} style={Styles.authLogo} />

                <TextInput
                    style={Styles.authInput}
                    onChangeText={(text) => setUserEmail(text)}
                    value={userEmail}
                    placeholder="Email"
                >
                </TextInput>
                <TextInput
                    style={Styles.authInput}
                    onChangeText={(text) => setUserPass(text)}
                    value={userPass}
                    placeholder="Password"
                >
                </TextInput>

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