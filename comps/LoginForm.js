import React,{useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text, AsyncStorage, KeyboardAvoidingView, Alert} from 'react-native';
import styles from '../styles/CompStyles/LoginFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function LoginForm(){

    const [username, Setusername] = useState('');
    const [userpassword, Setuserpassword] = useState('');

    // var CheckUserInfo=()=>{
    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    //     if(username == ''){
    //         Alert.alert('Please enter your username');
    //     }else if(reg.test(username)){
    //         Alert.alert('Username is not correct');
    //     }else if(userpassword == ''){
    //         Alert.alert('Please enter your password');
    //     }else{ 
    //         fetch('http://142.232.149.175/Happihour/Login.php',{
    //             method:'POST',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 username: username,
    //                 password: userpassword
    //             })
    //         }).then((response) => response.json())
    //         .then((responseJson)=>{
    //             if(responseJson == 'ok'){
    //                 Alert.alert('welcome!');
    //             }else{
    //                 Alert.alert(responseJson);
    //             }
    //         }).catch((error) => {
    //             console.error(error);
    //         })
    //         }
    // }


    return(
        <KeyboardAvoidingView 
            style={styles.wrapcontainer}
            behavior="height"
        >
            <View style={{marginBottom:70}}>
            <View style={styles.inputContainer}>
            <FontAwesomeIcon icon="user" size={28} color={"white"} style={styles.inputIcon} />
            <TextInput
                style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                placeholder="Username"
                onChangeText={(text)=>{Setusername(text)}}
                underlineColorAndroid = "transparent"
                placeholderTextColor="rgba(255,255,255,0.4)"
            />
            </View>
            <View style={styles.inputContainer}>
            <FontAwesomeIcon icon="lock" size={28} color={"#f4e664"} style={styles.inputIcon} />
            <TextInput
                style={[styles.input,{borderBottomColor:"#f4e664"}]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text)=>{Setuserpassword(text)}}
                underlineColorAndroid = "transparent"
                placeholderTextColor="#f4e664"
            />
            </View>
            </View>
            
            <View style={styles.loginButContainer}>
                <TouchableOpacity 
                    style={styles.loginBut}
                    onPress={()=>{Actions.mappage()}}
                >
                    <Text style={styles.loginTxt}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginForm;