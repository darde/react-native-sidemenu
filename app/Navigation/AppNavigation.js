import * as React from 'react';
import {
  View,
  Text,
    Button,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import HeaderLeft from './HeaderLeft';
import AugustineScreen from '../Views/Augustine';
import HerculesScreen from '../Views/Hercules';
import HomeScreen from '../Views/Home';
import { bgHeader } from '../styles';

const customStyles = StyleSheet.create({
    navigation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: bgHeader,
        height: 80, // 56dp AppBar height plus 24dp correction for the StatusBar translucent
        paddingTop: 24, // StatusBar's height
    },
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Augustine: AugustineScreen,
        Hercules: HerculesScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerStyle: customStyles.header,
            headerTintColor: '#ffffff',
            headerLeft: <HeaderLeft navigation={navigation} isHome={false} />,
        }),
    },
);

const DrawerNavigator = createDrawerNavigator({
    HomeStack: HomeStack,
    Home: HomeScreen,
    Augustine: AugustineScreen,
    Hercules: HerculesScreen,
});

export default createAppContainer(DrawerNavigator);