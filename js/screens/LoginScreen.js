import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, TouchableOpacity, StyleSheet,ImageBackground, KeyboardAvoidingView } from 'react-native';
import AuthForm from '../components/AuthForm'
import { styles } from '../components/styles'

export default class LoginScreen extends Component {

    goToSignIn = () => {
        this.props.changeScreen('signIn')
    }

    getLogin = () => {
        const { setUser, setToken, changeScreen } = this.props
        return(
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../res/download.jpeg')} 
                    />
                    <Text style={styles.title}>App to get a little more information</Text>
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                    <View style={styles.formContainer}>
                        <AuthForm 
                            name={'LOGIN'}
                            changeScreen={changeScreen}
                            setUser={setUser}
                            setToken={setToken}
                            login={true}
                        />
                    </View>
                </KeyboardAvoidingView>
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
        )
    }

    render(){
        return this.getLogin()
    }
}

