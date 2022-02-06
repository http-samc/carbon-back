import { ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

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

var credits = 0;
var dollars = 0;

const ContractHistory = () => {
    const [loading, setLoading] = useState(true);
    const [contracts, setContracts] = useState<Contract[]>([]);

    const getContracts = async () => {
        // TODO: Get contracts from API
        setContracts([
            {
                start: 1598420000000,
                end: 1698420000000,
                credits: 100,
                price: 100,
                rate: 1,
            },
            {
                start: 1528420000000,
                end: 1698430000000,
                credits: 200,
                price: 100,
                rate: 2,
            }
        ]);
        contracts.forEach(contract => {
            credits += contract.credits;
            dollars += contract.price;
        });
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