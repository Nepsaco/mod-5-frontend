import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { styles } from '../components/styles'
import Footer from '../components/Footer'


export default class HomeScreen extends Component {

    getHomeSceen = () => {
        return (
            <View style={styles.screenContainer} >
                <View style={styles.screenContainer} >
                    <Text style={styles.titleText}>
                        Welcome to Badge
                    </Text>
                </View>
                <Footer changeScreen={this.props.changeScreen}/>
            </View>
        )
    }

    render(){
        return this.getHomeSceen()
    }

}

