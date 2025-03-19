import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    
    container:{
        
    },
    titulo:{
        fontSize: 30,
        borderBottomWidth: 2,
        textAlign: 'center',
    },
    texto1:{
        fontSize: 17,
        marginTop: 10,
    },
    img:{
        height: RFPercentage(10),
        width: RFPercentage (28),
        width: '100%',
        resizeMode: 'contain',
        

    }
});
    export default styles;