import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FBFCF6',
        flex: 1,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 38,
        paddingTop: Platform.OS === 'android' ? 48 : 0,
    },

    inputContainers: {
        marginTop: 32,
        width: '80%',
        gap: 12,
    },
});
