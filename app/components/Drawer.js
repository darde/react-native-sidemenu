import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import I18n from '../i18n';
import { ICONS } from '../constants';
import { defaultThemTextColor } from '../global-styles';

const Drawer = ({ menuItems, changeRoute, toggleDrawer }) => (
  <ScrollView style={styles.drawer}>
    <Image 
      style={styles.header}
      source={require('../img/bg_drawer.jpg')}
      resizeMode={Image.resizeMode.cover}
      key={0}
    >
      <View style={styles.headerIcon} key={0}>
        <MCIcon name={ICONS.appBarLogo} size={50} color="#fff" />
      </View>
      <View style={styles.headerInfo} key={1}>
        <Text style={styles.headerTitle} key={0}>
          {I18n.t('app-title')}
        </Text>
        <Text style={styles.headerSubtitle} key={1}>
          {I18n.t('app-subtitle')}
        </Text>
      </View>
    </Image>
    <View style={styles.content} key={1}>
      <View>
        {menuItems.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.listItem}
            onPress={() => { toggleDrawer(); changeRoute(item.routeIndex); }}
          >
            <View style={styles.listItemImage}>
              {
                item.library === 'MaterialCommunity' && (<MCIcon name={item.icon} size={20} color={defaultThemTextColor} />)
              }
              {
                item.library === 'FontAwesome' && (<FAIcon name={item.icon} size={20} color={defaultThemTextColor} />)
              }
            </View>
            <Text style={styles.listItemTitle}>{I18n.t(item.label)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </ScrollView>
)

Drawer.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    routeIndex: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    library: PropTypes.string.isRequired,
  })).isRequired,
  changeRoute: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: defaultThemTextColor,
  },
  header: {
    width: undefined,
    height: undefined,
    flex: 1,
    alignSelf: 'stretch',
    padding: 16,
    backgroundColor: '#fff',
  },
  content: {
    flex: 3,
    padding: 0,
  },
  headerInfo: {
    height: 56,
  },
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0.5 },
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    paddingLeft: 20,
    borderBottomWidth: 1, 
    backgroundColor: '#fff',
    borderColor: 'rgba(0,126,189,.2)',
  },
  listItemTitle: {
    fontSize: 18,
    flexShrink: 1,
    color: defaultThemTextColor,
  },
  listItemImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: 10,
  }
});

export default Drawer;