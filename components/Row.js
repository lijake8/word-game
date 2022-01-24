import React from 'react';
import { View, StyleSheet } from "react-native";
import Tile from "./Tile"

function Row() {
  return (
    <View style={styles.row}>
      <Tile>w</Tile>
      <Tile>a</Tile>
      <Tile>t</Tile>
      <Tile>e</Tile>
      <Tile>r</Tile>
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

export default Row;
