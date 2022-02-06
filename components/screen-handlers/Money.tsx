import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import Sales from '../../screens/Sales';
import Purchase from '../../screens/Purchase';
import LoadingView from '../LoadingView';

const Money = () => {
    const [redirect, setRedirect] = useState('');

    const getAppropriateScreen = async () => {
        let res = await SecureStore.getItemAsync('user-type');
        setRedirect(res == null ? '' : res);
    }

    useEffect(() => { getAppropriateScreen() }, [redirect]);

    if (redirect == 'buyer') {
        return (
            <Purchase />
        )
    }

    else if (redirect == 'seller') {
        return (
            <Sales />
        )
    }

    else {
        return (
            <LoadingView />
        )
    }

};

export default Money;