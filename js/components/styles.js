import { StyleSheet } from 'react-native'

const colors = {
    dark: '#1b262c',
    navy: '#0f4c75',
    blue: '#3282b8',
    light: '#bbe1fa'
}

const styles = StyleSheet.create({

    topPadding: {
        padding: 20
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 30,
    },

    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3498db'
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }, 

    buttons: {
        height: 60,
        width: 150,
        paddingTop: 17,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#1ecfc9',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },

    title: {
        color: '#fff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.8
    },
})

export{ styles }
