import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



import Constants from 'expo-constants';
import Exemplo01 from './src/exemplos/ex-01';

import Atividade1 from './src/atividades/atividade1';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    padding: Constants.statusBarHeight || 8,
    padding: 8,
  }

});
