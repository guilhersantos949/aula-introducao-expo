import { View,Text, Button } from 'react-native';
import styles from './styles';

function Exemplo03 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis js state</Text>
            <Button
            onPress={() => {}}
            title="Learn More"
            color="deepskyblue"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
            />
            
        </View>
    )
    
}
    export default Exemplo03;