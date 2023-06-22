import react, { useState } from "react";
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Vibration,
    Pressable,
    FlatList} from "react-native"
import ResultImc from '../resultImc';
import styles from "../form/style";

export default function Form () {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [messageTable, setMessageTable] = useState(null)
    const [imcList, setImcList] = useState([])

    function showErrorMessage() {
        if (imc == null) {
            Vibration.vibrate()
            setErrorMessage("Campo Obrigatório")
        }
    }
    
    function imcCalculator () {
        let heightFormat = height.replace(",", ".")
        let imc = ( weight / (heightFormat * heightFormat) ).toFixed(2)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: imc + ' / ' + new Date().toLocaleString()}])
        setImc(imc)

        if (imc < 18.5) {
            return setMessageTable('Abaixo do peso !')
        } else if (imc >= 18.5 && imc <= 24.9) {
            return setMessageTable('Peso normal !')
        } else if (imc >= 25.0 && imc <= 29.9) {
            return setMessageTable('Sobrepeso')
        } else if (imc > 30.0) {
            return setMessageTable('Obesidade')
        }
    }

    function validatorImc () {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu IMC é igual:')
            setTextButton('Calcular Novamente')
            setErrorMessage(null)
            Keyboard.dismiss()
        } else {
            showErrorMessage()
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha o peso !')
            setMessageTable(null)
        }
    }
    
    return (
        <View style={styles.formContext}>
            {imc == null ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Ex 175"
                        keyboardType="numeric"
                        onChangeText={setHeight}
                        value={height}
                    ></TextInput>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input }
                        placeholder="Ex 75,456"
                        keyboardType="numeric"
                        onChangeText={setWeight}
                        value={weight}
                    ></TextInput>
                    <TouchableOpacity
                    style={styles.buttomCalculator} 
                    onPress={() => {
                        validatorImc()
                    }}>
                        <Text style={styles.textButtomCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            :
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} showMessageTable={messageTable} resultImcList={imcList} />
                    <TouchableOpacity
                    style={styles.buttomCalculator} 
                    onPress={() => {
                        validatorImc()
                    }}>
                        <Text style={styles.textButtomCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            Resultado IMC: {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
            />
        </View>
    );
}