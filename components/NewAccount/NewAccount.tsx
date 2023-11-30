import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { styles } from './NewAccount.styles';

export default function NewAccount() {
    return (
        <View style={styles.newSignIn}>
            <Text style={styles.newSignInBody}>
                Don&apos;t have an account?
            </Text>
            <Pressable>
                <Text style={styles.newSignInCtx}>Create one here</Text>
            </Pressable>
        </View>
    );
}
