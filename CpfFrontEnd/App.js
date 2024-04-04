import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState("")

  return (
    <SafeAreaView style={ s `bg-white pt-5`}>
      <View >
        <Text>Hello World!</Text>
        <Text>Platform: {Platform.OS == 'ios' ? 'ios' : 'android'} </Text>
        <ScrollView>
          <View style={styles.homeScreen} >
            <TextInput
              defaultValue={text}
              onChangeText={txt => setText(txt)}
              style={{ borderWidth: 1, color: 'white', padding: 10, borderColor: 'white' }}
            ></TextInput>
            <Button title='Press Me' onPress={() => console.log("Hello World")}></Button>
            <TouchableOpacity style={styles.btn} onPress={() => console.log("Hello World")}>
              <Text>Press Me</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View >
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreen: {
    backgroundColor: 'black',
    height: 1600,
    padding: 10,
  },
  btn: {
    borderWidth: 1,
    color: 'white',
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'green'
  },
});
