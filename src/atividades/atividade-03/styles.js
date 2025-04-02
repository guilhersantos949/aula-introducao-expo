import { Button, StyleSheet } from "react-native";
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
    texto:{
        fontSize: RFPercentage(2.2),
        color: 'deepskyblue',
    },
    butaoAlerta:{
        width: '100%',
        margin: RFPercentage(1),
    },
    butaoTransparencia:{
        backgroundColor: 'deepskyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        color: 'white',
        width: '70%',
        height: 50,
        
    },
    textoButao:{
        color: 'white',
        fontSize: RFPercentage(2),
    },
});
    export default styles;