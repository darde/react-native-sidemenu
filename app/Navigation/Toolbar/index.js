import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { bgHeader } from "../../global.styles";

const Toolbar = ({ showMenu, goBack, actualRouteName }) => (
  <View style={styles.header}>
    <Icon.ToolbarAndroid
      navIconName={actualRouteName === 'Home' ? 'menu' : 'arrow-left'}
      titleColor="#fff"
      title={actualRouteName}
      onIconClicked={actualRouteName === 'Home' ? showMenu : goBack }
      overflowIconName="dots-vertical"
      style={{ height: 56 }}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: bgHeader,
    height: 80, // 56dp AppBar height plus 24dp correction for the StatusBar translucent
    paddingTop: 24, // StatusBar's height
  },
});

export default Toolbar;