import React from 'react';
import { View, StyleSheet } from "react-native";
import Row from "./Row"

function Grid() {
  return (
    <View style={styles.container}>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </View>
  );
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

export default Grid;
