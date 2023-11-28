import { Image, Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../styles';
import { styles } from './AppleSignIn.styles';

export default function AppleSignIn() {
    return (
        <Pressable
            style={[styles.button, GlobalStyles.shadow, GlobalStyles.bevel]}>
            <Image
                source={require('../../assets/Icons/Apple.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Sign up with Apple</Text>
        </Pressable>
    );
}
