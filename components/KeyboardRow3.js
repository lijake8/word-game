import React from 'react';
import KeyboardKey from './KeyboardKey';
import SpecialKey from './SpecialKey';
import { View, StyleSheet } from "react-native";

function KeyboardRow3() {
  return (
    <View style={styles.row}>
      <SpecialKey>delete</SpecialKey>
      <KeyboardKey>z</KeyboardKey>
      <KeyboardKey>x</KeyboardKey>
      <KeyboardKey>c</KeyboardKey>
      <KeyboardKey>v</KeyboardKey>
      <KeyboardKey>b</KeyboardKey>
      <KeyboardKey>n</KeyboardKey>
      <KeyboardKey>m</KeyboardKey>
      <SpecialKey>enter</SpecialKey>
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

export default KeyboardRow3;
