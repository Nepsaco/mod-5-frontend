import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
    state = {
        login: false
    }

    render(){
        return this.getHomeSceen()
    }

    getHomeSceen = () => {
        return (
            <View style={localStyles.outer} >
                <View style={localStyles.inner} >
                    <Text style={localStyles.titleText}>
                        Welcome to Badge Info!
                    </Text>
                    <Text style={localStyles.titleText}>
                        Login
                    </Text>
                    <TouchableHighlight 
                        style={localStyles.buttons}
                        underlayColor={'hsl(240, 30%, 50%)'}
                    >
                        <Button title='Next' onPress={() => this.setState({login: !this.state.login})}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
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

