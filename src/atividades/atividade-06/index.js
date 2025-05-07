import { View,Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constats from 'expo-constants';
import styles from './styles';

import index from './'

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo - 06</Text>
        </View>
    )
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#eee',
            padding: 8,
        },
        paragraph: {
            margin: 6,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#aaa',
        },
    });

function Exemplo01 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo - 01</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>
        </View>
    )
}}