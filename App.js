/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button,
  StatusBar,
} from 'react-native';
import AppNavigation from './app/Navigation/AppNavigation';
import {bgHeader, bgStatusBar} from './app/styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            translucent
            backgroundColor={bgStatusBar}
            animated
        />
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
