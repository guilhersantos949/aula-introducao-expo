import { View, Text, Image } from 'react-native';
import styles from './styles';
import Mensagem from './mensagem';
import img1 from '../../../assets/Apple iPhone 16 Pro Max.jpg';
import img2 from '../../../assets/Samsung Galaxy S21 Ultra.jpg';
import img3 from '../../../assets/Motorola Moto G60.jpg';
import img4 from '../../../assets/Apple iPhone 14 Pro Max.jpg';



function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade02</Text>
            <Mensagem titulo={'Apple iPhone 16 Pro Max'} img={img1} valor={'8.896'}>Apple iPhone 16 Pro Max 256 GB – Titânio preto</Mensagem>
            <Mensagem titulo={'Samsung Galaxy S21 Ultra'} img={img2} valor={'5.999'}>Samsung Galaxy S21 Ultra 5G 256GB</Mensagem>
            <Mensagem titulo={'Motorola Moto G60'} img={img3} valor={'1.999'}>Motorola Moto G60 128GB</Mensagem>
            <Mensagem titulo={'Apple iPhone 14 Pro Max'} img={img4} valor={'9.599'}>Apple iPhone 14 Pro Max 1TB – Prateado</Mensagem>
        </View>
    )

}
export default Atividade02;