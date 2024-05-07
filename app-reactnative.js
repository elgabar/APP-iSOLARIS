// App.js
import React from 'react';
import CalculatorForm from './CalculatorForm';
import { View, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <CalculatorForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
