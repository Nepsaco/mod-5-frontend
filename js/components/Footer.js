import React from 'react'
import { View, TouchableOpacity, Icon } from 'react-native'
import { styles } from '../components/styles'

export default function Footer() {

        return(
            <View style={styles.outer}>
                <TouchableOpacity >
                    <Icon name='Home' />
                </TouchableOpacity >
            </View>
        )
}
