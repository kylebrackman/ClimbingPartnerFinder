import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { nw } from 'nativewind';

export default function App() {
  return (
    <SafeAreaView>
      <View >
        <Text>Hello World!</Text>
        <Text>Platform: {Platform.OS == 'ios' ? 'ios' : 'android'} </Text>
        <ScrollView>
          <View style={{ backgroundColor: 'black', height: 1600 }} >
            <Text style={{ color: 'white', }} > Hello World</Text>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
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
