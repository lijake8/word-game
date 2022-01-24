import React from 'react';
import { View, Text, StyleSheet } from "react-native";

function Tile(props) {
  return (
    <View style={styles.tile}>
      <Text style={styles.letter}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    paddingBottom: 12,
    paddingTop: 12,
    margin: 5,
    width: '17%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
  },
  letter: {
    textTransform: 'capitalize',
  }
});

export default Tile;
