import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f5',
        alignItems: 'center',
    },

    textHeader: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: '15%'
    },

    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    input: {
        color: '#000',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        width: '45%',
        height: '7%'
    },
    
    buttonText: {
       color: '#fff',
       textTransform: 'uppercase',
       fontWeight: 'bold' 
    },

    button: {
        backgroundColor: '#000',
        marginTop: '5%',
        width: '30%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});

export default Style;