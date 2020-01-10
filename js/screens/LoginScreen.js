import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, TouchableOpacity, StyleSheet,ImageBackground, KeyboardAvoidingView } from 'react-native';
import AuthForm from '../components/AuthForm'
import { styles } from '../components/styles'

export default class LoginScreen extends Component {

    goToSignIn = () => {
        this.props.changeScreen('signIn')
    }

    getLogin = () => {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <View style={styles.loginContainer}>
                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('../res/avatar.png')} 
                        />
                        <Text style={styles.title}>App to get a little more information</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <AuthForm 
                            name={'LOGIN'}
                            changeScreen={this.props.changeScreen}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttons} >
                                <Text 
                                    style={styles.buttonText}
                                    onPress={this.goToSignIn}
                                >
                                    SIGN UP
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

    render(){
        return this.getLogin()
    }
}

