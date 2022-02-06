import { StyleSheet } from 'react-native';
import Colors from './colors';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyboardDismissingView: {
        width: '100%',
        height: '100%',
    },

    // Header styles & utils
    statementText: {
        fontFamily: 'BebasNeueRegular',
        fontSize: 85,
        color: Colors.text,
        marginHorizontal: 20,
    },
    h1: {
        fontFamily: 'MontserratBold',
        color: Colors.secondary,
        fontSize: 38,
    },
    h2: {
        fontFamily: 'MontserratBold',
        color: Colors.secondary,
        fontSize: 20,
    },
    h3: {
        fontFamily: 'MontserratBold',
        color: Colors.text,
        fontSize: 18,
    },
    h4: {
        fontFamily: 'MontserratRegular',
        color: Colors.text,
        fontSize: 16,
    },
    footer: {
        color: Colors.darkGrey,
        fontFamily: 'MontserratRegular',
        fontSize: 14,
        position: 'absolute',
        bottom: 30,
    },
    text: {
        color: Colors.text,
        fontFamily: 'MontserratRegular',
        fontSize: 12,
    },

    // Authenticate.tsx
    authWrapper: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    authLogo: {
        marginBottom: 20,
        marginTop: -30
    },
    authContainer: {
        width: '70%',
        maxWidth: 300,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    authInput: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        width: '75%',
        padding: 10,
        color: Colors.text,
        margin: 5,
    },
    selectUserRoleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    authSubmitContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        width: '75%',
    },
    authSubmitButton: {
        width: 90,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    // PurchaseImpact.tsx
    impactContainer: {
        flex: 1,
    },
    impactButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        width: 280,
        marginVertical: 10,
        alignSelf: 'center',
    },
    impactButton: {
        width: 130,
        borderColor: Colors.secondary,
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    impactButtonText: {
        color: Colors.secondary,
        fontFamily: 'MontserratBold',
        fontSize: 18,
    },

    // ContractHistory.tsx
    contractHistoryStatsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    contractHistoryTable: {
        // flex: 1,
        padding: 10,
        margin: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.text,
        height: '65%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },

    // Purchase.tsx
    purchaseContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
    },
    qtyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        width: 280,
        marginVertical: 10,
        alignSelf: 'center',
    },
    qtyInput: {
        color: Colors.primary,
        fontFamily: 'BebasNeueRegular',
        fontSize: 100,
    },
    purchaseDescription: {
        width: '70%',
        maxWidth: 300,
        fontFamily: 'MontserratRegular',
        textAlign: 'center',
    },
    descImportant: {
        color: Colors.primary,
        fontFamily: 'MontserratBold',
    },
    purchaseTotal: {
        color: Colors.primary,
        fontFamily: 'MontserratBold',
        fontSize: 18,
        marginBottom: 20,
    },
    purchaseButton: {
        position: 'absolute',
        bottom: 10,
        width: 100,
        borderColor: Colors.secondary,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    purchaseButtonText: {
        color: Colors.secondary,
        fontFamily: 'MontserratBold',
        fontSize: 18,
    },

    // CapacityInfo.txt
    capacityInfoContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    requestCapacityBtn: {
        width: 350,
        borderColor: Colors.secondary,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },

    // Sales.tsx
    salesContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    payoutButton: {
        width: 350,
        borderColor: Colors.secondary,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    payoutWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    payoutInput: {
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        width: 350,
        padding: 10,
        color: Colors.text,
        margin: 5,
    },
});

export default Styles;