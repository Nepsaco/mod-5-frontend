import React, { Component } from 'react'
import { Text, TextInput, View, Button, Image, TouchableOpacity, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { styles } from '../components/styles'
import UpdateForm from '../components/UpdateForm'
import Footer from '../components/Footer'


export default class ProfileScreen extends Component {
    state = {
        displayButton: true
    }

    logout = () => {
        this.props.removeToken()
        this.props.changeScreen('login')
    }

    toggleButton = () => {
        this.setState({displayButton: !this.state.displayButton})
    }

    getProfileScreen = () => {
        const { user, changeScreen } = this.props
        return (
            <View style={styles.screenContainer} >
                <View style={styles.screenContainer} >
                    <Text style={[ styles.titleText, styles.topPadding ]}>
                        Welcome {user.username}
                    </Text>
                    { this.state.displayButton
                        ? <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttons} >
                                <Text 
                                    style={styles.buttonText}
                                    onPress={this.toggleButton}
                                >
                                    UPDATE
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons} >
                                <Text 
                                    style={styles.buttonText}
                                    onPress={this.logout}
                                >
                                    LOGOUT
                                </Text>
                            </TouchableOpacity>
                        </View>
                        : <UpdateForm 
                            user={user}
                            changeScreen={changeScreen}
                            toggleButton={this.toggleButton}
                            />
                    }
                </View>
                <Footer changeScreen={changeScreen}/>
            </View>
        )
    }

    render(){
        return this.getProfileScreen()
    }

}

