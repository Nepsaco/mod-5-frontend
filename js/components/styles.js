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
        padding: 10
    },

    logo: {
        width: 100,
        height: 100
    },

    topPadding: {
        padding: 20
    },

    titleText: {
        color: colors.white,
        fontSize: 50,
        fontWeight: 'bold'
    },

    outer : {
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
        fontWeight: '700'
    },

    buttons : {
        width: 150,
        paddingTop:20,
        paddingBottom:20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.navy,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.light,
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
        borderColor: colors.white
    },


    title: {
        color: colors.white,
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.8
    },
})

export{ styles }
