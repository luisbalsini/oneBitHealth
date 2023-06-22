import react from "react";
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from './style'

export default function ResultImc (props) {

    let imcListText = '';
    const onShare = async () => {
        for (let ob of props.resultImcList) {
            imcListText += ob.imc + ' ? '
        }
        const result = await Share.share({
            message: "Meu IMC hoje é: " + imcListText
        })
    }

    return (
        <View style={styles.contextImc}>
            <View style={styles.boxShareButtom}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>
                <Text style={styles.messageTable}>{props.showMessageTable}</Text>
                <TouchableOpacity style={styles.shared} onPress={onShare}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}