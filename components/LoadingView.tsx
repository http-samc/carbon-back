import { ActivityIndicator } from 'react-native';
import React from 'react';
import Styles from '../theme/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoadingView = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <ActivityIndicator />
        </SafeAreaView>
    );
};

export default LoadingView;