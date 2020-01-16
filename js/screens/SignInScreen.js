import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableOpacity, TouchableHighlight, StyleSheet,ImageBackground, KeyboardAvoidingView } from 'react-native';
import AuthForm from '../components/AuthForm'
import { styles } from '../components/styles'

export default class SignInScreen extends Component {


    goToLogin = () => {
        return this.props.changeScreen('logIn')
    }


    getSignIn = () => {
        const { setUser, setToken, changeScreen } = this.props
        return(
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../res/download.jpeg')} 
                    />
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                    <View style={styles.formContainer}>
                        <AuthForm 
                            name={'SIGN UP'}
                            changeScreen={changeScreen}
                            setUser={setUser}
                            setToken={setToken}
                        />
                    </View>
                </KeyboardAvoidingView>
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
        )
    }

    render(){
        return this.getSignIn()
    }
}

