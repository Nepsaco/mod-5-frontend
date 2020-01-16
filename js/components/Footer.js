import React from 'react'
import { View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native'
import { styles } from '../components/styles'

export default class Foot extends React.Component{

    goToAR = () => {
        this.props.changeScreen('ar')
    }

    goToHome = () => {
        this.props.changeScreen('home')
    }

    goToProfile = () => {
        this.props.changeScreen('profile')
    }

    render(){
        return(
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.tabBar} >
                    <Text 
                        style={styles.buttonText}
                        onPress={this.goToHome}
                    >
                        HOME                        
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBar} >
                    <Text 
                        style={styles.buttonText}
                        onPress={this.goToAR}
                    >
                        AR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBar} >
                    <Text 
                        style={styles.buttonText}
                        onPress={this.goToProfile}
                    >
                        PROFILE
                    </Text>
                </TouchableOpacity>
            </View>
        )

    }
}

