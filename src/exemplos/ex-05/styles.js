import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
    },
    titulo:{
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    txtSaida:{
        margin: 6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E91E63'   
    },
    txtEntrada:{
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#E91E63',
        height: 60,
        width: '100%',
        color: '#E53935',
        borderRadius: 10,
        marginTop: 10, 
    },
    button:{
        backgroundColor: '#E91E63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    btnCalcular:{
        backgroundColor: '#FF80AB',
        width: '70%',
        height: 40,
        fontSize: 22,
        color: '#FF80AB',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    txtLabel:{
        fontSize: 16,
        color: '#C51162',
        fontWeight: 'bold',
    },
});
    export default styles;