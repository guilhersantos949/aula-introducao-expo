import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'deepskyblue',
        fontWeight: 'bold',
        color: 'deepskyblue',
        marginTop: RFValue(10),
        marginBottom: RFValue(20),
    },
    botao: {
        alignItems: 'center',
        borderWidth: RFValue(3),
        borderColor: 'deepskyblue',
        borderRadius: RFValue(10),
        padding: RFValue(5),
        marginBottom: RFValue(10),
        width: '80%',
    }  
});

export default styles;