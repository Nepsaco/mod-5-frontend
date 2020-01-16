import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Button, Alert } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';
import { styles } from './styles'
const BASE_URL = 'http://localhost:3000'
const HEROKU = 'https://badges-1.herokuapp.com'

const method = 'POST'
const headers = {'Content-Type': 'application/json'}
const handleResponse = (response) => response.json()

export default class AuthForm extends Component {

    state ={
        username: '',
        password: '',
    }

    onLogin = ( event ) => {
        const { username, password } = this.state
        const { changeScreen, setUser, setToken } = this.props
        const user = { user: { username, password } }
        fetch(`${HEROKU}/login`, { method, headers, body: JSON.stringify(user) })
            .then(handleResponse)
            .then(response => { 
                if ( response.error ) {
                    console.warn(response.error) 
                } else {
                    setUser({id: response.user_id,  username: response.username }) 
                    setToken(response.token) 
                    changeScreen('home') 
                }
            })
    }

    onSignIn = ( event ) => {
        const { username, password } = this.state
        const { changeScreen, setUser, setToken } = this.props
        const user = { user: { username, password } }
        fetch(`${HEROKU}/users`, { method, headers, body: JSON.stringify(user) })
            .then(() => {
                fetch(`${HEROKU}/login`, { method, headers, body: JSON.stringify(user) })
                    .then(handleResponse)
                    .then(response => { 
                        if ( response.error ) {
                            console.warn(response.error) 
                        } else {
                            setUser({id: response.user_id,  username: response.username }) 
                            setToken(response.token) 
                            changeScreen('home') 
                        }
                    })
            })
    }

    render(){
        const { password, username } = this.state
        const { name, login } = this.props
        return(
            <View>
                <View style={styles.buttonContainer}>
                <TextInput 
                    style={styles.input} 
                    value={username}
                    placeholder='Username'
                    placeholderTextColor='rgba(255, 255, 255, 0.9)'
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
                    placeholderTextColor='rgba(255, 255, 255, 0.9)'
                    returnKeyType='go'
                    onChangeText={password => this.setState({ password })}
                    ref={(input) => this.passwordInput = input}
                    required
                />
                <TouchableOpacity style={styles.buttons} onPress={login ? this.onLogin :this.onSignIn}>
                    <Text 
                        style={styles.buttonText}
                    >
                        {name} 
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

