import { View,Text } from 'react-native';
import styles from './styles';
import { Children } from 'react';

function Mensagem (props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.texto}>{props.mensagem}</Text>
        </View>
    )
    
}
    export default Mensagem;