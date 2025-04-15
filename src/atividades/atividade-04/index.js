import {View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'

import {useState} from 'react';

import styles from './styles';



function Atividade04(){

        
    const [txtInserido, setTxtInserido] = useState('');
    const [txtExibir, setTxtExibir] = useState('');
    const [txtExibir1, setTxtExibir1] = useState('');
    function mostrarTexto(){
        setTxtExibir(setTxtExibir);
        setTxtExibir1(setTxtExibir1);
    }
    function mostrartexto1(){
        setTxtExibir1(txtExibir);
        setTxtExibir(txtExibir1)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.título}>Exemplo 4</Text>
            <Text style={styles.texto}>{txtInserido}</Text>
            <Text>Nome</Text>
            <TextInput
             style={styles.input}
             onChangeText={(valor) => setTxtInserido(valor)}/>
             <Text>Sobrenome</Text>
             <TextInput
             style={styles.input}
             onChangeText={(valor) => setTxtInserido(valor)}/>
            
            <Text style={styles.titulo}>
                Exemplo envio dados click do botão
            </Text>
            <Text styles={styles.texto}>{mostrartexto1}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => setTxtExibir(txtInserido)}>
                <Text style={styles.txtBotao}>
                    Exibir texto digitado
                </Text>
            </TouchableOpacity>
        </View>
    );

}

export default Atividade04;