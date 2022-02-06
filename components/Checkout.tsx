import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import Styles from '../theme/styles';
import { useStripe } from '@stripe/stripe-react-native';
import { useToast } from 'react-native-fast-toast';

interface Props {
    amount: number;
}

const Checkout = (props: Props) => {
    const stripe = useStripe();
    const toast = useToast();

    const order = async () => {
        try {
            const finalAmount = props.amount > 1 ? props.amount : 1;
            const response = await fetch("http://localhost:8080/api/carbon-back/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: finalAmount, uid: 'asdhjk123jas' }), // TODO: UID here
            });
            const data = await response.json();
            if (!response.ok) {
                return toast.show(data.message);
            }
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSecret: data.clientSecret,
            });
            if (initSheet.error) {
                return toast.show(initSheet.error.message);
            }
            const presentSheet = await stripe.presentPaymentSheet();
            if (presentSheet.error) {
                return toast.show(presentSheet.error.message);
            }
            toast.show("Order placed successfully!");
        } catch (err) {
            toast.show("Unknown error encountered!");
        }
    };
    return (
        <TouchableOpacity style={Styles.purchaseButton} onPress={order}>
            <Text style={Styles.purchaseButtonText}>ORDER</Text>
        </TouchableOpacity>
    );
};

export default Checkout;