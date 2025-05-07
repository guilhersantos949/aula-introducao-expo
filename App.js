import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



import Constants from 'expo-constants';
import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';
import Exemplo03 from './src/exemplos/ex-03';
import Exemplo04 from './src/exemplos/ex-04';
import Exemplo05 from './src/exemplos/ex-05';
import Exemplo06 from './src/exemplos/ex-06';

import Atividade01 from './src/atividades/atividade-01';
import Atividade02 from './src/atividades/atividade-02';
import Atividade03 from './src/atividades/atividade-03';
import Atividade04 from './src/atividades/atividade-04';
import Atividade05 from './src/atividades/atividade-05';



export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo06/>
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
