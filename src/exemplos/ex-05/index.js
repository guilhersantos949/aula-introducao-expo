import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Exemplo05() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(0);

    const calcular = () => {
        setTotal(parseFloat(num1) + parseFloat(num2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo - 05</Text>
            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.txtLabel}>1° número</Text>
            <TextInput
                style={styles.txtEntrada}
                keyboardType="numeric"
                value={String(num1)}
                onChangeText={(valor) => setNum1(valor)}
            />

            <Text style={styles.txtSaida}>+</Text>

            <Text style={styles.txtLabel}>2° número</Text>
            <TextInput
                style={styles.txtEntrada}
                keyboardType="numeric"
                value={String(num2)}
                onChangeText={(valor) => setNum2(valor)}
            />

            <Text style={styles.txtSaida}>=</Text>

            <Text style={styles.txtLabel}>Resultado</Text>
            <Text style={styles.txtSaida}>{total}</Text>

            <TouchableOpacity style={styles.btnCalcular} onPress={calcular}>
                <Text style={styles.txtBotao}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo05;