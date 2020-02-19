import React, { Component } from 'react'
import { View, TextInput, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
const BASE_URL = 'http://localhost:3000'
const HEROKU = 'https://badges-1.herokuapp.com'

const method = 'PUT'
const headers = {'Content-Type': 'application/json'}
const handleResponse = (response) => response.json()

export default class UpdateForm extends Component {

    state ={
        id: '',
        username: '',
        password: '',
    }

    onUpdate = ( event ) => {
        const { username, password} = this.state
        const { changeScreen, setUser, setToken, toggleButton, user } = this.props
        const payload = { user: { id: user.id, username, password } }
        fetch(`${HEROKU}/users/${user.id}`, { method, headers, body: JSON.stringify(payload) })
            .then(handleResponse)
            .then(response => { 
                if ( response.error ) {
                    console.warn(response.error) 
                } else {
                    setUser({id: response.id,  username: response.username }) 
                    setToken(response.token) 
                    toggleButton()
                }
            })
    }

    render(){
        const { password, username } = this.state
        const { user } = this.props
        return(

                <View style={[styles.topPadding, styles.flexContainer]}>
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                    <View style={styles.buttonContainer}>
                        <TextInput 
                            style={styles.input} 
                            value={username}
                            placeholder={'Enter New Username'}
                            placeholderTextColor='rgba(255, 255, 255, 0.9)'
                            returnKeyType='next'
                            onChangeText={username => this.setState({ username })}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            required
                        />
                        <TextInput 
                            style={styles.input} 
                            value={password}
                            placeholder={'Enter New Password'}
                            secureTextEntry={true}
                            placeholderTextColor='rgba(255, 255, 255, 0.9)'
                            returnKeyType='go'
                            onChangeText={password => this.setState({ password })}
                            ref={(input) => this.passwordInput = input}
                            onSubmitEditing={this.onUpdate}
                            required
                        />
                    </View>
            </KeyboardAvoidingView>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttons} onPress={this.onUpdate} >
                            <Text 
                                style={styles.buttonText}
                            >
                                UPDATE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

