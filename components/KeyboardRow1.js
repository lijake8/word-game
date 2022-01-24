import React from 'react';
import KeyboardKey from './KeyboardKey';
import { View, StyleSheet } from "react-native";

function KeyboardRow1() {
  return (
    <View style={styles.row}>
      <KeyboardKey>q</KeyboardKey>
      <KeyboardKey>w</KeyboardKey>
      <KeyboardKey>e</KeyboardKey>
      <KeyboardKey>r</KeyboardKey>
      <KeyboardKey>t</KeyboardKey>
      <KeyboardKey>y</KeyboardKey>
      <KeyboardKey>u</KeyboardKey>
      <KeyboardKey>i</KeyboardKey>
      <KeyboardKey>o</KeyboardKey>
      <KeyboardKey>p</KeyboardKey>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
  },
});

export default KeyboardRow1;
