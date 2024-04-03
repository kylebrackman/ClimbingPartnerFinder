import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { nw } from 'nativewind';
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState("")

  return (
    <SafeAreaView>
      <View >
        <Text>Hello World!</Text>
        <Text>Platform: {Platform.OS == 'ios' ? 'ios' : 'android'} </Text>
        <ScrollView>
          <View style={{ backgroundColor: 'black', height: 1600, padding: 20 }} >
            <TextInput
              defaultValue={text}
              onChangeText={txt =>setText(txt)}
              style={{borderWidth: 1, color:'white', padding: 10, borderColor: 'white'}}
            ></TextInput>
            <Button title='Press Me' onPress={()=> console.log("Hello World")}></Button>
            <TouchableOpacity onPress={()=> console.log("Hello World")}>
              <Text style={{borderWidth: 1, color:'white', padding: 10, borderColor: 'white'}}>Press Me</Text>
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
});
