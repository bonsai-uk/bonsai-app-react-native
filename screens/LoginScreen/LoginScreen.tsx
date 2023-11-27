import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Title from '../../components/Title/Title';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Title subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FBFCF6',
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },
});
