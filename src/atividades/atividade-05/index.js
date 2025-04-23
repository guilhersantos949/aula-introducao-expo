import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade05() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(0);

    const Somar = () => {
        setTotal(parseFloat(num1) + parseFloat(num2));
        setNum1(0);
        setNum2(0);
    };
    const Subtrair = () => {
        setTotal(parseFloat(num1) - parseFloat(num2));
        setNum1(0);
        setNum2(0);
    }
    const Multiplicar = () => {
        setTotal(parseFloat(num1) * parseFloat(num2));
        setNum1(0);
        setNum2(0);
    }
    const Dividir = () => {
        setTotal(parseFloat(num1) / parseFloat(num2));
        setNum1(0);
        setNum2(0);
    }
    const Limpar = () => {
        setNum1(0);
        setNum2(0);
        setTotal(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo - 05</Text>
            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.txtLabel}>1° número</Text>
            <TextInput
                style={styles.txtEntrada}
                keyboardType="numeric"
                value={num1.toString()}
                onChangeText={(valor) => setNum1(valor)}
            />

            <Text style={styles.txtSaida}>+</Text>

            <Text style={styles.txtLabel}>2° número</Text>
            <TextInput
                style={styles.txtEntrada}
                keyboardType="numeric"
                value={num2.toString()}
                onChangeText={(valor) => setNum2(valor)}
            />

            <Text style={styles.txtSaida}>=</Text>

            <Text style={styles.txtLabel}>Resultado</Text>
            <TextInput
                style={styles.txtSaida}
                editable={false}
                value={total.toString()}></TextInput>

            <TouchableOpacity style={styles.btnCalcular} onPress={Somar}> 
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubtrair} onPress={Subtrair}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCalcular} onPress={Multiplicar}>
                <Text style={styles.txtBotao}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCalcular} onPress={Dividir}>
                <Text style={styles.txtBotao}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLimpar} onPress={Limpar}>
                <Text style={styles.txtBotao}>limpar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade05;