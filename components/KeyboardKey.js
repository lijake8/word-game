import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function KeyboardKey(props) {
  return (
    <View style={styles.key}>
      <Text style={styles.letter}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  key: {
    paddingBottom: 10,
    paddingTop: 10,
    margin: 1,
    marginTop: 3,
    marginBottom: 3,
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
  },
  letter: {
    textTransform: 'capitalize',
  }
});

export default KeyboardKey;
