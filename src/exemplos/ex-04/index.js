import {View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'

import {useState} from 'react';

import styles from './styles';



function Exemplo4(){

    const [txtInserido, setTxtInserido] = useState('');
    const [txtExibir, setTxtExibir] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.título}>Exemplo 4</Text>
            <Text style={styles.texto}>{txtInserido}</Text>
            <TextInput
             style={styles.input}
             onChangeText={(valor) => setTxtInserido(valor)}/>
            
            <Text style={styles.titulo}>
                Exemplo envio dados click do botão
            </Text>
            <Text styles={styles.texto}>{txtExibir}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => setTxtExibir(txtInserido)}>
                <Text style={styles.txtBotao}>
                    Exibir texto digitado
                </Text>
            </TouchableOpacity>
        </View>
    );

}

export default Exemplo4;