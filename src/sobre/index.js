import { View,Text, ImageBackground } from 'react-native';
import styles from './styles';

import Image from '../../assets/react.png';

function sobre () {
    return(
        <View style={styles.container}>
            <ImageBackground
                source={Image}
                resizeMode='contain'
                imageStyle={{opacity: 0.5}}
                styles={styles.image}
            >
            <Text style={styles.titulo}>Sobre:</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>
            <Text style={styles.texto}>Aula Exemplos de react-native com Expo</Text>
            </ImageBackground>
        </View>
    )
    
}
    export default sobre;