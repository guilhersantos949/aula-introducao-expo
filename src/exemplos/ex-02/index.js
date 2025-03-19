import { View,Text, Image } from 'react-native';
import styles from './styles';
import img from '../../../assets/002-1-react-native.png'
import Mensagem from './mensagem';


function Exemplo02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo - 02</Text>
            <Image source={img} style={styles.img}/>
            
            <Mensagem titulo={'ERRO'} mensagem={'você não clicou corretamente'}/>
            <Mensagem titulo={'SUCESSO'} mensagem={'você clicou corretamente'}/>
            <Mensagem titulo={'AVISO'} mensagem={'o tempo acabou'}/>
        
        </View>
    )
    
}
    export default Exemplo02;