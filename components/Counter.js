// components/Counter.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={onIncrement} />
        <Button title="Decrement" onPress={onDecrement} />
        <Button title="Reset" onPress={onReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
});

export default Counter;
