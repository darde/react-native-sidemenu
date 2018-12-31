import * as React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import routes from './routes';

const MainStack = createStackNavigator(
    {
      ...routes,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    },
);

export default createAppContainer(MainStack);