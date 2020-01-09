import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { styles } from '../components/styles'

export default class HomeScreen extends Component {
    render(){
        return this.getHomeSceen()
    }

    getHomeSceen = () => {
        return (
            <View style={styles.outer} >
                <View style={styles.inner} >
                    <Text style={styles.titleText}>
                        Welcome to Badge
                    </Text>
                </View>
            </View>
        )
    }

}

