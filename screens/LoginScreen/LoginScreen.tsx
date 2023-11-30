import {
    Divider,
    Input,
    NewAccount,
    SolidButton,
    ThirdPartySignIn,
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
                    <Input
                        placeholder="Email"
                        iconName="envelope"
                        iconSource="SimpleLineIcons"
                    />
                    <Input
                        placeholder="Password"
                        iconName="lock"
                        iconSource="SimpleLineIcons"
                        secureTextEntry
                    />
                    <SolidButton title="Login" />
                    <Divider />
                    {Platform.OS === 'ios' && (
                        <ThirdPartySignIn thirdParty="Apple" />
                    )}
                    <ThirdPartySignIn thirdParty="Google" />
                </View>
                <NewAccount />
            </View>
        </SafeAreaView>
    );
}
