import { TextInput, View } from 'react-native';
import { GlobalStyles } from '../../styles';
import { SimpleLineIcons } from '@expo/vector-icons';
import { styles } from './Input.styles';

type InputProps = {
    placeholder: string;
    iconName?: keyof typeof SimpleLineIcons.glyphMap;
    secureTextEntry?: true;
};

export default function Input({
    placeholder,
    secureTextEntry,
    iconName,
}: InputProps) {
    return (
        <View
            testID="input-component"
            style={[
                styles.container,
                GlobalStyles.shadow,
                GlobalStyles.bevel,
                GlobalStyles.greenOutline,
            ]}>
            {iconName && (
                <SimpleLineIcons name={iconName} size={24} color="#23C686" />
            )}
            <TextInput
                autoCapitalize="none"
                style={styles.text}
                placeholder={placeholder}
                placeholderTextColor="#126444"
                secureTextEntry={secureTextEntry}
                spellCheck={false}
            />
        </View>
    );
}
