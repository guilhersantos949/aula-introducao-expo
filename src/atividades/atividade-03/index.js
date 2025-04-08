import { useState } from 'react';
import { View,Text, Button, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade03 () {

    const [num, setNum] = useState(0);

    function handleAtualizaState () {
        setNum(num + 1);
    }
    function handleAtualizaState1 () {
        setNum(num - 1);
    }
    function handleAtualizaState2 () {
        setNum(0);
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

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>

            
            <View style={styles.grupo}> 
            <TouchableOpacity style={styles.add} onPress={handleAtualizaState}>
                <Text style={styles.txtBotao}>Adicionar 1</Text>
            </TouchableOpacity>

            <Text style={styles.numero}>{num}</Text> 

            <TouchableOpacity style={styles.sub} onPress={handleAtualizaState1}>
                <Text style={styles.txtBotao}>diminuit 1</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.botao}>
            <TouchableOpacity onPress={handleAtualizaState2}>
                <Text style={styles.txtBotao}>voltar a 0</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
    export default Atividade03;