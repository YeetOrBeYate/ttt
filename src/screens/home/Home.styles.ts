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
        borderRadius: 10,
    },
    logo: {
        height: 150,
        maxWidth: '60%',
        resizeMode: 'contain'
    }
})

export default styles