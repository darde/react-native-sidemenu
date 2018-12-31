import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  bgDrawerHeader,
  drawerLogoColor,
  headerColor,
  drawerItemColor,
  bgDrawerInactiveItem,
  bgDrawer,
} from '../global.styles';
import routes from './routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = ({ navigateTo, activeRouteName }) => (
  <ScrollView>
    <View style={styles.header}>
      <View style={styles.headerLogo}>
        <Icon name="ferry" size={50} color={drawerLogoColor} />
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.drawerTitle}>Lighthouses</Text>
        <Text style={styles.drawerEmail}>pablodarde@gmail.com</Text>
      </View>
    </View>
    {routes.map(route => (
      <TouchableOpacity
        key={route.screen}
        onPress={() => navigateTo(route.name)}
        style={activeRouteName === route.name ? [styles.drawerItem, styles.activeDrawerItem] : styles.drawerItem}
      >
        {route.icon && (
          <View style={styles.drawerItemLogo}>
            <Icon name={route.icon} size={30} color='#666' />
          </View>
        )}
        <Text>{route.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

DrawerContent.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  activeRouteName: PropTypes.string,
};

DrawerContent.defaultProps = {
  activeRouteName: '',
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    paddingTop: 40, // 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16,
    height: 170,
    backgroundColor: bgDrawerHeader,
  },
  headerLogo: {
    width: 64,
    height:64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  subTitle: {
    height: 56,
    paddingTop: 8,
  },
  drawerTitle: {
    color: headerColor,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
  },
  drawerEmail: {
    color: headerColor,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
  },
  activeDrawerItem: {
    backgroundColor: bgDrawer,
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: bgDrawerInactiveItem,
    color: drawerItemColor,
    height: 48,
    paddingLeft: 16,
  },
  drawerItemLogo: {
    paddingRight: 16,
  },
});

export default DrawerContent;
