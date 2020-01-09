import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

export default class LoginForm extends Component {
    render(){
        return(
            <View style={styles.topPadding}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Username'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    onSubmitEdititng={() => this.passwordInput.focus()}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Password'
                    secureTextEntry
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='go'
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

