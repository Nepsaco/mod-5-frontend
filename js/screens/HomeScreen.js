import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { styles } from '../components/styles'
import Footer from '../components/Footer'


export default class HomeScreen extends Component {

    getHomeScreen = () => {
        return (
            <View style={styles.screenContainer} >
                <View style={styles.screenContainer} >
                    <Text style={[ styles.titleText, styles.topPadding ]}>
                        Welcome to Badge
                    </Text>
                    <Text style={styles.mainText}>
                        - Switch to AR mode. 
                    </Text>
                    <Text style={styles.mainText}>
                        -Scan badges to display more information.
                    </Text>
                </View>
                <Footer changeScreen={this.props.changeScreen}/>
            </View>
        )
    }

    render(){
        return this.getHomeScreen()
    }

}

