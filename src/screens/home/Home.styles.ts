import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'pink',
        paddingTop: 120
    },
    buttonContainer: {
        borderWidth:2,
        borderColor: 'red'
    },
    button:{
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 3
    },
    logo: {
        height: 150,
        maxWidth: '60%',
        resizeMode: 'contain'
    }
})

export default styles