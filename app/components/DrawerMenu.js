import React, { Component, PropTypes } from 'react';

import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { menuItems } from '../data.service';

class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state={route: 0}
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(index) {
    this.props.navigate(index);
  }

  render() {
    return(
      <ScrollView style={styles.drawer}>
        <View style={styles.header} key={0}>
          <View style={styles.headerIcon} key={0}>
            <Icon name="md-boat" size={50} color="#fff" />
          </View>
          <View style={styles.headerInfo} key={1}>
            <Text style={styles.headerTitle} key={0}>
              Lighthouses
            </Text>
            <Text style={styles.headerEmail} key={1}>
              pablodarde@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.content} key={1}>
          <View>
            {menuItems.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.listItem}
                onPress={this.navigateTo.bind(this, item.index)}
              >
                <Image source={{ uri: item.thumb}} style={styles.listItemImage} />
                <Text style={styles.listItemTitle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

DrawerMenu.propTypes = {
  navigate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    height: 180,
    flex: 1,
    padding: 16,
    backgroundColor: '#1565C0'
  },
  content: {
    flex: 3,
    padding: 16,
    backgroundColor: '#1E88E5'
  },
  headerInfo: {
    height: 56
  },
  headerIcon: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20
  },
  headerEmail: {
    color: '#fff',
    fontSize: 16
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 80,
    marginBottom: 10
  },
  listItemTitle: {
    fontSize: 18,
    flexShrink: 1,
    color: '#fff'
  },
  listItemImage: {
    width: 80,
    height: 80,
    borderRadius: 7,
    marginRight: 10,
  }
});

export default DrawerMenu;
