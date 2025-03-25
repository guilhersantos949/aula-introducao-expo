import { View, Text, Image } from 'react-native';
import styles from './styles';
import img from '../../../assets/img-01.jpg';
import Mensagem from './mensagem';


function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo - 02</Text>


            <Mensagem
                titulo={'ERRO'}
                mensagem={'você não clicou corretamente'}
                Imagem={img}
            />
            <Mensagem
                titulo={'SUCESSO'}
                mensagem={'você clicou corretamente'}
            />
            <Mensagem
                titulo={'AVISO'}
                mensagem={'o tempo acabou'}
            />

        </View>
    )

}
export default Atividade02;