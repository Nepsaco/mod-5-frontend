import { StyleSheet } from 'react-native'

const colors = {
    dark: '#1b262c',
    navy: '#0f4c75',
    blue: '#3282b8',
    light: '#bbe1fa',
    grey: '#6699CC',
    white: '#FFF'
}

const styles = StyleSheet.create({

    modal: {
        backgroundColor: colors.dark,
    },

    flexContainer: {
        flex: 1
    },

    flexContainerCenter: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.dark,
    },

    loginContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.dark,
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    formContainer: {
        flex: 2,
        padding: 10
    },

    logo: {
        width: 100,
        height: 100
    },

    topPadding: {
        marginTop: 20,
        padding: 30
    },

    titleText: {
        color: colors.white,
        fontSize: 50,
        fontWeight: 'bold',
    },

    screenOuter : {
        flex : 1,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: colors.dark,
    },

    inner: {
        flex : 1,
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor: colors.dark,
    },

    input: {
        height: 40,
        width: 150,
        backgroundColor: colors.grey,
        marginBottom: 10,
        color: colors.white,
        paddingHorizontal: 30,
        opacity: 0.7
    },

    buttonText: {
        color: colors.white,
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
        backgroundColor: colors.blue,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.dark,
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        color: colors.white,
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.8
    },

    screenContainer: {
        flex: 4,
        flexDirection: 'column',
        backgroundColor: colors.dark,
    },

    footerContainer: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    tabBar: {
        height: 60,
        width: 140,
        paddingTop: 17,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.blue,
        borderWidth: 0.5,
        borderColor: colors.dark
    }
})

export{ styles }
