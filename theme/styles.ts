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
        backgroundColor: '#000',
    },

    // Header styles & utils
    h2: {
        fontFamily: 'MontserratBold',
        color: Colors.secondary,
        fontSize: 24,
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
        fontSize: 12,
        position: 'absolute',
        bottom: 30,
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
        // backgroundColor: '#121212',
    },
    authInput: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        width: '75%',
        padding: 10,
        color: Colors.text,
        margin: 5,
        // backgroundColor: '#000'
    },
    selectUserRoleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    authSubmitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    authSubmitButton: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default Styles;