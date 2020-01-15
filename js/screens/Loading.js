import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { styles } from '../components/styles'
import Footer from '../components/Footer'


export default class Loading extends Component {

    getLoadingScreen = () => {
        return (
            <View style={styles.screenContainer} >
                <Text style={styles.titleText}>
                    Loading...
                </Text>
            </View>
        )
    }

    render(){
        return this.getHomeSceen()
    }

}

