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

const sharedProps = {
    apiKey:"API_KEY_HERE",
}

const InitialARScene = require('./js/ARScene');

const AR_NAVIGATOR_TYPE = "AR";


export default class ViroSample extends Component {
        state = {
            login: false,
            sharedProps : sharedProps
         }

    render() {
        const { login } = this.state
        return(
            <>
            {!login ?  this._getARNavigator() : this._getLogin()}
            </>
        )
    }

    _getLogin = () => {
        return (
            <View style={localStyles.outer} >
                <View style={localStyles.inner} >
                    <Text style={localStyles.titleText}>
                        Welcome to Art Info!
                    </Text>
                    <Text>
                        Login
                    </Text>
                </View>
            </View>
        );
    }

    _getARNavigator = () => {
        return (
            <ViroARSceneNavigator {...this.state.sharedProps}
                initialScene={{scene: InitialARScene}} />
        );
    }
}

const localStyles = StyleSheet.create({
    viroContainer :{
        flex : 1,
        backgroundColor: "black",
    },
    outer : {
        flex : 1,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: "black",
    },
    inner: {
        flex : 1,
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor: "black",
    },
    titleText: {
        paddingTop: 30,
        paddingBottom: 20,
        color:'#fff',
        textAlign:'center',
        fontSize : 25
    },
    buttonText: {
        color:'#fff',
        textAlign:'center',
        fontSize : 20
    },
    buttons : {
        height: 80,
        width: 150,
        paddingTop:20,
        paddingBottom:20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    exitButton : {
        height: 50,
        width: 100,
        paddingTop:10,
        paddingBottom:10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
});

module.exports = ViroSample
