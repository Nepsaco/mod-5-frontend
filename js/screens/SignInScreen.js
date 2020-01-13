import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableOpacity, TouchableHighlight, StyleSheet,ImageBackground, KeyboardAvoidingView } from 'react-native';
import AuthForm from '../components/AuthForm'
import { styles } from '../components/styles'

export default class SignInScreen extends Component {


    goToLogin = () => {
        return this.props.changeScreen('logIn')
    }


    getSignIn = () => {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <View style={styles.loginContainer}>
                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('../res/download.jpeg')} 
                        />
                        <Text style={styles.title}>Sign Up</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <AuthForm 
                            name={'SIGN UP'}
                            changeScreen={this.props.changeScreen}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttons} >
                                <Text 
                                    style={styles.buttonText}
                                    onPress={this.goToLogin}
                                >
                                    LOGIN
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

    render(){
        return this.getSignIn()
    }
}

