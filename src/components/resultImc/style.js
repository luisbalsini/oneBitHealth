import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    contextImc: {
        flex: 1,
        borderRadius: 50,
        alignItems: "center",
        width: "100%"
    },
    numberImc: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold"
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold"
    },
    boxShareButtom: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    shared: {
        backgroundColor: "#1877F2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5
    },
    sharedText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        paddingHorizontal: 30
    },
    messageTable: {
        fontSize: 14,
        color: "red",
        marginBottom: 10
    }
});

export default styles