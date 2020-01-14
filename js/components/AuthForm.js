import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from './styles'
const BASE_URL = 'http://localhost:3000'
const HEROKU = 'https://badges-1.herokuapp.com'

export default class AuthForm extends Component {

    state ={
        username: '',
        password: '',
        loggedIn: false
    }

    onLogin = ( event ) => {
        const { username, password } = this.state
        const { changeScreen } = this.props
        fetch(`${HEROKU}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        })
            .then(response => response.json())
            .then(response => AsyncStorage.setItem('token', JSON.stringify(response.token)))
            .then(() => console.warn(AsyncStorage.getItem('token')))
        // if (loggedIn) {

        //     changeScreen('home')
        // }
    }

    render(){
        const { password, username } = this.state
        const { name } = this.props
        return(
            <View style={styles.topPadding}>
                <TextInput 
                    style={styles.input} 
                    value={username}
                    placeholder='Username'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    onChangeText={username => this.setState({ username })}
                    onSubmitEdititng={() => this.passwordInput.focus()}
                    required
                />
                <TextInput 
                    style={styles.input} 
                    value={password}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='go'
                    onChangeText={password => this.setState({ password })}
                    ref={(input) => this.passwordInput = input}
                    required
                />
                <TouchableOpacity style={styles.buttons} onPress={this.onLogin}>
                    <Text 
                        style={styles.buttonText}
                    >
                        {name} 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

