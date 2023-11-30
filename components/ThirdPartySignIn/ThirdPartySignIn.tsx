import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../styles';
import { styles } from './ThirdPartySignIn.styles';

type ThirdParties = 'Google' | 'Apple';

const ThirdPartyLogos: Record<ThirdParties, NodeRequire> = {
    Apple: require('../../assets/Icons/Apple.png'),
    Google: require('../../assets/Icons/Google.png'),
};

export default function ThirdPartySignIn({
    thirdParty,
}: {
    thirdParty: ThirdParties;
}) {
    return (
        <Pressable
            style={[
                styles.button,
                styles[`${thirdParty}BrandGuidelines`],
                GlobalStyles.shadow,
                GlobalStyles.bevel,
            ]}>
            <Image
                source={ThirdPartyLogos[thirdParty] as ImageSourcePropType}
                style={styles.logo}
            />
            <Text
                style={[
                    styles.text,
                    styles[`${thirdParty}BrandGuidelinesText`],
                ]}>
                Sign up with {thirdParty}
            </Text>
        </Pressable>
    );
}
