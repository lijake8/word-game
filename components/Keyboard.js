import React from 'react';
import KeyboardRow1 from './KeyboardRow1';
import KeyboardRow2 from './KeyboardRow2';
import KeyboardRow3 from './KeyboardRow3';
import { View, StyleSheet } from "react-native";

function Keyboard() {
  return (
    <View style={styles.container}>
      <KeyboardRow1></KeyboardRow1>
      <KeyboardRow2></KeyboardRow2>
      <KeyboardRow3></KeyboardRow3>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 420,
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default Keyboard;
