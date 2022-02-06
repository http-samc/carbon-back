import { KeyboardAvoidingView, Platform, SafeAreaView, Keyboard, TouchableWithoutFeedback, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from '../theme/styles';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../theme/colors';
import { useToast } from 'react-native-fast-toast';
import Checkout from '../components/Checkout';
import { StripeProvider } from '@stripe/stripe-react-native';
import LoadingView from '../components/LoadingView';

var maxQty = 10;

const Purchase = () => {
    const [qty, setQty] = useState(1);
    const [rate, setRate] = useState(0.05);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    const getData = async () => {
        var response = await fetch('https://www.smrth.dev/api/carbon-back/availability');
        var data = await response.json();

        if (data.wasSuccessful) {
            maxQty = data.credits;
        }

        response = await fetch('https://www.smrth.dev/api/carbon-back/rate');
        data = await response.json();

        if (data.wasSuccessful) {
            setRate(data.rate);
        }

        setLoading(false);
    }

    useEffect(() => { getData() }, [loading])

    if (loading) {
        return (
            <LoadingView />
        )
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={Styles.purchaseContainer}>
                <Text style={[Styles.h1, { marginBottom: 5, alignSelf: 'center' }]}>Purchase Credits</Text>
                <KeyboardAvoidingView
                    style={Styles.qtyContainer}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TouchableOpacity
                        onPress={() => { qty > 1 ? setQty(qty - 1) : toast.show('Quantity must be greater than 0!') }}
                    >
                        <AntDesign name='minus' size={38} color={Colors.text} />
                    </TouchableOpacity>
                    <TextInput
                        style={Styles.qtyInput}
                        keyboardType='numeric'
                        defaultValue='1'
                        value={qty.toString()}
                        onChangeText={(text) => {
                            if (parseInt(text) > maxQty)
                                toast.show('Quantity must be less than ' + maxQty.toString() + '!');
                            else if (parseInt(text) < 1)
                                toast.show('Quantity must be greater than 0!');
                            else
                                setQty(parseInt(text))
                        }}

                    />
                    <TouchableOpacity
                        onPress={() => { qty < maxQty ? setQty(qty + 1) : toast.show('Quantity Unavailable!') }}
                    >
                        <AntDesign name='plus' size={38} color={Colors.text} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <Text style={[Styles.purchaseDescription, { marginBottom: 20, textAlign: 'center' }]}>
                    You are purchasing <Text style={Styles.descImportant}>{qty}</Text> Carbon {qty > 1 ? 'Credits' : 'Credit'} at the current market rate of <Text style={Styles.descImportant}>{rate}</Text> CC/$ (Carbon Credits per US Dollar).
                </Text>
                <Text style={Styles.purchaseTotal}>Order Total: ${qty / rate}</Text>

                <Text style={[Styles.h2, { marginBottom: 10 }]}>Details</Text>
                <Text style={Styles.purchaseDescription}>
                    One Carbon Credit represents 1 ton of Carbon Dioxide removed from the atmosphere over the course one year. Transactions are instantaneous and irreversible.
                    You will recieve a hosted certificate as your proof of purchase, which you can use to verify with consumers or governmental agencies.
                    Keep in mind that the duration of each contract is limited to one year. You do not get a ton of CO2 removed annually in perpituity without repurchasing.
                </Text>
                {/* @ts-ignore */}
                <StripeProvider publishableKey='pk_test_51KQ8BeL1Sbu4VnBadepvuKhlBEyPg6eHW8IHCTcQ8rCLXnXFefa6bUAS1zPJXkuQ5W2XnYzxbcf5OthLW4QRBnoB00xj47hBzW'>
                    <Checkout amount={qty / rate} />
                </StripeProvider>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Purchase;