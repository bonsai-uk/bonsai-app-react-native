import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Divider.styles';

export default function Divider() {
    return (
        <View style={styles.container} testID="divider">
            <LinearGradient
                style={{ width: 130, height: 2 }}
                colors={['transparent', '#23C686']}
                start={{ x: 0, y: 0 }}
            />
            <Text style={styles.text}>or</Text>
            <LinearGradient
                style={{ width: 130, height: 2 }}
                colors={['#23C686', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />
        </View>
    );
}
