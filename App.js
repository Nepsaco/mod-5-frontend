import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, Modal, Button, Text, View, StyleSheet, PixelRatio, TouchableHighlight, TouchableOpacity } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
// import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './js/screens/HomeScreen'
import LoginScreen from './js/screens/LoginScreen'
import SignInScreen from './js/screens/SignInScreen'
import ProfileScreen from './js/screens/ProfileScreen'
import Footer from './js/components/Footer'
const InitialARScene = require('./js/ARScene');
import { styles } from './js/components/styles'

const BASE_URL = 'http://localhost:3000'
const HEROKU = 'https://badges-1.herokuapp.com'


export default class App extends Component {
    state = {
        navigation: 'ar',
        user: {},
        assets: [],
        token: '',
        loading: true
    }

    componentDidMount = () => {
        return fetch(`${HEROKU}/assets`)
            .then(response => response.json())
            .then(assets => { this.setState({ assets }) })
            .then(this.checkLoading)
    }

    checkToken = () => {
        console.warn(this.state.token)
        if (!this.state.token){
            this.setState({
                navigation: 'logIn'
            })
            // } else {
            // this.setState({
            //     token
            // })
        }
    }

    setToken = (token) => {
        this.setState({ token })
    }

    setUser = (user) => {
        this.setState({ user })
    }

    removeToken = () => {
        this.setState({token: ''})
        // AsyncStorage.removeItem('token')
    }

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
                setUser={this.setUser}
                setToken={this.setToken}
            />
        )
    }

    getSignIn = () => {
        return(
            <SignInScreen 
                changeScreen={this.changeScreen}
                setUser={this.setUser}
                setToken={this.setToken}
            />
        )
    }

    getProfile = () => {
        return(
            <ProfileScreen
                changeScreen={this.changeScreen}
                user={this.state.user}
                setUser={this.setUser}
                setToken={this.setToken}
                removeToken={this.removeToken}
            />
        )
    }

    getARNavigator = () => {
        return (
            <View style={styles.flexContainer}>
                {!this.state.loading 
                    ? <ViroARSceneNavigator 
                        style={styles.flexContainer}
                        numberOfTrackedImages={1}
                        viroAppProps={this.state.assets}
                        initialScene={{scene: InitialARScene}} 
                        autofocus={true}
                    />
                    : console.warn(this.state.assets)
                }
                <Footer  
                    changeScreen={this.changeScreen}
                />
            </View>
        ) 
    }

    getModal = () => {
        return(
            <View style={styles.modal}>
                <Modal
                    visible={this.state.loading}
                    animationType='slide'
                    transparent={true}
                >
                        <View style={styles.flexContainerCenter}>
                            <ActivityIndicator size='large' color='#3282b8'/>
                        </View>
                </Modal>
            </View>
        )
    }

    checkLoading = () => {
        if (this.state.assets.length > 0){
            this.setState({
                loading: false
            })
        } else {
            setInterval(() =>{
                this.checkLoading()
            }, 5000)
        }
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
            case 'profile':
                return this.getProfile()
            default: 
                return this.getLogin()
        }
    }

    render = () => {
        return(
            <>
                {this.state.loading ? this.getModal() :this.getScreen()}
            </>
        ) 
    }
}

