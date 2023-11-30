import { Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../styles';
import { styles } from './SolidButton.styles';

type ButtonProps = {
    title: string;
};

export default function SolidButton({ title }: ButtonProps) {
    return (
        <Pressable
            style={[styles.button, GlobalStyles.shadow, GlobalStyles.bevel]}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}
