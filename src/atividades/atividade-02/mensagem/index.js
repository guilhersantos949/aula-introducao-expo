import { View,Text,Image } from 'react-native';
import styles from './styles';


function Mensagem ({titulo, img, children, valor}) {
    return(
        <View style={styles.container}>
            <View>
                <Image source={img} style={styles.img}/>
            </View>
            <View style={styles.containerTxt}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.texto}>{children}</Text>
                <Text style={styles.titulo}>{`R$ ${valor}`}</Text>
            </View>
        </View>
    )
    
}
    export default Mensagem;