import {View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'

import {useState} from 'react';

import styles from './styles';



function Exemplo4(){

    const [txtInserido, setTxtInserido] = useState('');
    const [txtInserido2, setTxtInserido2] = useState('');
    const [txtExibir, setTxtExibir] = useState('');
    

    return(
        <View style={styles.container}>
            <Text style={styles.título}>Exemplo 4</Text>
            <Text style={styles.texto}>{txtInserido +' ' +txtInserido2}</Text>
            <TextInput
             style={styles.input}
             onChangeText={(valor) => setTxtInserido(valor)}
             value={txtInserido}/>
             <TextInput
             style={styles.input}
             onChangeText={(valor) => setTxtInserido2(valor)}
             value={txtInserido2}
             />
            
            <Text style={styles.titulo}>
                Exemplo envio dados click do botão
            </Text>
            <Text styles={styles.texto}>{txtExibir}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => 
            {
                setTxtExibir(txtInserido +' '+ txtInserido2);
                setTxtInserido('');
                setTxtInserido2('');
            }
                }>
                <Text style={styles.txtBotao}>
                    Exibir texto digitado
                </Text>
            </TouchableOpacity>
        </View>
    );

}

export default Exemplo4;