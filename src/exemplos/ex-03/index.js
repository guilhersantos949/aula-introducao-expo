import { View,Text, Button, alert } from 'react-native';
import styles from './styles';

function Exemplo03 () {

    function handleExibeMensagem () {
        Alert.alert('Teste')
    }

    const handleOutroJeitoFuncao = () => {
        Alert.alert('Título', 'Texto mensagem', [
            {
              text: 'Meu texto',
              onPress: () => Alert.alert('Tchau'),
              style: 'default',
            },
          ])
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis js state</Text>
            <Button 
            onPress={handleExibeMensagem}
            title="Learn More"
            color="deepskyblue"
            accessibilityLabel="Learn more about this purple button"
            />
            
        </View>
    )
    
}
    export default Exemplo03;