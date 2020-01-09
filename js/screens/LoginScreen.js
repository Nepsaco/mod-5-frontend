import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../components/LoginForm'
import { styles } from '../components/styles'

export default class LoginScreen extends Component {
    state = {
        login: false
    }

    render(){
        return this.getLogin()
    }

    getLogin = () => {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('../res/avatar.png')} 
                        />
                        <Text style={styles.title}>App made for AR</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

}

