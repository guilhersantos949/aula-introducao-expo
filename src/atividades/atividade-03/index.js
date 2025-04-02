import { View,Text, Button, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade03 () {

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
        <View style={styles.butaoAlerta}>
            <Button 
            onPress={handleExibeMensagem}
            title="Learn More"
            color="deepskyblue"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>

        <View>
        <Text>

            <TouchableOpacity style={styles.butaoTransparencia}>
                <Text style={styles.textoButao}>Adicionar +1</Text>
            </TouchableOpacity>
        </Text>
        </View>
        </View>
    )
    
}
    export default Atividade03
;