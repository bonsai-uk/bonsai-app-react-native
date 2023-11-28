import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },

    bevel: {
        borderWidth: 2,
        borderRadius: 26,
        borderColor: 'transparent',
    },

    greenOutline: {
        borderColor: '#23C686',
    },
});
