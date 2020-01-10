import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Button, Alert } from 'react-native'
import { styles } from './styles'

export default class AuthForm extends Component {

    state ={
        username: '',
        password: ''
    }

    onLogin = ( event ) => {
        const { username, password } = this.state
        const { changeScreen } = this.props
        changeScreen('home')
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

