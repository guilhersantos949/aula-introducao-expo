import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
    },
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'deepskyblue', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 
    numero: {
        fontSize: RFPercentage(4), 
        color: 'coral',
        margin: RFPercentage(2)
    }, 
    botao: {
        backgroundColor: 'deepskyblue', 
        width: '70%', 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
    },
    add: {
        backgroundColor: 'deepskyblue', 
        width: '25%', 
        borderRadius: RFPercentage(1), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
    },
    sub: {
    
        backgroundColor: 'deepskyblue', 
        width: '25%', 
        borderRadius: RFPercentage(1), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
    },
    grupo: {
        display: 'flex',
        flexDirection: 'row',
    },
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
});

export default styles;

