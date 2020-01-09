import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
} from 'react-native';

import {
    ViroARSceneNavigator,
} from 'react-viro';
// import NavigatorContainer from './NavigatorContainer'
// import MainTabNavigator from './js/navigation/MainTabNavigator'
import HomeScreen from './js/screens/HomeScreen'
import LoginScreen from './js/screens/LoginScreen'
import styles from './js/components/styles'

const BASE_URL = 'http://localhost:3000'
const sharedProps = {
    apiKey:"API_KEY_HERE",
}

const InitialARScene = require('./js/ARScene');

const AR_NAVIGATOR_TYPE = "AR";


export default class ViroSample extends Component {
    state = {
        login: false,
        sharedProps : sharedProps,
        users: [],
        assets: []
    }

    onComponentDidMount = () => {
        Promise.all([
            fetch(`${BASE_URL}/users`).then(response => response.json()),
            fetch(`${BASE_URL}/assets`).then(response => response.json())
        ])
            .then(([users, assets]) => {
                console.log(assets)
                this.setState({
                    users,
                    assets
                })
            })
    }

    render() {
        const { login } = this.state
        return(
            <>
                {login ?  this._getHomeScreen() : this._getLogin()}
            </>
        )
    }

    _getHomeScreen = () => {
        return(
            <HomeScreen />
        )
    }

    isLoggedIn = () => {
        this.setState({
            login: true
        })
    }

    _getLogin = () => {
        return(
            <LoginScreen login={this.isLoggedIn} />
        )
    }

    _getARNavigator = () => {
        return (
            <ViroARSceneNavigator 
                {...this.state.sharedProps}
                assets={this.state.assests}
                initialScene={{scene: InitialARScene}} 
            />
        );
    }
}

// const styles = StyleSheet.create({
//     viroContainer :{
//         flex : 1,
//         backgroundColor: "black",
//     },
//     outer : {
//         flex : 1,
//         flexDirection: 'row',
//         alignItems:'center',
//         backgroundColor: "black",
//     },
//     inner: {
//         flex : 1,
//         flexDirection: 'column',
//         alignItems:'center',
//         backgroundColor: "black",
//     },
//     titleText: {
//         paddingTop: 30,
//         paddingBottom: 20,
//         color:'#fff',
//         textAlign:'center',
//         fontSize : 25
//     },
//     buttonText: {
//         color:'#fff',
//         textAlign:'center',
//         fontSize : 20
//     },
//     buttons : {
//         height: 80,
//         width: 150,
//         paddingTop:20,
//         paddingBottom:20,
//         marginTop: 10,
//         marginBottom: 10,
//         backgroundColor:'#68a0cf',
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#fff',
//     },
// });

module.exports = ViroSample
