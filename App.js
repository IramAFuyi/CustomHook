// App.js
import React from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import DetailComponent from './components/DetailComponent';
import Counter from './components/Counter';
import useCounter from './hooks/useCounter'; // Importa el custom hook del contador

export default function App() {
  const [detailId, setDetailId] = React.useState(null);
  const { count, increment, decrement, reset } = useCounter(0); // Usa el custom hook del contador

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="Enter Detail ID"
        keyboardType="numeric"
        onChangeText={(text) => setDetailId(Number(text))}
      />
      <Button
        title="Fetch Detail"
        onPress={() => {}}
      />
      {detailId && <DetailComponent detailId={detailId} />}
       */}
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
});
