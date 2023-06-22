import react from "react";
import { View, Text } from "react-native"
import styles from "../title/style"

export default function Title () {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}