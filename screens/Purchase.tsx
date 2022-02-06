import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Styles from '../theme/styles';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../theme/colors';
import { useToast } from 'react-native-fast-toast';

var maxQty = 10;
var rate = 0.5;

const Purchase = () => {
    const [qty, setQty] = useState(1);
    const toast = useToast();

    return (
        <SafeAreaView style={Styles.purchaseContainer}>
            <Text style={[Styles.h2, { marginTop: 10 }]}>Set Quantity</Text>

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
            <Text style={Styles.purchaseTotal}>Order Total: ${qty * rate}</Text>

            <Text style={[Styles.h2, { marginBottom: 10 }]}>Details</Text>
            <Text style={Styles.purchaseDescription}>
                One Carbon Credit represents 1 ton of Carbon Dioxide removed from the atmosphere over the course one year. Transactions are instantaneous and irreversible.
                You will recieve a NFT (Non Fungible Token) to prove your purchase, which you can use to verify with consumers or governmental agencies.
                Keep in mind that the duration of each contract is limited to one year. After this period, the Carbon Credit will be destroyed as the ton
                of CO2 is no longer in the atmosphere. At this point, will have to purchase more Carbon Credits to continue lowering your footprint.
            </Text>
            <TouchableOpacity style={Styles.purchaseButton}>
                <Text style={Styles.purchaseButtonText}>ORDER</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Purchase;