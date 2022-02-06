import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../theme/colors';

interface Props {
    text: any;
    units: string;
    size?: number;
}

const SquareStatistic = (props: Props) => {
    return (
        <View style={[styles.container, props.size ? { width: props.size, height: props.size } : {}]}>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.units}>{props.units}</Text>
        </View>
    );
};

export default SquareStatistic;

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.primary,
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 120,
        height: 120,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'MontserratBold',
        color: Colors.primary,
    },
    units: {
        fontSize: 14,
        fontFamily: 'MontserratRegular',
        color: Colors.primaryVariant,
    }
});
