import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'deepskyblue',
        borderWidth: RFPercentage (0.6),
        width: '90%',
        padding: 8,
        alignItems: 'center',
        borderRadius: 20,
    },
    titulo:{
        fontSize: RFPercentage(3),
        color: '#000',
        fontWeight: 'bold',
        

        textAlign: 'center',
        textAlignVertical: 'center',

    },
    texto:{
        fontSize: RFPercentage(2.2),
        color: 'white',
    },
    Card:{

    },
});
    export default styles;