import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {
    ViroARSceneNavigator,
} from 'react-viro';
// import NavigatorContainer from './NavigatorContainer'
// import MainTabNavigator from './js/navigation/MainTabNavigator'
import HomeScreen from './js/screens/HomeScreen'
import LoginScreen from './js/screens/LoginScreen'
import SignInScreen from './js/screens/SignInScreen'
const InitialARScene = require('./js/ARScene');
import Footer from './js/components/Footer'
import { styles } from './js/components/styles'

const BASE_URL = 'http://localhost:3000'
const HEROKU = 'https://badges-1.herokuapp.com/'


export default class ViroSample extends Component {
    state = {
        navigation: 'ar',
        users: [],
        assets: []
    }

    componentDidMount = () => {
        return fetch(`${HEROKU}/assets`)
            .then(response => response.json())
            .then(assets => { this.setState({ assets }) })
    }



    _getHomeScreen = () => {
        return(
            <HomeScreen 
                changeScreen={this.changeScreen}
            />
        )
    }

    _getLogin = () => {
        return(
            <LoginScreen 
                changeScreen={this.changeScreen}
            />
        )
    }

    _getSignIn = () => {
        return(
            <SignInScreen 
                changeScreen={this.changeScreen}
            />
        )
    }

    _getARNavigator = () => {
        return (
            <View style={styles.flexContainer}>
                <ViroARSceneNavigator 
                    style={styles.flexContainer}
                    numberOfTrackedImages={2}
                    viroAppProps={{assets: this.state.assets}}
                    initialScene={{scene: InitialARScene, passProps:{assets:this.state.assets}}} 
                />
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

    _getScreen = () => {
        switch (this.state.navigation) {
            case 'home': 
                return this._getHomeScreen()
            case 'ar':
                return this._getARNavigator()
            case 'signIn':
                return this._getSignIn()
            case 'logIn':
                return this._getLogin()
            default: 
                return this._getLogin()
        }
    }

    render() {
        return this._getScreen()
    }

}

module.exports = ViroSample
