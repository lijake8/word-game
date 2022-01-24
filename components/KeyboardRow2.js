import React from 'react';
import KeyboardKey from './KeyboardKey';
import { View, StyleSheet } from "react-native";

function KeyboardRow2() {
  return (
    <View style={styles.row}>
      <KeyboardKey>a</KeyboardKey>
      <KeyboardKey>s</KeyboardKey>
      <KeyboardKey>d</KeyboardKey>
      <KeyboardKey>f</KeyboardKey>
      <KeyboardKey>g</KeyboardKey>
      <KeyboardKey>h</KeyboardKey>
      <KeyboardKey>j</KeyboardKey>
      <KeyboardKey>k</KeyboardKey>
      <KeyboardKey>l</KeyboardKey>
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

export default KeyboardRow2;
