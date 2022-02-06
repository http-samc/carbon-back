import { ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';
import SquareStatistic from '../components/SquareStatistic';
import Row from '../components/Row';
import Styles from '../theme/styles';
import Colors from '../theme/colors';
import LoadingView from '../components/LoadingView';

interface Contract {
    start: number;
    end: number;
    credits: number;
    price: number;
    rate: number;
}

const ContractHistory = () => {
    const [loading, setLoading] = useState(true);
    const [contracts, setContracts] = useState([] as Contract[]);
    const [credits, setCredits] = useState(0);
    const [dollars, setDollars] = useState(0);

    const getContracts = async () => {
        const email = await SecureStore.getItemAsync('email');
        const password = await SecureStore.getItemAsync('password');

        const response = await fetch(`http://localhost:8080/api/carbon-back/contracts?email=${email}&password=${password}`);
        const data = await response.json();

        if (data.wasSuccessful) { setContracts(data.contracts); }

        var c = 0;
        var d = 0;
        // @ts-ignore
        contracts.forEach(contract => {
            console.log(contract);
            c += contract.credits;
            d += contract.price;
        });
        setCredits(c);
        setDollars(d);
        setLoading(false);
    }

    useEffect(() => { getContracts() }, [loading])

    if (loading) {
        return (
            <LoadingView />
        )
    }

    return (
        <SafeAreaView>
            <Text style={[Styles.h1, { marginBottom: 5, alignSelf: 'center' }]}>Contract History</Text>

            <View style={Styles.contractHistoryStatsWrapper}>
                <SquareStatistic text={credits} units="credits" />
                <SquareStatistic text={contracts.length} units="contracts" />
                <SquareStatistic text={dollars} units="dollars" />
            </View>

            <View style={Styles.contractHistoryTable}>
                {/* Headers */}
                <View style={Styles.row}>
                    <Text style={[Styles.h2, { width: '30%' }]}>Duration</Text>
                    <Text style={[Styles.h2, { width: '25%' }]}>Credits</Text>
                    <Text style={[Styles.h2, { width: '20%' }]}>Price</Text>
                    <Text style={[Styles.h2, { width: '20%' }]}>Rate</Text>
                </View>
                {/* Rows */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        contracts.map((contract: Contract, idx) => {
                            return (
                                <Row
                                    key={idx}
                                    start={contract.start}
                                    end={contract.end}
                                    credits={contract.credits}
                                    price={contract.price}
                                    rate={contract.rate}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ContractHistory;