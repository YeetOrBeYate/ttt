import { StyleSheet } from "react-native";


const styles = (props?: any) => StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cell:{
        borderColor: 'white',
        borderWidth: 2,
        width: '33.33%',
        height: '33.33%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellText:{
        fontSize: props
    }
})

export default styles