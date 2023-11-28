import { Image, Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../styles';
import { styles } from './GoogleSignIn.styles';

export default function GoogleSignIn() {
    return (
        <Pressable
            style={[styles.button, GlobalStyles.shadow, GlobalStyles.bevel]}>
            <Image
                source={require('../../assets/Icons/Google.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Sign up with Google</Text>
        </Pressable>
    );
}
