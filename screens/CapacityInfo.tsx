import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CircularProgress from '../components/CircularProgress';
import Colors from '../theme/colors';
import Styles from '../theme/styles';
import * as linking from 'expo-linking';
import LoadingView from '../components/LoadingView';

interface Response {
    usage: number;
    capacity: number;
}

const CapacityInfo = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Response>({ usage: 0, capacity: 0 });

    const getData = async () => {
        // TODO: Get data from API
        setData({
            usage: 100,
            capacity: 1000,
        });
        setLoading(false);
    }

    const getDate = (timestamp: number): string => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString();
        return `${month}/${day}/${year}`;
    }

    const requestCapacity = async () => {
        try {
            linking.openURL('mailto:capacity@carbonback.com?subject=Capacity%20Request').catch(() => { return; });
        }
        catch (e) {
            return;
        }
    }

    useEffect(() => { getData() }, [loading])

    if (loading) {
        return (
            <LoadingView />
        )
    }

    return (
        <SafeAreaView style={Styles.capacityInfoContainer}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={[Styles.h1, { marginBottom: 5 }]}>Capacity Report</Text>
                <Text style={[Styles.h3, { marginBottom: 20 }]}>as of {getDate(Date.now())}</Text>
            </View>
            <View>
                <CircularProgress
                    percent={Math.round(data.usage / data.capacity * 100)}
                    textFontColor={Colors.primary}
                    textFontSize={40}
                    textFontWeight={'bold'}
                    ringColor={Colors.primary}
                    ringBgColor={Colors.primaryVariant}
                />
                <Text style={[Styles.h3, { marginTop: 20 }]}>{data.usage}/{data.capacity} Credits Sold</Text>
            </View>
            <TouchableOpacity
                style={Styles.requestCapacityBtn}
                onPress={requestCapacity}
            >
                <Text style={Styles.h2}>Request Additional Capacity</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CapacityInfo;