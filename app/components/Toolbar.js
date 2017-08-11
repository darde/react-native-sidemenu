import React, { Component, PropTypes } from 'react';
import {
  View,
  LinearGradient,
  Text,
  ToolbarAndroid,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import I18n from '../i18n';
import { ICONS } from '../constants';
import { defaultThemTextColor } from '../global-styles';

const onActionSelected = (position, changeRoute) => {
  debugger;
  switch (position) {
    case 0:
      debugger;
      changeRoute(2);
    break;
    case 1:
      debugger;
      changeRoute(3);
    break;
  }
}

const Toolbar = ({title, actions, openDrawer, changeRoute}) => (
  <Icon.ToolbarAndroid
    titleColor={defaultThemTextColor}
    navIconName={ICONS.navIconName}
    overflowIconName={ICONS.overflowIconName}
    actions={
      (() => { 
        const _actionsI18n = actions.slice();
        _actionsI18n.map((item) => Object.assign(item, {
          ...item,
          title: I18n.t(item.label),
        }));
        return _actionsI18n;
      })()
    }
    onIconClicked={openDrawer}
    onActionSelected={(position) => { onActionSelected(position, changeRoute); }}
    style={styles.toolbar}
  >
    <View style={styles.appBarLogo}>
      <TouchableOpacity onPress={() => { changeRoute(0); }}>
        <Icon name={ICONS.appBarLogo} size={30} color={defaultThemTextColor} />
      </TouchableOpacity>
      <Text
        style={styles.appBarTitle}
        numberOfLines={1}
      >
        {I18n.t(title)}
      </Text>
    </View>
  </Icon.ToolbarAndroid>
)

Toolbar.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    show: PropTypes.string.isRequired,
    routeIndex: PropTypes.number.isRequired,
  }).isRequired),
  openDrawer: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#fff',
    elevation: 4
  },
  appBarLogo: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  appBarTitle: {
    fontSize: 20,
    color: defaultThemTextColor,
    paddingLeft: 10
  }
});

export default Toolbar;
