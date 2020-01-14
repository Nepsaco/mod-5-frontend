import React, { Component } from 'react';
import { AppRegistry, Button, Text, View, StyleSheet, PixelRatio, TouchableHighlight, TouchableOpacity } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './js/screens/HomeScreen'
import LoginScreen from './js/screens/LoginScreen'
import SignInScreen from './js/screens/SignInScreen'
const InitialARScene = require('./js/ARScene');
import Footer from './js/components/Footer'
import { styles } from './js/components/styles'

const BASE_URL = 'http://localhost:3000'
const HEROKU = 'https://badges-1.herokuapp.com'


export default class App extends Component {
    state = {
        navigation: '',
        users: [],
        assets: [],
        token: null
    }

    componentDidMount = () => {
        return fetch(`${HEROKU}/assets`)
            .then(response => response.json())
            .then(assets => { this.setState({ assets }) })
    }

    checkToken = () => {
        // token = AsyncStroage.getItem('token')

            token = AsyncStroage.setItem('token', "hi")
            if (token !== ''){
                this.setState({
                    token
                })
            }
        }
    }
    // setToken
    //
    // removeToken
    getHomeScreen = () => {
        return(
            <HomeScreen 
                changeScreen={this.changeScreen}
            />
        )
    }

    getLogin = () => {
        return(
            <LoginScreen 
                changeScreen={this.changeScreen}
            />
        )
    }

    getSignIn = () => {
        return(
            <SignInScreen 
                changeScreen={this.changeScreen}
            />
        )
    }

    getARNavigator = () => {
        return (
            <View style={styles.flexContainer}>
                {this.state.assets > 0
                    ? <ViroARSceneNavigator 
                        style={styles.flexContainer}
                        numberOfTrackedImages={2}
                        viroAppProps={this.state.assets}
                        initialScene={{scene: InitialARScene}} 
                    />
                    : console.warn('error')
                }
                <Footer  
                    changeScreen={this.changeScreen}
                />
            </View>
        ) 
    }

    changeScreen = (screen) => {
        this.setState({
            navigation: screen
        })
    }

    getScreen = () => {
        switch (this.state.navigation) {
            case 'home': 
                return this.getHomeScreen()
            case 'ar':
                return this.getARNavigator()
            case 'signIn':
                return this.getSignIn()
            case 'logIn':
                return this.getLogin()
            default: 
                return this.getHomeScreen()
        }
    }

    render() {
        const { token } = this.state
        console.warn(token)
        console.warn(AsyncStorage.getItem('token'))
        return this.getScreen() 
    }
}

