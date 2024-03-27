import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello World!</Text>
      <Text>Platform: { Platform.OS == 'ios' ? 'ios' : 'android' } </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
