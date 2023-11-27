import { Image, Text, View } from 'react-native';
import { styles } from './Title.styles';

export default function Title({ subheading }: { subheading?: string }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/bonsaiLight.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bonsai.</Text>
      <Text style={styles.subheading}> {subheading}</Text>
    </View>
  );
}
