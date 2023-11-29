import {
    AppleSignIn,
    Divider,
    GoogleSignIn,
    Input,
    NewAccount,
    SolidButton,
    Title,
} from '../../components';
import { Platform, SafeAreaView, View } from 'react-native';
import { styles } from './LoginScreen.styles';

export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Title subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
                <View style={styles.inputContainers}>
                    <Input placeholder="Email" iconName="envelope" />
                    <Input
                        placeholder="Password"
                        iconName="lock"
                        secureTextEntry
                    />
                    <SolidButton title="Login" />
                    <Divider />
                    {Platform.OS === 'ios' && <AppleSignIn />}
                    <GoogleSignIn />
                </View>
                <NewAccount />
            </View>
        </SafeAreaView>
    );
}
