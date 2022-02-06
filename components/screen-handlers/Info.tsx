import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import PurchaseImpact from '../../screens/PurchaseImpact';
import CapacityInfo from '../../screens/CapacityInfo';
import LoadingView from '../LoadingView';

const Info = () => {
    const [redirect, setRedirect] = useState('');

    const getAppropriateScreen = async () => {
        let res = await SecureStore.getItemAsync('user-type');
        setRedirect(res == null ? '' : res);
    }

    useEffect(() => { getAppropriateScreen() }, [redirect]);

    if (redirect == 'buyer') {
        return (
            <PurchaseImpact />
        )
    }

    else if (redirect == 'seller') {
        return (
            <CapacityInfo />
        )
    }

    else {
        return (
            <LoadingView />
        )
    }

};

export default Info;