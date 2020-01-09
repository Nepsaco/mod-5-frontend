import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './js/screens/HomeScreen'

const AppNavigator = createStackNavigator(
    {
        //screens
        HomeScreen
    },
    {
        //styling
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3282b8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
)

export default createAppContainer(AppNavigator)
