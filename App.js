import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';


export default function App() {
  return (
    <View style={styles.container}>
      <Grid></Grid>
      <Keyboard></Keyboard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
