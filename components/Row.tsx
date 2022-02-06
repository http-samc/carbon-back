import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Styles from '../theme/styles';
import Colors from '../theme/colors';

interface Props {
    start: number,
    end: number,
    credits: number,
    price: number,
    rate: number,
}

const Row = (props: Props) => {

    const getDate = (timestamp: number): string => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().substring(0, 2);
        return `${month}/${day}/${year}`;
    }

    return (
        <View style={Styles.row}>
            <Text style={[Styles.text, { width: '30%' }]}>{getDate(props.start)}-{getDate(props.end)}</Text>
            <Text style={[Styles.text, { width: '25%' }]}>{props.credits} CC</Text>
            <Text style={[Styles.text, { width: '20%' }]}>${props.price}</Text>
            <Text style={[Styles.text, { width: '20%' }]}>{props.rate} CC/$</Text>
        </View>
    );
};

export default Row;