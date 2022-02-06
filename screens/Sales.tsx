import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from '../theme/styles';
import SquareStatistic from '../components/SquareStatistic';
import { useToast } from 'react-native-fast-toast';
import LoadingView from '../components/LoadingView';

interface Response {
    usd: number;
    credits: number;
    avg_rate: number;
}

const Sales = () => {
    const [routing, setRouting] = useState('');
    const [account, setAccount] = useState('');
    const [data, setData] = useState<Response>({ usd: 0, credits: 0, avg_rate: 0 });
    const [loading, setLoading] = useState(true);

    const toast = useToast();

    const updatePayoutMethod = () => {
        if (routing.length < 9 || account.length < 4) {
            toast.show('Please enter a valid routing number and account number.');
            return;
        }
        setAccount('');
        setRouting('');
        toast.show('Payout method updated.');
    }

    const getData = async () => {
        // TODO: Get data from API
        setData({
            usd: 100,
            credits: 1000,
            avg_rate: 0.5,
        });
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
            <SafeAreaView style={Styles.salesContainer}>
                <Text style={[Styles.h1, { marginBottom: 5 }]}>Overall Sales</Text>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <SquareStatistic text={data.usd} units={'dollars'} size={150} />
                    <SquareStatistic text={data.credits} units={'credits'} size={150} />
                    <SquareStatistic text={data.avg_rate} units={'avg. rate'} size={150} />
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={Styles.payoutWrapper}
                >
                    <TextInput
                        style={Styles.payoutInput}
                        placeholder={'Routing Number'}
                        onChangeText={(text) => setRouting(text)}
                        value={routing}
                        keyboardType={'numeric'}
                    />
                    <TextInput
                        style={Styles.payoutInput}
                        placeholder={'Account Number'}
                        onChangeText={(text) => setAccount(text)}
                        value={account}
                        keyboardType={'numeric'}
                    />
                    <TouchableOpacity
                        style={Styles.payoutButton}
                        onPress={updatePayoutMethod}
                    >
                        <Text style={Styles.h2}>Update Payout Method</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Sales;