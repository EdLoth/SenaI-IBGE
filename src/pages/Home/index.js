import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Picker, Image } from 'react-native';
import Style from './style';
import SearchController from '../../Controller/SearchController';


export default function Home({ navigation }) {

    const [welcome, setWelcome] = useState('');
    
    const [name, setName] = useState('');
    const [year, setYear] = useState(0);


    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.body}>
                
                <Text style={Style.textHeader}>{welcome}</Text>

            <TextInput placeholder='Digite seu nome' onChangeText={(name) => { setName(name); }} placeholderTextColor='#000' style={Style.input} />

            <TextInput keyboardType='numeric' placeholder='Ano de nascimento:' onChangeText={(year) => { setYear(year); }} placeholderTextColor='#000' style={Style.input} />

            <TouchableOpacity style={Style.button} onPress={() => { SearchController(name, year, navigation); }}>
            
            <Text style={Style.buttonText}>Exibir</Text>

            </TouchableOpacity>
            </View>
            <View><br/><br/><br/></View>
        </KeyboardAvoidingView>
        
        
    );
}