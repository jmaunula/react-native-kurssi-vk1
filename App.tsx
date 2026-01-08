import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  // const [lowerLimit, setLowerLimit] = useState<number>(0)
  const ageAsNumber: number = Number(age) || 0
  const lowerLimit: number = (220-ageAsNumber) * 0.65
  const upperLimit: number = (220-ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput 
      keyboardType='number-pad'
      value={age}
      style={styles.input}
      onChangeText={setAge}

      />
      <Text>Lower Limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper Limit: {upperLimit.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    padding: 8
  },
  header: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 5,
    width: 100,
    marginBottom: 16
  },
  text: {
    marginBottom: 8
  }
});
