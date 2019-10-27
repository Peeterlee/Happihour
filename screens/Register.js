import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity, Image}  from 'react-native';
import styles from '../styles/ScreenStyles/RegisterStyles';
import RegisterForm from '../comps/RegisterForm';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function Register(){
    return(
        <ImageBackground
            source={require('../imgs/bg2.png')}
            style={styles.background}
        >
        <Image 
            style={styles.header}
            source={require('../imgs/Flow_Header.png')}
        />
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo} 
                source={require('../imgs/Happihour_Logo.png')}
            />
        </View>
            <RegisterForm />
            <TouchableOpacity
                onPress={()=>{}}
            >
            <View style={styles.returnContainer}>
                <Text style={styles.returnText}>RETURN TO LOGIN</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backBut}>
                <FontAwesomeIcon icon="arrow-left" size={28} color={"black"} />
            </TouchableOpacity>

        </ImageBackground>
    )
}

export default Register;